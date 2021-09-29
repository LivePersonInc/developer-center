---
pagename: Advanced Routing
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Dynamic Routing
permalink: conversation-orchestrator-dynamic-routing-advanced-routing.html
indicator: messaging
---

### Introduction

This article introduces concepts and tools for advanced routing. You will benefit from this topic if your routing requires complex evaluations, time-based or date-based criteria, dynamic queue prioritization and more. Before reading further, familiarize yourself with the basics [here](conversation-orchestrator-dynamic-routing-creating-routing-policies.html) first.

### Create complex policies using the Expression Editor

The Expression Editor allows you to configure routing policies that require complex evaluations or time-based and date-based criteria. 

**Examples**
1. Routing VIP consumers to specific agents or skills within business hours 
2. Routing conversations from certain channels with critical intents during the busiest months or weeks
3. Joining multiple complex evaluation criteria to arrive at a logical decision for routing

{: .important}
The Expression Editor is only available to brands that are upgraded to Conversation Context Service v2. Please talk to your LivePerson account representative if you want to use this feature and have not been upgraded.

#### Using the Expression Editor

**Launch the Expression Editor**: Open Conversion Orchestrator, and select **Manage Policies** under the Dynamic Routing module. To view the policy editor, select an existing policy, or click **Add Policy**. Switch to the **Write an expression** tab to view the expression-based editor.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_advrouting1.png">

**Write expressions**: You can write expressions using logical operators, any SDEs, context variables or conversation attributes.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_advrouting2.png">

The following operations are possible:

**Operation**: Logical<br>
**Operators**: and, or, not<br>
**Examples**: <br>
(namespace.varA == 10) and (namespace.varC > namespace.varD)<br>
(namespace.varA > 5) or (namespace.varC > namespace.varD)<br>
not (namespace.varA == namespace.varB)

**Operation**: Comparative<br>
**Operators**: ==, !=, >=, <=, >, <, in <br>
**Examples**: <br>
namespace.varA <= namespace.varB<br>
namespace.varC in custom.DList<br>
namespace.varD != namespace.varB |

**Operation**: Mathematical<br>
**Operators**: +, -, \*, / ,% not, sqrt, || <br>
**Examples**:<br>
(namespace.varA + namespace.varB) > 8<br>
(namespace.varA^4) == namespace.varB\*namespace.varD<br>
namespace.varP == (namespace.varX || namespace.varY)

**Operation**: Grouping <br>
**Operators**: (..) <br>
**Example**:<br>
((namespace.varA > namespace.varB) > 8 and (namespace.varC +namespace.varD) > custom.param) or (namespace.varX in custom.listA)

**Use custom variables and LivePerson Functions**: Add custom variables and LivePerson Functions to extend your use cases.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_advrouting3.png">

**Remember the following when writing expressions**

* Enclose strings within single quotes ‘ ’. <br>
    Example: `personalinfo.company == 'LP'`

* Don’t enclose numbers or boolean within quotes. <br>
    Examples: <br>
    `custom.VIP_FAAS == true`<br>
    `conversation.minutesSincePreviousMessage < 2`

**Debugging expressions**: Use the policy logs to debug both complex and simple policies. For more details, see [here](conversation-orchestrator-dynamic-routing-policy-logs-for-v2.html).

#### Routing by time range, day of the week or date range

Use predefined templates to create date-based or time-based routing policies.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_advrouting4.png">

Add the required template to the editor.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_advrouting5.png">
          
Update the template to create your rule.

##### Time range-based

The time range template allows you to create policies that can route conversations by time and days of the week. The template takes inputs in the following format:

`isTimeRange('Start time in hh:mm:ss', 'End time in hh:mm:ss', 'Time Zone', ['Day1', 'Day2',...])`

You can create time-based routing policies in the following ways:

| Example | Policy |
| --- | --- |
| During work hours in Australia | isTimeRange('09:00:00', '18:00:00', 'Australia/Sydney') |
| All day every Saturday and Sunday in New York | isTimeRange('00:00:00', '23:59:59', 'America/New_York', ['SAT', 'SUN']) |
| After hours on weekdays in Los Angeles | isTimeRange('00:00:00', '08:59:59', 'America/New_York', ['MON', 'TUE','WED', 'THU','FRI']) <br> and <br> isTimeRange('18:00:01', '23:59:59', 'America/New_York', ['MON', 'TUE','WED', 'THU','FRI']) |

##### Date range-based

The date range template allows you to create policies that can route conversations by date and days of the week.The template takes inputs in the following format:

`isDateRange('Start Date in mm/dd/yy', 'End Date in mm/dd/yy, 'Time Zone', ['Day1', 'Day2',...])`

You can create time-based routing policies in the following ways:

