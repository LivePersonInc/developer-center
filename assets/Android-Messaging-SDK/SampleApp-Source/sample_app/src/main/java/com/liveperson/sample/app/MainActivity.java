package com.liveperson.sample.app;

import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.TextInputLayout;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.liveperson.api.LivePersonCallbackImpl;
import com.liveperson.api.ams.cm.types.CloseReason;
import com.liveperson.api.sdk.LPConversationData;
import com.liveperson.infra.InitLivePersonProperties;
import com.liveperson.infra.callbacks.InitLivePersonCallBack;
import com.liveperson.messaging.TaskType;
import com.liveperson.messaging.model.AgentData;
import com.liveperson.messaging.sdk.api.LivePerson;
import com.liveperson.messaging.sdk.api.model.ConsumerProfile;
import com.liveperson.sample.app.Utils.SampleAppStorage;
import com.liveperson.sample.app.Utils.SampleAppUtils;
import com.liveperson.sample.app.push.NotificationUI;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;


/**
 * ***** Sample app class - Not related to Messaging SDK ****
 * <p>
 * The main activity of the sample app
 */
public class MainActivity extends AppCompatActivity {

    private static final String TAG = MainActivity.class.getSimpleName();
    private EditText mAccountTextView;
    private EditText mFirstNameView;
    private EditText mLastNameView;
    private EditText mPhoneNumberView;
    private EditText mAuthCodeView;
    private Button mOpenConversationButton;
    private TextInputLayout mAccountIdLayout;
    private TextView mTime;
    private TextView mDate;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initSampleAppViews();
        initOpenConversationButton();
        initStartFragmentButton();

