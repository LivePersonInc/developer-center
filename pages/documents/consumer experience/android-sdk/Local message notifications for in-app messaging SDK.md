Local message notifications for Mobile App Messaging SDK

Time to respond and off hours

Document version 1.0

April 2017

Prepared by: Alon Levin


#### Overview

This document describes the behavior and design of the local notifications view within the Mobile App Messaging SDK. In this document you will find two different types of notifications:

1. Time to respond notifications

2. Off hours notifications

Furthermore, this document delves into the following rules of displaying the location notifications:

1. What content is going to be displayed, and

2. Where the message is going to displayed within the messaging window.

##### Benefits

Time to respond and off hours notifications let the consumer know when the agent will be next available to address their questions or concerns. This gives consumers confidence in knowing that their message has been received and will be addressed within a certain time frame.

#### Time To Respond

##### Overview

Time to respond local notifications let consumers know when an agent will be available to answer the messaging conversation.

##### Behavior

The first time that the consumer sees the time to respond notification is 10 seconds after he sends the first message. This is known as the first time delay.

##### When does the time to respond notification appear?

Time To Respond (TTR) has two configurable modes:

1.  timestamp mode - Shows an estimated time to respond inside the TTR notification.2.  Shortly mode - Will show a general message - "An agent will be with you shortly".

* ‘Shortly’ mode appears once for each conversation in the beginning or upon re-entering the app (if the app was killed by the OS).

* *Timestamp* notification appears every time the TTR changed.

 * TTR is re-calculated for every message, meaning we expect the notification to appear when:

  * A new conversation has started;

  * The consumer responds to an agent;

  * An Agent manually changes time to respond SLA;

  * A new Agent receives a conversation (Agent 1 transfers conversation to Agent 2);

  * Consumer marks Conversation as Urgent;

  * Consumer dismisses Conversation from Urgent state;

  * The app launch or memory cleaning has occurred.

 * The consumer won’t see the TTR if:

  * The agent sent the last message.

  * The SLA time has already passed.

  * The SLA is less than one minute.

  * If the consumer sends multiple messages within a default time (8 seconds) he will only receive 1 TTR.

   * The frequency can be configured (8 is the default)

    * Android: in branding xml:     <integer name="ttrShowFrequencyInSeconds">8</integer>

    * iOS: in LPConfig file: public var ttrShowFrequencyInSeconds: UInt = 8

##### Where does the time to respond message appear?

In iOS these messages appear within the Mobile App Messaging conversation window just under the navigationBar Window mode and ViewController Mode.

<img src="ios_ttr.png">

*Image: iOS time to respond notification*

In Android these messages appear within the Mobile App Messaging conversation window above the "Write a message" section in both Fragment and Activity modes.

See the image below for examples of how the local messages will appear:

<img src="android_ttr.png">

*Image: Android time to respond notification*

#### Configuration

iOS configuration is available within Xcode. Android configuration is available within Android studio.

##### iOS configuration

 1. iOS configuration occurs in the LPConfig file

  1. To enable TTR mode  - public var ttrShouldShowTimestamp: Bool = true

  2. To enable shortly mode  - public var ttrShouldShowTimestamp: Bool = false

  3. To configure the First Time Delay - public var ttrFirstTimeDelay: Double = 10.0

 2. In addition, iOS provides you the option to configure notification UI

  4. To change the notification background color:  Insert your color of choice between the brackets of this line: public var ttrnotificationBackgroundColor = UIColor()

  5. To change the notification text color insert your color of choice within the brackets of this line:

public var ttrnotificationTextColor = UIColor()

  6. To change the notification opacity alpha insert a number between 0.0 to 0.1 within the section of this line 0.0:public var ttrnotificationOpacityAlpha: Double = 0.0

##### Android configuration

 3. Configured in the Branding XML:

  7. To enable TTR mode, please override this resource:<bool name="show_timestamp_in_ttr_notification">true</bool>

 4. To enable shortly mode, please override this resource:<bool name="show_timestamp_in_ttr_notification">false</bool>

#### Off Hours

##### Overview

Off hours local notifications are part of an important best practice in setting consumer

Expectations. When a brand’s shift is in off hours mode and they receive a consumer message, the consumer will be notified of the brands working hours and at which time the brand will be available to answer their request.

##### Behavior

##### When does the off hours notification appear?

* If a consumer starts a conversation with the brand while the brand’s shift is set to off hours, the consumer will receive the off-hours notification notification.

##### When does the off hours notification disappear?

* The notification disappears when the off hours has ended and the brand’s shift is now online.

* The notification will also disappear if a consumer re-enters the conversation screen of an active conversation and the brand’s shift is no longer on off-hours.

<img src="ios_off_hours.png">

*Image: off hours notification in iOS*

<img src="android_off_hours.png">

*Image: Off hours notification in Android*

##### Configuration

To configure for iOS it needs to be configured within Android studio. iOS needs to be configured within Xcode.

##### iOS configuration

 5. iOS configuration is in the LPConfig file

  8. Enable : public var showOffHoursnotification: Bool = true

  9. Disable : public var showOffHoursnotification: Bool = false

 6. In addition, iOS provides you the option to configure notification UI

  10. To change the notification background color:  Insert your color of choice between the brackets of this line: public var ttrnotificationBackgroundColor = UIColor()

  11. To change the notification text color insert your color of choice within the brackets of this line:

public var ttrnotificationTextColor = UIColor()

  12. To change the notification opacity alpha insert a number between 0.0 to 0.1 within the section of this line 0.0:public var ttrnotificationOpacityAlpha: Double = 0.0

*NOTE:** It is the same configuration as the ttr notification, changing those values will affect both the TTR and the Off hours. *

 7. You can set a fixed timezone in the LPConfig file:

  13. public var offHoursTimeZoneName: String = "US/Pacific"

  14. The list of timezones IDs can be found [here](https://garygregory.wordpress.com/2013/06/18/what-are-the-java-timezone-ids/).

  15.  If setting an empty timezone, the locale timezone will automatically be used.

##### Android configuration

 8. You can enable/disable off hours notification in the Branding XML:

  16. Enable : <bool name="ttr_message_off_hours_enabled">true</bool>

  17. Disable : <bool name="ttr_message_off_hours_enabled">false</bool>

 9. You can set a fixed timezone in the Strings file:

  18. <stringname="lp_ttr_message_off_hours_time_zone_id">US/Pacific</string>

  19. The list of timezones IDs can be found [here](https://garygregory.wordpress.com/2013/06/18/what-are-the-java-timezone-ids/).

  20.  If setting an empty timezone, the locale timezone will automatically be used.