| Example | Policy |
| --- | --- |
| Every day between September 1st and 15th in Australia | isDateRange('09/01/21', '09/15/21', 'Australia/Sydney') |
| All weekends in New York in the month of September | isDateRange('09/01/21', '09/30/21', 'America/New_York', ['SAT', 'SUN']) |
| All weekdays in the 4th quarter | isDateRange('10/01/2021', “12/31/2021', 'America/New_York', ['MON','TUE','WED', 'THU','FRI']) |

##### Combining date and time
Combine date and time to create policies:

| Example | Policy |
| --- | --- |
| During work hours on weekdays in the month of September in New York but excluding the Labor Day holiday | isDateRange('09/01/21', '09/30/21', ‘America/New_York')<br>and<br>isTimeRange('09:00:00', '18:00:00', '‘America/New_York', ['MON','TUE','WED', 'THU','FRI'] )<br>and not<br> isDateRange('09/04/21', '09/04/21', ‘America/New_York') |

##### Use date and time with other attributes

| Example | Policy |
| --- | --- |
| VIP customers during work hours on weekdays in the month of September in New York | orchestrator.phoneNumber in custom.VipList<br>and isDateRange('09/01/21', '09/30/21', ‘America/New_York')<br>and isTimeRange('09:00:00', '18:00:00', '‘America/New_York', ['MON','TUE','WED', 'THU','FRI'] )) |

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_advrouting6.png">

##### Use the right formats for days and time zones

**Days**: Days provided should match ‘MON’, ‘TUE’, ‘WED’, ‘THU’, ‘FRI’, ‘SAT’,’ SUN’

**Time zones**: Universal Time Zone database name should be used.
Examples: America/New_York, America/Nipigon, America/Nome, America/Noronha, America/North_Dakota/Beulah, Asia/Saigon, Australia/Adelaide, Australia/Sydney, Australia/Tasmania, Australia/Victoria etc. For the complete list, see [here](https://timezonedb.com/time-zones).

#### Debugging expressions
Use policy logs to debug your policies. For more details, see [here](conversation-orchestrator-dynamic-routing-policy-logs-for-v2.html).

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_advrouting7.png">

#### Nesting multiple expressions for more complex conditions 

Write nested statements to combine multiple logical conditions to arrive at routing decisions. Enclose every block with brackets “( )”.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_advrouting8.png">

### Combine other products to power more complex routing use cases
The section dives deep into two, different advanced routing configurations.

#### Dynamic skill fall over routing

**Scenario:** 
Routing to a different skill if the primary skill is experiencing a high load. The jump from one skill to another should cascade until a skill has available agent capacity. Example: If 80% of agents in a particular skill are busy then fall over to a different skill.

**Solution:**
This can be solved using a combination of [Dynamic Routing](conversation-orchestrator-dynamic-routing-overview.html), [Context Service](conversation-orchestrator-conversation-context-service-overview.html), [LivePerson Functions](liveperson-functions-overview.html) and the [Queue Health API](operational-realtime-api-methods-queue-health.html). A LivePerson Function can be configured to run every 2-5 mins and update the “average wait time” for every skill into the Context service. Dynamic routing policies can then be configured to check average wait time for every skill and fall over to a different skill as appropriate.

<img width="800" src="img/convorchestrator/co_dr_advrouting9.png">

{: important}
The above solution can be deployed relatively quickly. However, it does require a few hours of coding effort for the LivePerson function. This method cannot be used to check queue health in real time for every conversation, but we believe that checking the queue every 2-5 mins will help solve this specific use case. Most conversations live much beyond 2-5 mins and queue stats are unlikely to change significantly during this time frame.

#### Dynamic queue prioritization

**Scenario:**
Recognize when a high value customer (HVC) starts a conversation and immediately escalate them to specific agents without any wait-time or queuing delays. The prioritization should vary across skills. Example if a customer is in the HVC skill their conversation can have a normal priority but on being moved to a different skill, the conversation should be placed top of the line.

**Solution:**
This can be solved using [SDE](engagement-attributes-types-of-engagement-attributes.html), [Dynamic Routing](conversation-orchestrator-dynamic-routing-overview.html), [Conversation Builder](platform-overview.html), [Context Service](conversation-orchestrator-conversation-context-service-overview.html) and [LivePerson’s internal queue prioritization application](https://knowledge.liveperson.com/contact-center-management-messaging-operations-queue-management-queue-prioritization-overview.html). LivePerson’s queue prioritization tool can host custom business rules to boost queue priority for Conversations that have certain attributes.  For this use-case LivePerson will add a new rule to boost priority of conversations that have value "VIP” for “Customer Type SDE”. (SDEs can be used to capture one/more/multiple customer attributes).

While SDEs are captured directly for conversations originating from web-engagements, they have to be manually set when conversations originate on other channels such as whatsapp or mobile apps. For this use case a routing bot will check for the customers’s VIP status through a CRM (or relevant application) and then update the SDE value for VIP customers. LivePersons Queue prioritization updates queue priority in real time whenever the SDE is updated. Next SDE based routing policies can be configured on Dynamic Routing to route VIP customers to the appropriate skill.

<img width="800" src="img/convorchestrator/co_dr_advrouting10.png">

#### Other scenarios
The above are just two out of several possible advanced routing scenarios. Please reach out to your account representative if you need help with these use cases, or you need advice on any other advanced routing use case.
