package com.liveperson.sample.app.Utils;

import android.content.Context;
import android.content.Intent;
import android.widget.Button;

import com.liveperson.sample.app.FragmentContainerActivity;
import com.liveperson.sample.app.MainActivity;
import com.liveperson.sample.app.push.fcm.FirebaseRegistrationIntentService;
import com.liveperson.sample.app.push.gcm.RegistrationIntentService;

/**
 * ***** Sample app class - Not related to Messaging SDK ****
 * Utils class that we use in the sample app only.
 * All these methods are just to have the {@link MainActivity} and {@link FragmentContainerActivity}
 * simple as possible.
 */
public class SampleAppUtils {


    /**
     * Enable a button and change the text
     *
     * @param btn         - the button to enable
     * @param enabledText - the text we want to show on the button
     */
    public static void enableButtonAndChangeText(Button btn, String enabledText) {
        btn.setText(enabledText);
        btn.setEnabled(true);
    }


    /**
     * Disable a button and change the text
     *
     * @param btn          - the button to enable
     * @param disabledText - the text we want to show on the button
     */
    public static void disableButtonAndChangeText(Button btn, String disabledText) {
        btn.setText(disabledText);
        btn.setEnabled(false);
    }


    /**
     * Call to the {@link RegistrationIntentService} class which was taken from Google's
     * sample app for GCM integration
     */
    public static void handleGCMRegistration(Context ctx) {
        Intent intent = new Intent(ctx, FirebaseRegistrationIntentService.class);
        ctx.startService(intent);
    }

}
