---
pagename: Enable File Sharing
redirect_from:
  - rich-messaging-file-sharing-1.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: File Sharing
order: 20
permalink: file-sharing-enable-file-sharing.html
indicator: both
---

In order to enable file sharing on your account, you should first enable the feature itself. Run the following commands, inserting the account admin username and admin password instead of the placeholders below in order to do so:

```sh
LP_USER= ADMIN_USERNAME
LP_PASS= ADMIN_PASSWORD
LP_BEARER=`curl -c cookies -X POST -H "Content-Type: application/json" -H "Accept: application/json" -H "Cache-Control: no-cache" -d '{"username": "'$LP_USER'","password":"'$LP_PASS'"}' "https://$LP_AGENTVEP/api/account/$LP_ACCOUNT/login?v=1.1" | jq -r .bearer`
./set_site_property.sh $LP_BEARER true messaging.file.sharing.enabled
```
