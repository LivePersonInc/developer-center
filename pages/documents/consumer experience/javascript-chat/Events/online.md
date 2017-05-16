---
title: onLine
Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Events

order: 260
permalink: consumer-experience-javascript-chat-online.html

---

Triggered any time a line is added to the chat. The data here can be a single line or multiple lines.

**Notes**:

- Visitor chat lines you sent will also appear here.
- Lines have a textType property, it is very important to adhere to it when rendering the actual chat line.

**Line Properties**

| Name     | Description                                            | Type   | Notes                                                                                                                    |
|----------|--------------------------------------------------------|--------|--------------------------------------------------------------------------------------------------------------------------|
| text     | The line of text.                                      | string |                                                                                                                          |
| time     | The time this line was received by the server.         | date   |                                                                                                                          |
| source   | The source of the chat line.                           | string | Valid values: "visitor", "agent", "system"                                                                               |
| textType | How this line should be rendered.                      | string | Possible values: "plain", "html". To help prevent possible XSS attacks it is very important to comply with the textType. |
| by       | The name for the contributor of the line in this chat. | string |                                                                                                                          |

**Sample Response**

```json
{
    "lines": [
        {
            "text": "Hello there",
            "time": "2013-05-30T13:25:20.471-04:00",
            "source": "agent",
            "subType": "REGULAR",
            "@type": "line",
            "by": "agent name",
            "textType": "plain",
            "@id": "15"
        },
        {
            "text": "Hello there",
            "time": "2013-05-30T13:25:20.762-04:00",
            "source": "agent",
            "subType": "REGULAR",
            "@type": "line",
            "by": "agent name",
            "textType": "plain",
            "@id": "16"
        },
        {
            "text": "Hello there",
            "time": "2013-05-30T13:25:21.103-04:00",
            "source": "agent",
            "subType": "REGULAR",
            "@type": "line",
            "by": "agent name",
            "textType": "plain",
            "@id": "17"
        },
        {
            "text": "Hello there",
            "time": "2013-05-30T13:25:21.295-04:00",
            "source": "agent",
            "subType": "REGULAR",
            "@type": "line",
            "by": "agent name",
            "textType": "plain",
            "@id": "18"
        }
    ]
}  
```