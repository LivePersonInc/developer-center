package com.liveperson.sample.app.push.fcm;

import android.app.IntentService;
import android.content.Intent;
import android.support.v4.content.LocalBroadcastManager;
import android.util.Log;

import com.google.firebase.iid.FirebaseInstanceId;
import com.liveperson.messaging.sdk.api.LivePerson;
import com.liveperson.sample.app.Utils.SampleAppStorage;

import static com.liveperson.sample.app.push.gcm.RegistrationIntentService.REGISTRATION_COMPLETE;

/**
 * Created by nirni on 11/20/16.
 */

public class FirebaseRegistrationIntentService extends IntentService {

	public static final String TAG = FirebaseRegistrationIntentService.class.getSimpleName();

	/**
	 * Creates an IntentService.  Invoked by your subclass's constructor.
	 *
	 */
	public FirebaseRegistrationIntentService() {
		super(TAG);
	}


	@Override
	protected void onHandleIntent(Intent intent) {

		Log.d(TAG, "onHandleIntent: registering the token to pusher");

		String token = FirebaseInstanceId.getInstance().getToken();

		// Register to Liveperson Pusher
		String account = SampleAppStorage.getInstance(this).getAccount();
		String appID = SampleAppStorage.SDK_SAMPLE_FCM_APP_ID;
		LivePerson.registerLPPusher(account, appID, token);

		// Notify UI that registration has completed, so the progress indicator can be hidden.
		Intent registrationComplete = new Intent(REGISTRATION_COMPLETE);
		LocalBroadcastManager.getInstance(this).sendBroadcast(registrationComplete);

	}
}
