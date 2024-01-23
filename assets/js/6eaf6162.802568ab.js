"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[166],{3284:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=s(5893),t=s(1151);const r={sidebar_position:5},o="Subscribing to Topics",c={id:"subscribing",title:"Subscribing to Topics",description:'In MQTT, "subscribe" is an operation that allows an MQTT client to request to receive messages published to specific topics from an MQTT broker.',source:"@site/docs/subscribing.md",sourceDirName:".",slug:"/subscribing",permalink:"/hivemq-mqtt-client-dotnet/docs/subscribing",draft:!1,unlisted:!1,editUrl:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/tree/main/Documentation/docs/subscribing.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Connecting to an MQTT Broker",permalink:"/hivemq-mqtt-client-dotnet/docs/connecting"},next:{title:"Publishing Messages",permalink:"/hivemq-mqtt-client-dotnet/docs/publishing"}},l={},a=[{value:"Simple",id:"simple",level:2},{value:"With Options",id:"with-options",level:2},{value:"<code>SubscribeOptionsBuilder</code> Reference",id:"subscribeoptionsbuilder-reference",level:3},{value:"Important Tip: Prioritize Setting Your Message Handlers",id:"important-tip-prioritize-setting-your-message-handlers",level:2},{value:"Subscribe: Multiple Topics At Once",id:"subscribe-multiple-topics-at-once",level:2},{value:"Using <code>SubscribeOptionsBuilder</code>",id:"using-subscribeoptionsbuilder",level:3},{value:"Per Subscription Callbacks",id:"per-subscription-callbacks",level:2},{value:"Introduction",id:"introduction",level:3},{value:"The Problem",id:"the-problem",level:3},{value:"Per Subscription Callbacks with `WithSubscription``",id:"per-subscription-callbacks-with-withsubscription",level:3},{value:"See Also",id:"see-also",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"subscribing-to-topics",children:"Subscribing to Topics"}),"\n",(0,n.jsx)(i.p,{children:'In MQTT, "subscribe" is an operation that allows an MQTT client to request to receive messages published to specific topics from an MQTT broker.'}),"\n",(0,n.jsx)(i.h2,{id:"simple",children:"Simple"}),"\n",(0,n.jsx)(i.p,{children:"Use the SubscribeAsync method to subscribe to the desired topic by providing the topic string as a parameter."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csharp",children:'await client.SubscribeAsync("instrument/x9284/boston").ConfigureAwait(false);\n'})}),"\n",(0,n.jsxs)(i.p,{children:["Optionally, you can specify the desired quality of service (QoS) level for the subscription. By default, the QoS level is set to ",(0,n.jsx)(i.code,{children:"QualityOfServiceLevel.AtMostOnce"}),"."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csharp",children:'using HiveMQtt.MQTT5.Types; // For QualityOfService enum\n\nstring topic = "my/topic";\nQualityOfService qos = QualityOfService.AtLeastOnceDelivery;\n\nawait client.SubscribeAsync(topic, qosLevel);\n'})}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:["Make sure to set your message handlers ",(0,n.jsx)(i.strong,{children:"before subscribing"}),".  See ",(0,n.jsx)(i.a,{href:"#important-tip-prioritize-setting-your-message-handlers",children:"this section"})," below for more details."]})}),"\n",(0,n.jsx)(i.h2,{id:"with-options",children:"With Options"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"SubscribeOptionsBuilder"})," class provides a convenient way to construct subscription options for MQTT subscriptions. It allows you to configure various aspects of the subscription(s), including the topic filter, quality of service (QoS) level, user properties, and more."]}),"\n",(0,n.jsx)(i.p,{children:"To use the SubscribeOptionsBuilder:"}),"\n",(0,n.jsx)(i.p,{children:"Create an instance of the SubscribeOptionsBuilder class."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csharp",children:"var builder = new SubscribeOptionsBuilder();\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Use the ",(0,n.jsx)(i.code,{children:"WithSubscription"})," method to specify the topic filter and QoS level for the subscription. This method can be called multiple times to create multiple subscriptions at once."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csharp",children:'builder.WithSubscription("topic1", QualityOfService.AtLeastOnceDelivery)\n       .WithSubscription("topic2", QualityOfService.ExactlyOnceDelivery);\n'})}),"\n",(0,n.jsxs)(i.p,{children:["Optionally, you can use the ",(0,n.jsx)(i.code,{children:"WithUserProperties"})," method to add custom user properties to the subscription. User properties are key-value pairs that provide additional metadata or application-specific information."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csharp",children:'var userProperties = new Dictionary<string, string>\n{\n    { "property1", "value1" },\n    { "property2", "value2" }\n};\n\nbuilder.WithUserProperties(userProperties);\n'})}),"\n",(0,n.jsxs)(i.p,{children:["There also exists a singular ",(0,n.jsx)(i.code,{children:"WithUserProperty"})," if you just need to send one key-value pair:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csharp",children:'builder.WithUserProperty("property1", "value1")\n'})}),"\n",(0,n.jsx)(i.p,{children:"Call the Build method to create the SubscribeOptions object."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csharp",children:"var options = builder.Build();\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Use the created ",(0,n.jsx)(i.code,{children:"SubscribeOptions"})," object when subscribing to MQTT topics using the MQTT client library."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csharp",children:"await client.SubscribeAsync(options);\n"})}),"\n",(0,n.jsxs)(i.p,{children:["By using the ",(0,n.jsx)(i.code,{children:"SubscribeOptionsBuilder"}),", you can easily configure multiple subscriptions with different topic filters and QoS levels. Additionally, you have the flexibility to include custom user properties to provide additional information or metadata for the subscriptions."]}),"\n",(0,n.jsxs)(i.h3,{id:"subscribeoptionsbuilder-reference",children:[(0,n.jsx)(i.code,{children:"SubscribeOptionsBuilder"})," Reference"]}),"\n",(0,n.jsxs)(i.p,{children:["To illustrate ",(0,n.jsx)(i.em,{children:"each and every possible call"})," with ",(0,n.jsx)(i.code,{children:"SubscribeOptionsBuilder"}),", see the following example:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csharp",children:'using HiveMQtt.MQTT5.Types;\n\nvar options = new SubscribeOptionsBuilder().\n                    .WithSubscription(\n                        "topic1",                             // Topic\n                        QualityOfService.ExactlyOnceDelivery, // Quality of Service Level\n                        true,                                 // NoLocal\n                        true,                                 // RetainAsPublished\n                        RetainHandling.SendAtSubscribe        // RetainHandling\n                    ).\n                    WithUserProperty("property1", "value1").\n                    WithUserProperties(\n                        new Dictionary<string, string> {\n                            { "property1", "value1" }, { "property2", "value2" } }).\n                    Build();\n\n'})}),"\n",(0,n.jsxs)(i.p,{children:["In ",(0,n.jsx)(i.code,{children:"WithSubscription"}),", the first two arguments are required.  The additional optional parameters are defined as:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"NoLoca"}),"l: The NoLocal option, when set to true, indicates that the subscriber does not want to receive messages published by itself. This option is useful in scenarios where a client is publishing and subscribing to the same topic. By setting NoLocal to true, the client can avoid receiving its own published messages."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"RetainAsPublished"}),": The RetainAsPublished option, when set to false, indicates that the broker should not send retained messages to the subscriber when it first subscribes to a topic. Retained messages are those that are stored by the broker and sent to new subscribers upon subscription. By setting RetainAsPublished to false, the subscriber will not receive any retained messages for that topic."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Retain handling"}),": Retain handling refers to the behavior of the broker when it receives a subscription request for a topic that has retained messages. In MQTT 5, there are three options for retain handling:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"RetainHandling.SendAtSubscribe"}),": The broker sends any retained messages for the topic to the subscriber immediately upon subscription."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"RetainHandling.SendAtSubscribeIfNewSubscription"}),": The broker sends retained messages to new subscribers only if there are no existing subscriptions for that topic."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"RetainHandling.DoNotSendAtSubscribe"}),": The broker does not send any retained messages to the subscriber upon subscription."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"These options provide flexibility and control over the behavior of the subscription process in MQTT 5, allowing subscribers to customize their experience based on their specific requirements."}),"\n",(0,n.jsx)(i.h2,{id:"important-tip-prioritize-setting-your-message-handlers",children:"Important Tip: Prioritize Setting Your Message Handlers"}),"\n",(0,n.jsx)(i.p,{children:"In MQTT communication, the message handler is responsible for processing incoming messages from the broker. It's crucial to set up your message handler before establishing a connection to the MQTT broker."}),"\n",(0,n.jsx)(i.p,{children:"Why is this order important? Once a connection is established, the broker may start sending messages immediately, especially if there are retained messages for the topics you're subscribing to. If the message handler is not set up in advance, these incoming messages might not be processed, leading to potential data loss or unexpected behavior."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csharp",children:'// Message Handler\nclient.OnMessageReceived += (sender, args) =>\n{\n    Console.WriteLine("Message Received: {}", args.PublishMessage.PayloadAsString)\n};\n\nawait client.ConnectAsync();\n'})}),"\n",(0,n.jsx)(i.p,{children:"or alternatively:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csharp",children:'private static void MessageHandler(object? sender, OnMessageReceivedEventArgs eventArgs)\n{\n    Console.WriteLine("Message Received: {}", eventArgs.PublishMessage.PayloadAsString)\n}\n\nclient.OnMessageReceived += MessageHandler;\nawait client.ConnectAsync();\n'})}),"\n",(0,n.jsx)(i.p,{children:"In this example, the message handler is defined as a lambda function that writes the received message to the console. Only after the message handler is set up do we connect to the broker using the ConnectAsync method."}),"\n",(0,n.jsx)(i.p,{children:"Remember, prioritizing the setup of your message handler ensures that your application is ready to process incoming messages as soon as the connection to the broker is established."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["See Also: ",(0,n.jsx)(i.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/main/Source/HiveMQtt/Client/Events/OnMessageReceivedEventArgs.cs",children:"OnMessageReceivedEventArgs.cs"})]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"subscribe-multiple-topics-at-once",children:"Subscribe: Multiple Topics At Once"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csharp",children:'using HiveMQtt.Client.Options;\nusing HiveMQtt.Client.Results;\n\nvar options = new SubscribeOptions();\noptions.TopicFilters.Add(new TopicFilter { Topic = "foo/boston", QoS = QualityOfService.AtLeastOnceDelivery });\noptions.TopicFilters.Add(new TopicFilter { Topic = "bar/landshut", QoS = QualityOfService.AtMostOnceDelivery });\n\nvar result = await client.SubscribeAsync(options);\n'})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"result.Subscriptions"})," contains the list of subscriptions made with this call"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"client.Subscriptions"})," is updated with complete list of subscriptions made up to this point"]}),"\n",(0,n.jsxs)(i.li,{children:["each ",(0,n.jsx)(i.code,{children:"Subscription"})," object has a resulting ",(0,n.jsx)(i.code,{children:"ReasonCode"})," that represents the Subscribe result in ",(0,n.jsx)(i.code,{children:"result.Subscriptions[0].ReasonCode"})]}),"\n"]}),"\n",(0,n.jsxs)(i.h3,{id:"using-subscribeoptionsbuilder",children:["Using ",(0,n.jsx)(i.code,{children:"SubscribeOptionsBuilder"})]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csharp",children:'var subscribeOptions = new SubscribeOptionsBuilder()\n            .WithSubscription("my/topic1", MQTT5.Types.QualityOfService.AtLeastOnceDelivery)\n            .WithSubscription("my/topic/2", MQTT5.Types.QualityOfService.AtLeastOnceDelivery, true, true, MQTT5.Types.RetainHandling.SendAtSubscribe)\n            .WithUserProperty("Client-Geo", "38.115662, 13.361470")\n            .Build();\n\nvar subResult = await subClient.SubscribeAsync(subscribeOptions).ConfigureAwait(false);\n'})}),"\n",(0,n.jsx)(i.h2,{id:"per-subscription-callbacks",children:"Per Subscription Callbacks"}),"\n",(0,n.jsx)(i.h3,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"SubscribeOptionsBuilder"})," class in the HiveMQtt client library provides a convenient way to configure subscription options for MQTT subscriptions. One of the key features of the ",(0,n.jsx)(i.code,{children:"SubscribeOptionsBuilder"})," is the ability to specify per subscription callbacks using the ",(0,n.jsx)(i.code,{children:"WithSubscription"})," method. This allows you to define custom event handlers that will be invoked when messages are received for specific topics."]}),"\n",(0,n.jsx)(i.h3,{id:"the-problem",children:"The Problem"}),"\n",(0,n.jsx)(i.p,{children:"In MQTT communication, it is common to have different subscriptions for different topics, each requiring specific handling or processing of the received messages. The challenge is to associate a specific callback or event handler with each subscription, so that the appropriate logic can be executed when messages are received for those topics."}),"\n",(0,n.jsx)(i.h3,{id:"per-subscription-callbacks-with-withsubscription",children:"Per Subscription Callbacks with `WithSubscription``"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"WithSubscription"})," method of the ",(0,n.jsx)(i.code,{children:"SubscribeOptionsBuilder"})," class provides a solution to this problem. It allows you to specify a topic filter and an event handler that will be associated with that topic filter. The event handler will be invoked whenever a message is received for the subscribed topic."]}),"\n",(0,n.jsxs)(i.p,{children:["The signature of the ",(0,n.jsx)(i.code,{children:"WithSubscription"})," method is as follows:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csharp",children:"public SubscribeOptionsBuilder WithSubscription(TopicFilter topicFilter, EventHandler<OnMessageReceivedEventArgs>? handler = null)\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Here's an example of how you might use the ",(0,n.jsx)(i.code,{children:"WithSubscription"})," method to set up a per subscription callback:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csharp",children:'var builder = new SubscribeOptionsBuilder();\nvar options = builder.WithSubscription(\n        new TopicFilter("test/topic", QualityOfService.AtLeastOnceDelivery),\n        (sender, e) =>\n        {\n            Console.WriteLine($"Message received on topic {e.Topic}: {e.Message}");\n        })\n    .Build();\n'})}),"\n",(0,n.jsxs)(i.p,{children:["In this example, we first create an instance of ",(0,n.jsx)(i.code,{children:"SubscribeOptionsBuilder"}),". Then we call the ",(0,n.jsx)(i.code,{children:"WithSubscription"})," method to add a subscription with a topic filter and an event handler. The event handler is a lambda function that writes a message to the console whenever a message is received on the subscribed topic. Finally, we call the Build method to create the SubscribeOptions."]}),"\n",(0,n.jsx)(i.p,{children:"Alternatively the message handler can be independently defined:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csharp",children:'private static void MessageHandler(object? sender, OnMessageReceivedEventArgs eventArgs)\n{\n    Console.WriteLine("Message Received: {}", eventArgs.PublishMessage.PayloadAsString)\n}\n\nvar builder = new SubscribeOptionsBuilder();\nvar options = builder.WithSubscription(\n        new TopicFilter("test/topic", QualityOfService.AtLeastOnceDelivery),\n        MessageHandler)\n    .Build();\n\n'})}),"\n",(0,n.jsx)(i.h2,{id:"see-also",children:"See Also"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices/",children:"MQTT Topics, Wildcards, & Best Practices"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://www.hivemq.com/article/mqtt-topic-tree-matching-challenges-best-practices-explained/",children:"MQTT Topic Tree & Topic Matching"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/main/Source/HiveMQtt/MQTT5/Types/TopicFilter.cs",children:"TopicFilter.cs"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/main/Source/HiveMQtt/Client/Options/SubscribeOptions.cs",children:"SubscribeOptions.cs"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/main/Source/HiveMQtt/Client/Results/SubscribeResult.cs",children:"SubscribeResult.cs"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/main/Source/HiveMQtt/Client/SubscribeOptionsBuilder.cs",children:"SubscribeOptionsBuilder.cs"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,i,s)=>{s.d(i,{Z:()=>c,a:()=>o});var n=s(7294);const t={},r=n.createContext(t);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);