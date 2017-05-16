package com.liveperson.sample.app.Utils;

import android.content.Context;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;

/**
 * ***** Sample app class - Not related to Messaging SDK ****
 *
 * Sample app "Shared Preferences" object - helper class to save
 * fields like: first name, last name, account and auth code
 */
public class SampleAppStorage {

    private static final String TAG = SampleAppStorage.class.getSimpleName();

    public static final String SDK_SAMPLE_APP_ID = "com.liveperson.sdksample";
    public static final String SDK_SAMPLE_FCM_APP_ID = "com.liveperson.sdksampleFcm";

    private static final String FIRST_NAME = "first_name";
    private static final String LAST_NAME = "last_name";
    private static final String PHONE_NUMBER = "phone_number";
    private static final String AUTH_CODE = "auth_code";
    private static final String SDK_MODE = "sdk_mode";
    private static final String BRAND_ID = "brand_id";

    private SharedPreferences mDefaultSharedPreferences;
    private static volatile SampleAppStorage Instance = null;
    public enum SDKMode {ACTIVITY, FRAGMENT}


    private SampleAppStorage(Context context) {
        mDefaultSharedPreferences = PreferenceManager.getDefaultSharedPreferences(context.getApplicationContext());
    }

    public static SampleAppStorage getInstance(Context context) {
        if (Instance == null) {
            synchronized (SampleAppStorage.class) {
                if (Instance == null) {
                    Instance = new SampleAppStorage(context);
                }
            }
        }
        return Instance;
    }

    public void setFirstName(String firstName) {
        mDefaultSharedPreferences.edit().putString(FIRST_NAME, firstName).apply();
    }

    public void setLastName(String lastName) {
        mDefaultSharedPreferences.edit().putString(LAST_NAME, lastName).apply();
    }

    public void setPhoneNumber(String phoneNumber) {
        mDefaultSharedPreferences.edit().putString(PHONE_NUMBER, phoneNumber).apply();
    }

    public void setAuthCode(String authCode) {
        mDefaultSharedPreferences.edit().putString(AUTH_CODE, authCode).apply();
    }

    public void setSDKMode(SDKMode state) {
        mDefaultSharedPreferences.edit().putInt(SDK_MODE, state.ordinal()).apply();
    }

    public String getLastName() {
        return mDefaultSharedPreferences.getString(LAST_NAME, "");
    }

    public String getFirstName() {
        return mDefaultSharedPreferences.getString(FIRST_NAME, "");
    }

    public String getPhoneNumber() {
        return mDefaultSharedPreferences.getString(PHONE_NUMBER, "");
    }

    public String getAuthCode() {
        return mDefaultSharedPreferences.getString(AUTH_CODE, "");
    }

    public SDKMode getSDKMode() {
        int sdkModeInt = mDefaultSharedPreferences.getInt(SDK_MODE, SDKMode.ACTIVITY.ordinal());
        return sdkModeInt == SDKMode.ACTIVITY.ordinal() ? SDKMode.ACTIVITY : SDKMode.FRAGMENT;
    }

    public void setAccount(String account) {
        mDefaultSharedPreferences.edit().putString(BRAND_ID, account).apply();
    }

    public String getAccount() {
        return mDefaultSharedPreferences.getString(BRAND_ID, "");
    }
}
