'use strict';
var $;
var LPUtils;
var LPWs;

const apiRequestTypes = ['.ams.aam.SubscribeExConversations','.ams.ms.PublishEvent','.ams.cm.ConsumerRequestConversation','.ams.ms.SubscribeMessagingEvents'];

$(document).ready(() => {
  prepareToConnect();
});

function prepareToConnect() {
  $('#connect').text('connect').unbind('click').click(() => {
    $('#connect').text('connecting...');
    const account = $('#account').prop('disabled',true).val();
    LPUtils.getJWT(account).then(jwt => {
      LPUtils.getDomain(account, 'asyncMessagingEnt').then(umsDomain => {
        LPWs.connect(`wss://${umsDomain}/ws_api/account/${account}/messaging/consumer/${jwt}?v=3`)
        .then(
          openedSocket => handleOpenedSocket(openedSocket,jwt), 
          errorOpening => {
            $('#log').append(`error opening connection ${errorOpening}\n`);
            prepareToConnect();
          });
      });
    }, errorGettingJwt => {
      $('#connect').text('connect');
      $('#account').prop('disabled',false).val();      
      $('#log').append(`error ${errorGettingJwt} getting jwt for account ${account}\n`);
    });
  });
}

function handleOpenedSocket(socket,jwt) {
  $('#log').html(`connection is opened.\n`);
  socket.registerRequests(apiRequestTypes);

  const me = myId(jwt);
  socket.onNotification(withType('MessagingEvent'),
    body => body.changes.forEach(change => {
      switch (change.event.type) {
        case 'ContentEvent':
          $('#log').append(`${change.originatorId===me? 'you':'agent'}: ${change.event.message}\n`);
      }
    }));

  // subscribe to open conversations metadata
  socket.subscribeExConversations({
    'convState': ['OPEN']
  }).then(resp => {
    var openConvs = {};
    socket.onNotification(withSubscriptionID(resp.body.subscriptionId),
      (notificationBody) => handleConversationNotification(socket,notificationBody,openConvs));

    $('#send').prop('disabled', false).click(() => {
      if (Object.keys(openConvs)[0]) {
        publishTo(socket,Object.keys(openConvs)[0]);
      } else  {
        socket.consumerRequestConversation()
          .then(resp => publishTo(socket,resp.body.conversationId));                                            
      }
    });
  });

  $('#connect').text('disconnect').unbind('click').click(() => socket.ws.close());
  socket.ws.onclose = (evt) => onCloseSocket(socket,evt);
}

function handleConversationNotification(socket,notificationBody,openConvs) {
  notificationBody.changes.forEach(change => {
    if (change.type === 'UPSERT') {
      if (!openConvs[change.result.convId]) {
        openConvs[change.result.convId] = change.result;
        socket.subscribeMessagingEvents({
          fromSeq: 0,
          dialogId: change.result.convId
        });
      }
    } else if (change.type === 'DELETE') {
      delete openConvs[change.result.convId];
      $('#log').append(`conversation was closed.\n`);
    }
  });
}

function onCloseSocket(socket,evt) {
  socket.ws = null;
  $('#log').append(`connection was closed with code ${evt.code}\n`);
  prepareToConnect();
  $('#send').prop('disabled', true).unbind('click');
  $('#account').prop('disabled',false).val();        
}

function publishTo(socket,convID) {
  socket.publishEvent({
    dialogId: convID,
    event: {
      type: 'ContentEvent',
      contentType: 'text/plain',
      message: $('#textline').val()
    }
  })
  .then(resp => $('#textline').val(''));
}

function withSubscriptionID(subscriptionID) {
  return notif => notif.body.subscriptionId === subscriptionID;
}

function withType(type) {
  return notif => notif.type.includes(type);
}

function myId(jwt) {
  return JSON.parse(atob(jwt.split('.')[1])).sub;
}
