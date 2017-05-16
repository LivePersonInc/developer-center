/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 * <p/>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p/>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p/>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.liveperson.sample.app.push.gcm;

import android.os.Bundle;
import android.util.Log;

import com.google.android.gms.gcm.GcmListenerService;
import com.liveperson.infra.messaging_ui.uicomponents.PushMessageParser;
import com.liveperson.messaging.sdk.api.LivePerson;
import com.liveperson.sample.app.Utils.SampleAppStorage;
import com.liveperson.sample.app.push.NotificationUI;

/**
 * ***** Sample app class - Not related to Messaging SDK *****
 *
 * Taken from Google's GCM sample app
 */
public class MyGcmListenerService extends GcmListenerService {

    private static final String TAG = "MyGcmListenerService";

    /**
     * Called when message is received.
     *
     * @param from SenderID of the sender.
     * @param data Data bundle containing message data as key/value pairs.
     *             For Set of keys use data.keySet().
     */
    // [START receive_message]
    @Override
    public void onMessageReceived(String from, Bundle data) {
		Log.d(TAG, "data: " + data);

		//Parse the bundle in case it's related to LivePerson messages
		PushMessageParser message = new PushMessageParser(data);

		//Code snippet to add push UI notification
		NotificationUI.showNotification(this, message);

		LivePerson.handlePush(this, data, SampleAppStorage.getInstance(this).getAccount(), false);
    }
}
