---
title: Get all skills
keywords:
level1: Documents
level2: Admin
level3: Skills API
level4: Methods


order: 10
permalink: administration-get-all-skills.html

---

This API retrieves a list of skills for a specific account.

### Request

 |Method           |        URL |
 |:-------          |       :------     |
| GET | /api/account/{accountId}/configuration/le-users/skills |

**Request Headers**

 |Header      |             Description |
| :-------       |          :------     |
 |Authorization | Contains token string to allow request authentication and authorization. |

**Request Body**

[Appendix](administration-skills-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

| Parameter   |  Description   |   Type / Value  |              
 |:---------- |  :------------- |  :-------------  |            
| accountId |    LP site ID    |   String ^[a-zA-Z0-9_]{1,20}$ |

### Response

**Response Body**

[Appendix](administration-skills-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