        handlePush(getIntent());
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        handlePush(intent);
    }


    /**
     * Init Views
     */
    private void initSampleAppViews() {
        // Set the default account in the view
        mAccountTextView = (EditText) findViewById(R.id.account_id);
        mAccountIdLayout = (TextInputLayout) findViewById(R.id.account_id_layout);
        mAccountTextView.setText(SampleAppStorage.getInstance(this).getAccount());

        mFirstNameView = (EditText) findViewById(R.id.first_name);
        mFirstNameView.setText(SampleAppStorage.getInstance(this).getFirstName());

        mLastNameView = (EditText) findViewById(R.id.last_name);
        mLastNameView.setText(SampleAppStorage.getInstance(this).getLastName());

        mPhoneNumberView = (EditText) findViewById(R.id.phone_number);
        mPhoneNumberView.setText(SampleAppStorage.getInstance(this).getPhoneNumber());

        mAuthCodeView = (EditText) findViewById(R.id.auth_code);
        mAuthCodeView.setText(SampleAppStorage.getInstance(this).getAuthCode());

        String sdkVersion = String.format("SDK version %1$s ", LivePerson.getSDKVersion());
        ((TextView) findViewById(R.id.sdk_version)).setText(sdkVersion);

        mTime = (TextView) findViewById(R.id.time_sample_textView);
        mDate = (TextView) findViewById(R.id.date_sample_textView);

        updateTime();
        initLocaleSpinner();
    }

    private void updateTime() {
        Locale locale = getLocale();
        DateFormat formatTime = DateFormat.getTimeInstance(DateFormat.MEDIUM, locale);
        DateFormat formatDate = DateFormat.getDateInstance(DateFormat.LONG, locale);
        Date date = new Date(System.currentTimeMillis());
        mDate.setText(formatDate.format(date));
        mTime.setText(formatTime.format(date));
    }


    private void initLocaleSpinner() {
        final EditText language = (EditText) findViewById(R.id.language_editText);
        final EditText country = (EditText) findViewById(R.id.country_editText);

        final Spinner localeSpinner = (Spinner) findViewById(R.id.spinner_locale);
        ArrayAdapter<String> localeSpinnerArrayAdapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_dropdown_item, getResources().getStringArray(R.array.supported_locales));
        localeSpinner.setAdapter(localeSpinnerArrayAdapter);

        Button updateLocale = (Button) findViewById(R.id.update_language_button);
        updateLocale.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String selectedLocale = (String) localeSpinner.getSelectedItem();
                String[] lang_reg = selectedLocale.split("-");

                if (lang_reg.length >= 2) {
                    Log.i(TAG, "createLocale: " + lang_reg[0] + "-" + lang_reg[1]);
                    createLocale(lang_reg[0], lang_reg[1]);

                } else if (lang_reg.length == 1) {

                    String lang = lang_reg[0];

                    if (TextUtils.isEmpty(lang)) {
                        Log.i(TAG, "createLocale: taking custom locale from edit text.. ");
                        createLocale(language.getText().toString(), country.getText().toString());
                    } else {
                        Log.i(TAG, "createLocale: " + lang + "-null");
                        createLocale(lang, null);
                    }
                }

                updateTime();
            }
        });


        final Button clear = (Button) findViewById(R.id.clear_locale_button);

        clear.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                language.setText(null);
                country.setText(null);
                localeSpinner.setSelection(0);
            }
        });
    }

    private void setCallBack() {
        LivePerson.setCallback(new LivePersonCallbackImpl() {
            @Override
            public void onError(TaskType type, String message) {
                Toast.makeText(MainActivity.this, " problem " + type.name(), Toast.LENGTH_LONG).show();
            }

            @Override
            public void onTokenExpired() {
                Toast.makeText(MainActivity.this, "onTokenExpired ", Toast.LENGTH_LONG).show();

                // Change authentication key here
                LivePerson.reconnect(SampleAppStorage.getInstance(MainActivity.this).getAuthCode());
            }

            @Override
            public void onConversationStarted(LPConversationData convData) {
                Toast.makeText(MainActivity.this, "Conversation started " + convData.getId()
                        + " reason " + convData.getCloseReason(), Toast.LENGTH_LONG).show();
            }

            @Override
            public void onConversationResolved(LPConversationData convData) {
                Toast.makeText(MainActivity.this, "Conversation resolved " + convData.getId()
                        + " reason " + convData.getCloseReason(), Toast.LENGTH_LONG).show();
            }

            @Override
            public void onConnectionChanged(boolean isConnected) {
                Toast.makeText(MainActivity.this, "onConnectionChanged " + isConnected, Toast.LENGTH_LONG).show();
            }

            @Override
            public void onAgentTyping(boolean isTyping) {
                Toast.makeText(MainActivity.this, "Agent is " + isTyping, Toast.LENGTH_LONG).show();
            }

            @Override
            public void onAgentDetailsChanged(AgentData agentData) {
                Toast.makeText(MainActivity.this, "Agent Details Changed " + agentData, Toast.LENGTH_LONG).show();
            }

            @Override
            public void onCsatDismissed() {
                Toast.makeText(MainActivity.this, "on CSAT Dismissed", Toast.LENGTH_LONG).show();
            }

            @Override
            public void onCsatSubmitted(String conversationId) {
                Toast.makeText(MainActivity.this, "on CSAT Submitted. ConversationID = " + conversationId, Toast.LENGTH_LONG).show();
            }

            @Override
            public void onConversationMarkedAsUrgent() {
                Toast.makeText(MainActivity.this, "Conversation Marked As Urgent", Toast.LENGTH_LONG).show();
            }

            @Override
            public void onConversationMarkedAsNormal() {
                Toast.makeText(MainActivity.this, "Conversation Marked As Normal", Toast.LENGTH_LONG).show();
            }

            @Override
            public void onOfflineHoursChanges(boolean isOfflineHoursOn) {
                Toast.makeText(MainActivity.this, "on Offline Hours Changes - " + isOfflineHoursOn, Toast.LENGTH_LONG).show();
            }

            @Override
            public void onAgentAvatarTapped(AgentData agentData) {
                Toast.makeText(MainActivity.this, "on Agent Avatar Tapped - " + agentData.mFirstName + " " + agentData.mLastName, Toast.LENGTH_SHORT).show();

            }
        });
    }


    /**
     * Save the user input such as: account, first name, last name, phone number and auth code
     */
    private void saveAccountAndUserSettings() {
        String account = mAccountTextView.getText().toString().trim();
        String firstName = mFirstNameView.getText().toString().trim();
        String lastName = mLastNameView.getText().toString().trim();
        String phoneNumber = mPhoneNumberView.getText().toString().trim();
        String authCode = mAuthCodeView.getText().toString().trim();
        SampleAppStorage.getInstance(this).setAccount(account);
        SampleAppStorage.getInstance(this).setFirstName(firstName);
        SampleAppStorage.getInstance(this).setLastName(lastName);
        SampleAppStorage.getInstance(this).setPhoneNumber(phoneNumber);
        SampleAppStorage.getInstance(this).setAuthCode(authCode);
    }

    /**
     * Set the listener on the "open_conversation" button (Activity mode)
     */
    private void initOpenConversationButton() {
        mOpenConversationButton = (Button) findViewById(R.id.button_start_activity);
        mOpenConversationButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //Sample app setting - used to initialize the SDK with "Activity mode" when entering from push notification
                SampleAppStorage.getInstance(MainActivity.this).setSDKMode(SampleAppStorage.SDKMode.ACTIVITY);
                if (!isValidAccount()) {
                    return;
                }
                SampleAppUtils.disableButtonAndChangeText(mOpenConversationButton, getString(R.string.initializing));
                saveAccountAndUserSettings();
                initActivityConversation();
            }
        });
    }

    /**
     * Set the listener on the "Open Fragment" button (Fragment mode)
     */
    private void initStartFragmentButton() {
        Button openFragmentButton = (Button) findViewById(R.id.button_start_fragment);
        openFragmentButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //Sample app setting - used to initialize the SDK with "Fragment mode" when entering from push notification
                SampleAppStorage.getInstance(MainActivity.this).setSDKMode(SampleAppStorage.SDKMode.FRAGMENT);
                if (!isValidAccount()) {
                    return;
                }
                saveAccountAndUserSettings();
                openFragmentContainer();
            }
        });
    }

    /**
     * Validate that the text field is not empty
     *
     * @return
     */
    private boolean isValidAccount() {
        if (TextUtils.isEmpty(mAccountTextView.getText())) {
            mAccountIdLayout.setError("Enter valid Account");
            return false;
        }
        mAccountIdLayout.setError("");
        return true;
    }

    /**
     * Initialize the Messaging SDK and start the SDK in "Activity Mode"
     */
    private void initActivityConversation() {

        LivePerson.initialize(MainActivity.this, new InitLivePersonProperties(SampleAppStorage.getInstance(MainActivity.this).getAccount(), SampleAppStorage.SDK_SAMPLE_FCM_APP_ID, new InitLivePersonCallBack() {
            @Override
            public void onInitSucceed() {
                Log.i(TAG, "SDK initialize completed with Activity mode");
                setCallBack();
                // you can't register pusher before initialization
                SampleAppUtils.handleGCMRegistration(MainActivity.this);
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        openActivity();
                        SampleAppUtils.enableButtonAndChangeText(mOpenConversationButton, getString(R.string.open_activity));
                    }
                });
            }

            @Override
            public void onInitFailed(Exception e) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        SampleAppUtils.enableButtonAndChangeText(mOpenConversationButton, getString(R.string.open_activity));
                        Toast.makeText(MainActivity.this, "Init Failed", Toast.LENGTH_SHORT).show();
                    }
                });
            }
        }));
    }

    /**
     * Start {@link FragmentContainerActivity} that handles the SDK the Messaging SDK and start the SDK in "Fragment Mode"
     */
    private void openFragmentContainer() {
        Intent in = new Intent(MainActivity.this, FragmentContainerActivity.class);
        startActivity(in);
    }

    /**
     * Calling to "showConversation" API
     */
    private void openActivity() {
        String authCode = SampleAppStorage.getInstance(MainActivity.this).getAuthCode();
        if (TextUtils.isEmpty(authCode)) {
            LivePerson.showConversation(MainActivity.this);
        } else {
            LivePerson.showConversation(MainActivity.this, authCode);
        }
        ConsumerProfile consumerProfile = new ConsumerProfile.Builder()
                .setFirstName(mFirstNameView.getText().toString())
                .setLastName(mLastNameView.getText().toString())
                .setPhoneNumber(mPhoneNumberView.getText().toString())
                .build();
        LivePerson.setUserProfile(consumerProfile);
    }

    /**
     * If we initiated from a push message we show the screen that was in use the previous session (fragment/activity)
     * Activity mode is the default
     *
     * @param intent
     */
    private void handlePush(Intent intent) {
        boolean isFromPush = intent.getBooleanExtra(NotificationUI.PUSH_NOTIFICATION, false);

        //Check if we came from Push Notification
        if (isFromPush) {
            clearPushNotifications();
            switch (SampleAppStorage.getInstance(this).getSDKMode()) {
                //Initialize the SDK with "Activity mode"
                case ACTIVITY:
                    initActivityConversation();
                    break;
                //Initialize the SDK with "Fragment mode"
                case FRAGMENT:
                    openFragmentContainer();
                    break;
            }
        }
    }

    /**
     * Hide any shown notification
     */
    private void clearPushNotifications() {
        ((NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE)).cancel(NotificationUI.NOTIFICATION_ID);
    }

    protected void createLocale(String language, @Nullable String country) {
        Resources resources = getResources();
        Configuration configuration = resources.getConfiguration();
        Locale customLocale;

        if (TextUtils.isEmpty(language)) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                language = resources.getConfiguration().getLocales().get(0).getCountry();
            } else {
                language = resources.getConfiguration().locale.getCountry();
            }
        }

        if (TextUtils.isEmpty(country)) {
            customLocale = new Locale(language);
        } else {
            customLocale = new Locale(language, country);
        }
        Locale.setDefault(customLocale);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            configuration.setLocale(customLocale);
            resources.updateConfiguration(configuration, resources.getDisplayMetrics());
        } else {
            configuration.locale = customLocale;
            resources.updateConfiguration(configuration, resources.getDisplayMetrics());
        }

        Locale locale = getLocale();
        Log.d(TAG, "country = " + locale.getCountry() + ", language = " + locale.getLanguage());

    }

    private Locale getLocale() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            return getResources().getConfiguration().getLocales().get(0);
        } else {
            return getResources().getConfiguration().locale;
        }
    }

}
