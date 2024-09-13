"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[517],{8515:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var n=i(4848),o=i(8453);const s={},c="Connecting with TLS and Allowing Invalid TLS Certificates",l={id:"how-to/allow-invalid-certs",title:"Connecting with TLS and Allowing Invalid TLS Certificates",description:"In certain development or testing scenarios, you might need to connect to an MQTT broker that uses TLS but has an invalid or self-signed certificate. The HiveMQtt client library provides an option to disable the TLS certificate check upon connection, which can be useful in these situations.",source:"@site/docs/how-to/allow-invalid-certs.md",sourceDirName:"how-to",slug:"/how-to/allow-invalid-certs",permalink:"/hivemq-mqtt-client-dotnet/docs/how-to/allow-invalid-certs",draft:!1,unlisted:!1,editUrl:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/tree/main/Documentation/docs/how-to/allow-invalid-certs.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"How To Guides",permalink:"/hivemq-mqtt-client-dotnet/docs/category/how-to-guides"},next:{title:"Custom Client Certificates",permalink:"/hivemq-mqtt-client-dotnet/docs/how-to/client-certificates"}},r={},a=[{value:"See Also",id:"see-also",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"connecting-with-tls-and-allowing-invalid-tls-certificates",children:"Connecting with TLS and Allowing Invalid TLS Certificates"})}),"\n",(0,n.jsx)(t.p,{children:"In certain development or testing scenarios, you might need to connect to an MQTT broker that uses TLS but has an invalid or self-signed certificate. The HiveMQtt client library provides an option to disable the TLS certificate check upon connection, which can be useful in these situations."}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"AllowInvalidBrokerCertificates"})," option in the ",(0,n.jsx)(t.code,{children:"HiveMQClientOptions"})," class allows you to disable the TLS certificate check."]}),"\n",(0,n.jsx)(t.p,{children:"Here's an example of how to use this option:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'var options = new HiveMQClientOptionsBuilder()\n    .WithBroker("broker-with-invalid-tls-cert.localhost.dev")\n    .WithPort(8883)\n    .WithUseTls(true)\n    .WithAllowInvalidBrokerCertificates(true)\n    .Build();\n\nvar client = new HiveMQClient(options);\nvar connectResult = await client.ConnectAsync().ConfigureAwait(false);\n'})}),"\n",(0,n.jsx)(t.p,{children:"In this example, we first create an instance of HiveMQClientOptionsBuilder. We then set the broker address, port, and enable TLS. The WithAllowInvalidBrokerCertificates(true) method call disables the TLS certificate check. Finally, we build the options and use them to create a new HiveMQClient."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Disabling the TLS certificate check can expose your application to security risks, such as man-in-the-middle attacks. Therefore, this option should only be used in controlled environments for development or testing purposes."})}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See Also"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/main/Source/HiveMQtt/Client/HiveMQClientOptionsBuilder.cs",children:"HiveMQClientOptionsBuilder.cs"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/main/Source/HiveMQtt/Client/Options/HiveMQClientOptions.cs",children:"HiveMQClientOptions.cs"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.hivemq.com/blog/mqtt-security-fundamentals-tls-ssl/",children:"TLS/SSL - MQTT Security Fundamentals"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.hivemq.com/hivemq/latest/user-guide/security.html",children:"HiveMQ Documentation on Security"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>l});var n=i(6540);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);