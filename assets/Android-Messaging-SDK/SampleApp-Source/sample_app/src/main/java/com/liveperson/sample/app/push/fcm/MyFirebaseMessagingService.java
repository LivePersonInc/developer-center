package com.liveperson.sample.app.push.fcm;

/**
 * Created by nirni on 11/17/16.
 */

import android.os.Bundle;
import android.util.Log;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import com.liveperson.infra.messaging_ui.uicomponents.PushMessageParser;
import com.liveperson.messaging.sdk.api.LivePerson;
import com.liveperson.sample.app.Utils.SampleAppStorage;
import com.liveperson.sample.app.push.NotificationUI;

import java.util.Map;

public class MyFirebaseMessagingService extends FirebaseMessagingService {

	private static final String TAG = "MyFirebaseMsgService";

	/**
	 * Called when message is received.
	 *
	 * @param remoteMessage Object representing the message received from Firebase Cloud Messaging.
	 */
	// [START receive_message]
	@Override
	public void onMessageReceived(RemoteMessage remoteMessage) {
		// [START_EXCLUDE]
		// There are two types of messages data messages and notification messages. Data messages are handled
		// here in onMessageReceived whether the app is in the foreground or background. Data messages are the type
		// traditionally used with GCM. Notification messages are only received here in onMessageReceived when the app
		// is in the foreground. When the app is in the background an automatically generated notification is displayed.
		// When the user taps on the notification they are returned to the app. Messages containing both notification
		// and data payloads are treated as notification messages. The Firebase console always sends notification
		// messages. For more see: https://firebase.google.com/docs/cloud-messaging/concept-options
		// [END_EXCLUDE]

		// TODO(developer): Handle FCM messages here.
		// Not getting messages here? See why this may be: https://goo.gl/39bRNJ
		Log.d(TAG, "From: " + remoteMessage.getFrom());

		// Check if message contains a data payload.
		if (remoteMessage.getData().size() > 0) {
			Log.d(TAG, "Message data payload: " + remoteMessage.getData());

			// convert data to bundle
			Bundle bundle = convertDataToBundle(remoteMessage.getData());

			//Parse the bundle in case it's related to LivePerson messages
			PushMessageParser message = new PushMessageParser(bundle);

			//Code snippet to add push UI notification
			NotificationUI.showNotification(this, message);

			// Send the data into the SDK
			LivePerson.handlePush(this, bundle, SampleAppStorage.getInstance(this).getAccount(), false);
		}

		// Check if message contains a notification payload.
		if (remoteMessage.getNotification() != null) {
			Log.d(TAG, "Message Notification Body: " + remoteMessage.getNotification().getBody());
		}

		// Also if you intend on generating your own notifications as a result of a received FCM
		// message, here is where that should be initiated. See sendNotification method below.
	}

	/**
	 * Convert the Map received from FCM service to a Bundle (required by the PushMessageParser)
	 * @param data
	 * @return
	 */
	private Bundle convertDataToBundle(Map<String, String> data) {

		Bundle bundle = new Bundle();

		for (Map.Entry<String, String> entry : data.entrySet()) {

			bundle.putString(entry.getKey(), entry.getValue());
		}

		return bundle;
	}

	// [END receive_message]

}
