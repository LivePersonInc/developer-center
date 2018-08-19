---
title: Spotify Use Case - File Transfer Widget
redirect_from:
  - agent-workspace-sdk-spotify-use-case.html
Keywords:
sitesection: Documents
level2: Agent Interactions


order: 80
permalink: undefined-spotify-use-case---file-transfer-widget.html

indicator: both
---

### Disclaimer

The repository below contains sample code to provide guidance with using LiveEngage APIs to create custom experiences. This code is provided as-is and can be used by the brand for futher branding and optimization at their discretion. It is not subject to LivePerson SLAs or feature requests.

### Overview

The file transfer widget is a Node.js web app that uploads files to Amazon Simple Storage Service (S3) and generates access links that can be provided to share a file. The widget uses LiveEngage SDKs (Agent Workspace Widget SDK and Engagement Window Widget SDK) to display file transfer forms, links, and alerts between Agent and Client Sessions. The agent and consumer connection is maintained by an authenticated Pusher.js service. The repo also provides one method of localization that can be used to translate phrases between multiple languages. The service makes use of a SPA architecture on the client side.

[You can find the repository through this link.](https://github.com/cjames1224/filetransferle)

In order to view the widget in action:

1. Pull the latest remote repo.

2. Install NPM Dependencies

3. Create .env with relevant keys and values (see _Requirements_ section).

4. Run locally and navigate to [http://localhost:3000/agent](http://localhost:3000/agent){:target="_blank"}

### Requirements

The following needs to be placed in an environment variables file:

AWS S3 Account access

* Access Key ID

* Secret Access Key

* AWS Region

* AWS Bucket

Pusher.js Account Access

* App ID

* App Key

* App Secret

Node.js server running Linux

* LiveEngage account credentials (to set up agent widget)

* LiveEngage Account ID

* LiveEngage Username

* LiveEngage Password

Access to a LivePerson Account representative (to set up client widget).

### Useful links and Further Reading

* [Agent Workspace Widget SDK](agent-workspace-sdkoverview.html)

* [Engagement Window Widget SDK](rt-interactions-window-sdkoverview.html)

* [S3 Documentation](https://aws.amazon.com/documentation/s3/)

* [Pusher.js Main Site](https://pusher.com/docs/javascript_quick_start)