---
title: Overview
Keywords:
level1: Documents
level2: Agent Interactions
level3: Login Service API

order: 9
permalink: login-getting-started.html
root-link: true
level-order: 6

---

### Getting Started

Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to get the agent API domain using `agentVep` as the serviceName parameter value. 

**Request example**:

http://api.liveperson.net/api/account/12345678/service/agentVep/baseURI.json?version=1.0

The Login Service API enables users to start a session in LiveEngage, refresh the session and end the session.

### Introduction

This API allows you to Login to LiveEngage, using a LiveEngage username and password. Once you login, a session token (Bearer) will be provided and can be used for relevant API calls.

This API provides endpoints for managing the User Session (Login, Logout and Refresh).

