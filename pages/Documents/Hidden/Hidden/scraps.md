---
pagename: Scraps
sitesection: Documents
categoryname: Hidden
documentname: Hidden
permalink: hidden-scraps.html
layout: hidden-layout
---

Global entities are automatically detected by the system, so you don’t have to add them manually. Global entities include things like POSTAL_CODE, where enumerating the full list would be difficult, and STREET, where predefining a format would be impossible. Global entities include:

| Entity | Description | Example |
| --- | --- | --- |
| AIRPORT | An airport code | SEATAC<br>LAX<br>DEL |
| CITY | A city | Paris<br>Los Angeles |
| COLOR | A color | blue<br>red |
| COUNTRY | A country | Canada<br>United States |
| DATE | Dates and absolute date&timestamps | today<br>tomorrow<br>03/01/2017<br>6 p.m. tomorrow |
| DURATION | A time period | 2 weeks<br>2 weeks and 3 days<br>half a day<br>fortnight |
| EMAIL | An email address | jane@myemail.com |
| MONEY | Numbers with currency | $2000<br>23 dollars<br>fifty bucks<br>ten pounds |
| ORG | Names of institutions | Nike factory<br>World Health Organization |
| PERCENT | A percentage | 100%<br>forty percent |
| PERSON_NAME | Names of persons | John<br>Jane |
| PHONE | A phone number | 800-555-1212<br>+66 11-222-3344 |
| POSITION_IN_SERIES | A number used in the context of order | 15th<br>first |
| POSTAL_CODE | United States postal code | 10001 |
| QUANTITY | A quantity | 5<br>ten |
| SET | A group<br>In, “The meeting with Bob is weekly on Tuesdays,” PERSON_NAME = Bob, SET = weekly, DATE = Tuesdays | month<br>week<br>every day |
| STATE | United States state | NY<br>New York |
| STREET | United States descriptors for street names | Main St.<br>123 Main St. NE<br>123 East-West Highway Apt. 107 |
| TIME | Time of day | 2 p.m.<br>23:00 |
| URL | A URL | https://www.google.com/search?&lt;param&gt; |

Keep in mind that the detection of global entities is highly dependent on context. As a result, the system is powerful and capable of detecting the following:

* **Message:** My name is Paris and I live in Paris
* **Entities:** PERSON_NAME = Paris, CITY = Paris

* **Message:** Hi Tuesday, can you arrive at 2pm on Tuesday?
* **Entities:** PERSON_NAME = Tuesday, TIME = 2pm, DATE = Tuesday

Detection of entities is trained on commercial messages, so depending on context, you might get results that you don’t expect:

* **Non-commercial message:** Washington cherry trees are beautiful this time of year
* **Entities:** CITY = Washington
but
* **Commercial message:** Do you ship this product to Washington?
* **Entities:** STATE = Washington

Using the [Assist tool](conversation-builder-assist.html), you can assign global entities to user interactions and have the bot populate a [slot](conversation-builder-variables-slots-slots.html) with the user's input to the question to which the entity was assigned.