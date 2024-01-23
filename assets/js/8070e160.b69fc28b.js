"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[651],{9759:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(5893),s=i(1151);const r={sidebar_position:2},c="Quickstart",l={id:"quickstart",title:"Quickstart",description:"Install",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/hivemq-mqtt-client-dotnet/docs/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/tree/main/Documentation/docs/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"The MQTT Client",permalink:"/hivemq-mqtt-client-dotnet/docs/intro"},next:{title:"Namespaces",permalink:"/hivemq-mqtt-client-dotnet/docs/namespaces"}},o={},d=[{value:"Install",id:"install",level:2},{value:"Overview",id:"overview",level:2},{value:"Common Usage: Complete Example",id:"common-usage-complete-example",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,n.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,n.jsxs)(t.p,{children:["This package is ",(0,n.jsx)(t.a,{href:"https://www.nuget.org/packages/HiveMQtt/",children:"available on NuGet.org"})," and can be installed with:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"dotnet add package HiveMQtt\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This client is 100% open-source.  Find the source code in the ",(0,n.jsx)(t.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet",children:"Github repository"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"This C# client provides a user-friendly builder pattern interface for simplified usage."}),"\n",(0,n.jsx)(t.p,{children:"The following table serves as a handy reference for the most frequently utilized classes within the library:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Core Class"}),(0,n.jsx)(t.th,{children:"Builder Class"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"The Client"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"HiveMQClient"})," (",(0,n.jsx)(t.a,{href:"/docs/quickstart#hivemqclient-connect-with-defaults",children:"Docs"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/tree/main/Source/HiveMQtt/Client",children:"Source"}),")"]}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Client Options"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/main/Source/HiveMQtt/Client/Options/HiveMQClientOptions.cs",children:(0,n.jsx)(t.code,{children:"HiveMQClientOptions"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/main/Source/HiveMQtt/Client/HiveMQClientOptionsBuilder.cs",children:(0,n.jsx)(t.code,{children:"HiveMQClientOptionsBuilder"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Subscribe Options"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/main/Source/HiveMQtt/Client/Options/SubscribeOptions.cs",children:(0,n.jsx)(t.code,{children:"SubscribeOptions"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/builder/Source/HiveMQtt/Client/SubscribeOptionsBuilder.cs",children:(0,n.jsx)(t.code,{children:"SubscribeOptionsBuilder"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Unsubscribe Options"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/main/Source/HiveMQtt/Client/Options/UnsubscribeOptions.cs",children:(0,n.jsx)(t.code,{children:"UnsubscribeOptions"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/builder/Source/HiveMQtt/Client/UnsubscribeOptionsBuilder.cs",children:(0,n.jsx)(t.code,{children:"UnsubscribeOptionsBuilder"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"An Application Message"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/main/Source/HiveMQtt/MQTT5/Types/MQTT5PublishMessage.cs",children:(0,n.jsx)(t.code,{children:"MQTT5PublishMessage"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/main/Source/HiveMQtt/Client/PublishMessageBuilder.cs",children:(0,n.jsx)(t.code,{children:"PublishMessageBuilder"})})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"common-usage-complete-example",children:"Common Usage: Complete Example"}),"\n",(0,n.jsx)(t.p,{children:"The example presented below illustrates the prevalent usage pattern for our client, offering a solid foundation from which you can build upon. This serves as a practical starting point, showcasing the most common workflows to guide and assist you in efficiently implementing and customizing the client based on your specific needs."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'using HiveMQtt.Client;\nusing HiveMQtt.MQTT5.Types; // For QualityOfService enum\n\nvar options = new HiveMQClientOptionsBuilder().\n                    WithBroker(\'candy.x39.eu.hivemq.cloud\').\n                    WithPort(8883).\n                    WithUseTLS(true).\n                    Build();\n\n// Instantiate the HiveMQtt client\nvar client = new HiveMQClient(options);\n\n// Setup application message handlers FIRST\nclient.OnMessageReceived += (sender, args) =>\n{\n    Console.WriteLine("Message Received: {}", args.PublishMessage.PayloadAsString)\n};\n\n// Connect\nvar connectResult = await client.ConnectAsync().ConfigureAwait(false);\n\n// Create subscribe options for topics we want to subscribe to\nvar builder = new SubscribeOptionsBuilder();\nbuilder.WithSubscription("topic1", QualityOfService.AtLeastOnceDelivery)\n       .WithSubscription("topic2", QualityOfService.ExactlyOnceDelivery);\nvar subscribeOptions = builder.Build();\n\n// Subscribe\nvar subscribeResult = await client.SubscribeAsync(subscribeOptions);\n\n// Publish\nvar publishResult = await client.PublishAsync("topic1/example", "Hello Payload")\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>c});var n=i(7294);const s={},r=n.createContext(s);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);