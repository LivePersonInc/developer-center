package com.liveperson.sample.app;

import android.annotation.TargetApi;
import android.os.Build;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.util.Log;
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

/**
 * ***** Sample app class - Not related to Messaging SDK ****
 *
 * Used as an example of how to use SDK "Fragment mode"
 */
public class FragmentContainerActivity extends AppCompatActivity {

    private static final String TAG = FragmentContainerActivity.class.getSimpleName();
    private static final String LIVEPERSON_FRAGMENT = "liveperson_fragment";
    private Fragment mConversationFragment;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_custom);
        Log.i(TAG, "onCreate savedInstanceState = " + savedInstanceState );

        LivePerson.initialize(this, new InitLivePersonProperties(SampleAppStorage.getInstance(this).getAccount(), SampleAppStorage.SDK_SAMPLE_FCM_APP_ID, new InitLivePersonCallBack() {

            @Override
            public void onInitSucceed() {
                Log.i(TAG, "onInitSucceed");

                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        initFragment();
                    }
                });
                setCallBack();
                SampleAppUtils.handleGCMRegistration(FragmentContainerActivity.this);
                String firstName = SampleAppStorage.getInstance(FragmentContainerActivity.this).getFirstName();
                String lastName = SampleAppStorage.getInstance(FragmentContainerActivity.this).getLastName();
                String phoneNumber = SampleAppStorage.getInstance(FragmentContainerActivity.this).getPhoneNumber();

				ConsumerProfile consumerProfile = new ConsumerProfile.Builder()
						.setFirstName(firstName)
						.setLastName(lastName)
						.setPhoneNumber(phoneNumber)
						.build();
                LivePerson.setUserProfile(consumerProfile);
            }

            @Override
            public void onInitFailed(Exception e) {
                Log.e(TAG, "onInitFailed : " + e.getMessage());
            }
        }));
    }

    private void initFragment() {
        mConversationFragment = getSupportFragmentManager().findFragmentByTag(LIVEPERSON_FRAGMENT);
        Log.d(TAG, "initFragment. mConversationFragment = "+ mConversationFragment);
        if (mConversationFragment == null) {
            String authCode = SampleAppStorage.getInstance(FragmentContainerActivity.this).getAuthCode();
            Log.d(TAG, "initFragment. authCode = "+ authCode);
            if (TextUtils.isEmpty(authCode)) {
                mConversationFragment = LivePerson.getConversationFragment();
            }else{
                mConversationFragment = LivePerson.getConversationFragment(authCode);
            }
            if (isValidState()) {
                FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
                ft.add(R.id.custom_fragment_container, mConversationFragment, LIVEPERSON_FRAGMENT).commitAllowingStateLoss();
            }
        }else{
             attachFragment();
        }
    }

    @TargetApi(Build.VERSION_CODES.JELLY_BEAN_MR1)
    private boolean isValidState() {
        return !isFinishing() && !isDestroyed();
    }

    private void attachFragment() {
        if (mConversationFragment.isDetached()) {
            Log.d(TAG, "initFragment. attaching fragment");
            if (isValidState()){
                FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
                ft.attach(mConversationFragment).commitAllowingStateLoss();
            }
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mConversationFragment != null){
            attachFragment();
        }
    }

   /* @Override
    protected void onSaveInstanceState(Bundle outState) {
        if (mConversationFragment != null && !mConversationFragment.isDetached()){
            FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
            ft.detach(mConversationFragment).commit();
            Log.d(TAG, "onSaveInstanceState, detaching fragment");
        }
        super.onSaveInstanceState(outState);
    }*/

    private void setCallBack() {
        LivePerson.setCallback(new LivePersonCallbackImpl() {
            @Override
            public void onError(TaskType type, String message) {
                Toast.makeText(FragmentContainerActivity.this, " problem " + type.name(), Toast.LENGTH_LONG).show();
            }

            @Override
            public void onTokenExpired() {
                Toast.makeText(FragmentContainerActivity.this, "onTokenExpired ", Toast.LENGTH_LONG).show();

                // Change authentication key here
                LivePerson.reconnect(SampleAppStorage.getInstance(FragmentContainerActivity.this).getAuthCode());
            }

            @Override
            public void onConversationStarted(LPConversationData convData) {
                Toast.makeText(FragmentContainerActivity.this, "Conversation started " + convData.getId()
                        + " reason " + convData.getCloseReason(), Toast.LENGTH_LONG).show();
            }

            @Override
            public void onConversationResolved(LPConversationData convData) {
                Toast.makeText(FragmentContainerActivity.this, "Conversation resolved " + convData.getId()
                        + " reason " + convData.getCloseReason(), Toast.LENGTH_LONG).show();
            }

            @Override
            public void onConnectionChanged(boolean isConnected) {
                Toast.makeText(FragmentContainerActivity.this, "onConnectionChanged " + isConnected, Toast.LENGTH_LONG).show();
            }

            @Override
            public void onAgentTyping(boolean isTyping) {
                Toast.makeText(FragmentContainerActivity.this, "isTyping " + isTyping, Toast.LENGTH_LONG).show();
            }

            @Override
            public void onAgentDetailsChanged(AgentData agentData) {
                Toast.makeText(FragmentContainerActivity.this, "Agent Details Changed " + agentData, Toast.LENGTH_LONG).show();
            }

            @Override
            public void onCsatDismissed() {
                Toast.makeText(FragmentContainerActivity.this, "on CSAT Dismissed", Toast.LENGTH_LONG).show();
            }

			@Override
			public void onCsatSubmitted(String conversationId) {
				Toast.makeText(FragmentContainerActivity.this, "on CSAT Submitted", Toast.LENGTH_LONG).show();
			}

			@Override
            public void onConversationMarkedAsUrgent() {
                Toast.makeText(FragmentContainerActivity.this, "Conversation Marked As Urgent", Toast.LENGTH_LONG).show();
            }

            @Override
            public void onConversationMarkedAsNormal() {
                Toast.makeText(FragmentContainerActivity.this, "Conversation Marked As Normal", Toast.LENGTH_LONG).show();
            }

            @Override
            public void onOfflineHoursChanges(boolean isOfflineHoursOn) {
                Toast.makeText(FragmentContainerActivity.this, "on Offline Hours Changes - " + isOfflineHoursOn , Toast.LENGTH_LONG).show();
            }


            @Override
            public void onAgentAvatarTapped(AgentData agentData) {
                Toast.makeText(FragmentContainerActivity.this, "on Agent Avatar Tapped - " + agentData.mFirstName + " "  + agentData.mLastName, Toast.LENGTH_SHORT).show();
            }
        });
    }
}
