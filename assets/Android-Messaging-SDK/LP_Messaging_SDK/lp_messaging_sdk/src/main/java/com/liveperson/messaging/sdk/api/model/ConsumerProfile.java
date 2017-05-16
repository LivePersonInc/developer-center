package com.liveperson.messaging.sdk.api.model;



/**
 * Class that represents the consumer's profile data
 * Here you can specific what is the data of the consumer
 */
public class ConsumerProfile {

    private static final String TAG = ConsumerProfile.class.getSimpleName();
    private String mFirstName;
    private String mLastName;
    private String mPhoneNumber;
    private String mNickName;
    private String mAvatarUrl;


    private ConsumerProfile(Builder builder) {
        mFirstName = builder.firstName;
        mLastName = builder.lastName;
        mPhoneNumber = builder.phoneNumber;
        mNickName = builder.nickname;
        mAvatarUrl = builder.avatarUrl;
    }

    public String getFirstName() {
        return mFirstName;
    }

    public String getLastName() {
        return mLastName;
    }

    public String getPhoneNumber() {
        return mPhoneNumber;
    }

    public String getNickname() {
        return mNickName;
    }

    public String getAvatarUrl() {
        return mAvatarUrl;
    }

    public static class Builder {
        private String firstName;
        private String lastName;
        private String phoneNumber;
        private String nickname;
        private String avatarUrl;

        public ConsumerProfile build(){
            return new ConsumerProfile(this);
        }

        public Builder setFirstName(String firstName) {
            this.firstName = firstName;
            return this;
        }

        public Builder setLastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        public Builder setPhoneNumber(String phoneNumber) {
            this.phoneNumber = phoneNumber;
            return this;
        }

        public Builder setNickname(String nickname) {
            this.nickname = nickname;
            return this;
        }

        public Builder setAvatartUrl(String avatarUrl) {
            this.avatarUrl = avatarUrl;
            return this;
        }
    }
}
