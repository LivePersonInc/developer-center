---
title: Android Automatic Restore
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: Configuration

order: 90
permalink: android-automatic-restore.html

indicator: messaging
---

Since Android 6.0 (API 23), Android has offered the Auto Backup and restore for Apps feature as a way for developers to quickly add backup functionality to their apps. If this feature is enabled on an App, when reinstalling the application all stored data is restored to the device. refer to [Auto Backup for Apps](https://developer.android.com/guide/topics/data/autobackup.html){:target="_blank"} for more info.

Currently, the In-App Messaging SDK for Android does not support Automatic Restore and needs to be disabled on the host app if the app enabled Automatic Backup.

Note: the following configuration is relevant only if Automatic Backup is enabled on the manifest of the host app:

```xml
<application
    android:allowBackup="true"
```

### Define backup rules

Create an XML resource file under res/xml folder named: _lp_backup_rules.xml_ with the following content:

```xml
<?xml version="1.0" encoding="utf-8"?>
<full-backup-content xmlns:android="http://schemas.android.com/apk/res/android">
    <exclude domain="sharedpref" path="lp_shared.xml"/>
    <exclude domain="database" path="lp_infra_tables.db"/>
    <exclude domain="file" path="images"/>
</full-backup-content>
```

Add the following line under the <application> tag on the host app manifest:

```xml
android:fullBackupContent="@xml/lp_backup_rules"
```
