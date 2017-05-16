package com.liveperson.sample.app.push.fcm;

/**
 * Created by nirni on 11/17/16.
 */

import android.content.Intent;

import com.google.firebase.iid.FirebaseInstanceIdService;


public class MyFirebaseInstanceIDService extends FirebaseInstanceIdService {

	private static final String TAG = "MyFirebaseIIDService";

	/**
	 * Called if InstanceID token is updated. This may occur if the security of
	 * the previous token had been compromised. Note that this is called when the InstanceID token
	 * is initially generated so this is where you would retrieve the token.
	 */
	// [START refresh_token]
	@Override
	public void onTokenRefresh() {
		// Get updated InstanceID token.
		Intent intent = new Intent(this, FirebaseRegistrationIntentService.class);
		startService(intent);

	}
}
