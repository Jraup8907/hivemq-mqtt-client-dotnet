"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[537],{4660:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>j,frontMatter:()=>t,metadata:()=>i,toc:()=>h});var d=c(5893),s=c(1151);const t={sidebar_position:1},r="Reference",i={id:"events/Reference",title:"Reference",description:"List of Supported Events",source:"@site/docs/events/Reference.md",sourceDirName:"events",slug:"/events/Reference",permalink:"/hivemq-mqtt-client-dotnet/docs/events/Reference",draft:!1,unlisted:!1,editUrl:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/tree/main/Documentation/docs/events/Reference.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Lifecycle Events",permalink:"/hivemq-mqtt-client-dotnet/docs/events/"},next:{title:"Usage Examples",permalink:"/hivemq-mqtt-client-dotnet/docs/events/Examples"}},l={},h=[{value:"List of Supported Events",id:"list-of-supported-events",level:2},{value:"General",id:"general",level:3},{value:"Packet Level",id:"packet-level",level:3}];function x(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,d.jsx)(n.h2,{id:"list-of-supported-events",children:"List of Supported Events"}),"\n",(0,d.jsx)(n.h3,{id:"general",children:"General"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Event"}),(0,d.jsx)(n.th,{children:"EventArgs Class"}),(0,d.jsx)(n.th,{children:"Event Arguments"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"BeforeConnect"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"BeforeConnectEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"HiveMQClientOptions"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"AfterConnect"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"AfterConnectEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ConnectResult"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"BeforeSubscribe"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"BeforeSubscribeEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"SubscribeOptions"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"AfterSubscribe"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"AfterSubscribeEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"SubscribeResult"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"BeforeUnsubscribe"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"BeforeUnsubscribeEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"UnsubscribeOptions"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"AfterUnsubscribe"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"AfterUnsubscribeEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"UnsubscribeResult"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnMessageReceived"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnMessageReceivedEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"MQTT5PublishMessage"})})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"packet-level",children:"Packet Level"}),"\n",(0,d.jsx)(n.p,{children:"These events happen based on MQTT packet activity."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Event"}),(0,d.jsx)(n.th,{children:"EventArgs Class"}),(0,d.jsx)(n.th,{children:"Event Arguments"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnConnectSent"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnConnectSentEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ConnectPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnConnAckReceived"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnConnAckReceivedEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ConnAckPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnConnectSent"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnConnectSentEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ConnectPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnDisconnectReceived"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnDisconnectReceivedEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"DisconnectPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnDisconnectSent"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnDisconnectSentEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"DisconnectPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnPingReqSent"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnPingReqSentEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"PingReqPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnPingRespReceived"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnPingRespReceivedEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"PingRespPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnPublishSent"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnPublishSentEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"PublishPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnPublishReceived"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnPublishReceivedEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"PublishPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnPubAckSent"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnPubAckSentEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"PubAckPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnPubAckReceived"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnPubAckReceivedEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"PubAckPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnPubRecSent"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnPubRecSentEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"PubRecPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnPubRecReceived"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnPubRecReceivedEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"PubRecPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnPubRelSent"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnPubRelSentEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"PubRelPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnPubRelReceived"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnPubRelReceivedEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"PubRelPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnPubCompSent"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnPubCompSentEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"PubCompPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnPubCompReceived"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnPubCompReceivedEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"PubCompPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnSubscribeSent"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnSubscribeSentEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"SubscribePacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnSubAckSent"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnSubAckSentEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"SubAckPacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnUnsubscribeSent"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnUnsubscribeSentEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"UnsubscribePacket"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OnUnsubAckSent"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"OnUnsubAckSentEventArgs"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"UnsubAckPacket"})})]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},1151:(e,n,c)=>{c.d(n,{Z:()=>i,a:()=>r});var d=c(7294);const s={},t=d.createContext(s);function r(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);