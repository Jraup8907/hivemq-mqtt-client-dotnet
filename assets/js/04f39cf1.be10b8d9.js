"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[129],{2114:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>j,frontMatter:()=>t,metadata:()=>i,toc:()=>h});var s=c(4848),d=c(8453);const t={sidebar_position:1},r="Event Reference",i={id:"events/Reference",title:"Event Reference",description:"This document provides a comprehensive list of events supported by the HiveMQtt client library. These events are categorized into two sections: General and Packet Level.",source:"@site/docs/events/Reference.md",sourceDirName:"events",slug:"/events/Reference",permalink:"/hivemq-mqtt-client-dotnet/docs/events/Reference",draft:!1,unlisted:!1,editUrl:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/tree/main/Documentation/docs/events/Reference.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Lifecycle Events",permalink:"/hivemq-mqtt-client-dotnet/docs/events/"},next:{title:"Usage Examples",permalink:"/hivemq-mqtt-client-dotnet/docs/events/Examples"}},l={},h=[{value:"General Events",id:"general-events",level:2},{value:"Packet Level Events",id:"packet-level-events",level:2}];function x(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"event-reference",children:"Event Reference"})}),"\n",(0,s.jsx)(n.p,{children:"This document provides a comprehensive list of events supported by the HiveMQtt client library. These events are categorized into two sections: General and Packet Level."}),"\n",(0,s.jsx)(n.h2,{id:"general-events",children:"General Events"}),"\n",(0,s.jsx)(n.p,{children:"General events are triggered by high-level operations such as connecting, subscribing, unsubscribing, and receiving messages."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Event"}),(0,s.jsx)(n.th,{children:"EventArgs Class"}),(0,s.jsx)(n.th,{children:"Event Arguments"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BeforeConnect"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"BeforeConnectEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"HiveMQClientOptions"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AfterConnect"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"AfterConnectEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ConnectResult"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BeforeSubscribe"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"BeforeSubscribeEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SubscribeOptions"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AfterSubscribe"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"AfterSubscribeEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SubscribeResult"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BeforeUnsubscribe"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"BeforeUnsubscribeEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"UnsubscribeOptions"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AfterUnsubscribe"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"AfterUnsubscribeEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"UnsubscribeResult"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnMessageReceived"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnMessageReceivedEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"MQTT5PublishMessage"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BeforeDisconnect"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"BeforeDisconnectEventArgs"})}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AfterDisconnect"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"AfterDisconnectEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CleanDisconnect"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"packet-level-events",children:"Packet Level Events"}),"\n",(0,s.jsx)(n.p,{children:"Packet level events are triggered by the underlying MQTT packet activity. These events provide a more granular level of control and can be useful for debugging or advanced use cases."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Event"}),(0,s.jsx)(n.th,{children:"EventArgs Class"}),(0,s.jsx)(n.th,{children:"Event Arguments"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnConnectSent"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnConnectSentEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ConnectPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnConnAckReceived"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnConnAckReceivedEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ConnAckPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnConnectSent"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnConnectSentEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ConnectPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnDisconnectReceived"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnDisconnectReceivedEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"DisconnectPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnDisconnectSent"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnDisconnectSentEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"DisconnectPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnPingReqSent"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnPingReqSentEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PingReqPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnPingRespReceived"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnPingRespReceivedEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PingRespPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnPublishSent"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnPublishSentEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PublishPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnPublishReceived"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnPublishReceivedEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PublishPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnPubAckSent"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnPubAckSentEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PubAckPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnPubAckReceived"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnPubAckReceivedEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PubAckPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnPubRecSent"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnPubRecSentEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PubRecPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnPubRecReceived"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnPubRecReceivedEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PubRecPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnPubRelSent"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnPubRelSentEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PubRelPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnPubRelReceived"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnPubRelReceivedEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PubRelPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnPubCompSent"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnPubCompSentEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PubCompPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnPubCompReceived"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnPubCompReceivedEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PubCompPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnSubscribeSent"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnSubscribeSentEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SubscribePacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnSubAckSent"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnSubAckSentEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SubAckPacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnUnsubscribeSent"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnUnsubscribeSentEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"UnsubscribePacket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OnUnsubAckSent"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OnUnsubAckSentEventArgs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"UnsubAckPacket"})})]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>r,x:()=>i});var s=c(6540);const d={},t=s.createContext(d);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);