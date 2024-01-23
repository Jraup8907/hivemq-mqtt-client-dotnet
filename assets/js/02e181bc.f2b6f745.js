"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[415],{7094:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=i(5893),s=i(1151);const r={},o="Custom Client Certificates",a={id:"how-to/client-certificates",title:"Custom Client Certificates",description:"The HiveMQtt client has the ability to use custom client certificates to identify itself to the MQTT broker that it connect to.",source:"@site/docs/how-to/client-certificates.md",sourceDirName:"how-to",slug:"/how-to/client-certificates",permalink:"/hivemq-mqtt-client-dotnet/docs/how-to/client-certificates",draft:!1,unlisted:!1,editUrl:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/tree/main/Documentation/docs/how-to/client-certificates.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Connecting with TLS and Allowing Invalid TLS Certificates",permalink:"/hivemq-mqtt-client-dotnet/docs/how-to/allow-invalid-certs"},next:{title:"Configure Logging",permalink:"/hivemq-mqtt-client-dotnet/docs/how-to/configure-logging"}},c={},l=[{value:"Using X509Certificate2",id:"using-x509certificate2",level:2},{value:"Using Certificates with a Passwords",id:"using-certificates-with-a-passwords",level:2},{value:"Security Tips",id:"security-tips",level:2},{value:"Using an Environment Variable for the Certificate Password",id:"using-an-environment-variable-for-the-certificate-password",level:2},{value:"Using a Configuration File for the Certificate Password",id:"using-a-configuration-file-for-the-certificate-password",level:2},{value:"Step 1: Modify appsettings.json",id:"step-1-modify-appsettingsjson",level:3},{value:"Step 2: Create a Configuration Model",id:"step-2-create-a-configuration-model",level:3},{value:"Step 3: Load Configuration in Your Application",id:"step-3-load-configuration-in-your-application",level:3},{value:"Step 4: Use the Configuration in Your Code",id:"step-4-use-the-configuration-in-your-code",level:3},{value:"Notes",id:"notes",level:3},{value:"Extended Options",id:"extended-options",level:2},{value:"See Also",id:"see-also",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"custom-client-certificates",children:"Custom Client Certificates"}),"\n",(0,n.jsx)(t.p,{children:"The HiveMQtt client has the ability to use custom client certificates to identify itself to the MQTT broker that it connect to."}),"\n",(0,n.jsx)(t.p,{children:"For more information on X.509 client certificates, see the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.hivemq.com/blog/mqtt-security-fundamentals-x509-client-certificate-authentication/",children:"X509 Client Certificate Authentication - MQTT Security Fundamentals"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.hivemq.com/hivemq/latest/user-guide/howtos.html#_generate_a_pem_client_certificate_e_g_mosquitto_pub_sub",children:"How to Generate a PEM client certificate"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You can add one or more client certificates to the HiveMQtt client through the ",(0,n.jsx)(t.code,{children:"HiveMQClientOptionsBuilder"})," class."]}),"\n",(0,n.jsx)(t.p,{children:"Adding certificates will cause the client to present these certificates to the broker upon TLS connection negotiation."}),"\n",(0,n.jsx)(t.h2,{id:"using-x509certificate2",children:"Using X509Certificate2"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"using HiveMQtt.Client.Options;\nusing System.Security.Cryptography.X509Certificates;\n\n// Can pre-create a X509Certificate2 or alternatively pass a string path\n// to the certificate (see below)\nvar clientCertificate = new X509Certificate2(\n                        'path/to/certificate-file-1.pem');\n\nvar options = new HiveMQClientOptionsBuilder()\n                    .WithClientCertificate(clientCertificate);\n                    .WithClientCertificate('path/to/certificate-file-2.pem');\n\nvar client = new HiveMQttClient(options);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"using-certificates-with-a-passwords",children:"Using Certificates with a Passwords"}),"\n",(0,n.jsxs)(t.p,{children:["If your certificate and protected with a password, you can either instantiate the\n",(0,n.jsx)(t.code,{children:"X509Certificate2"})," object manually and pass it to the HiveMQtt client with\n",(0,n.jsx)(t.code,{children:"WithClientCertificate"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"using HiveMQtt.Client.Options;\nusing System.Security.Cryptography.X509Certificates;\n\nvar clientCertificate = new X509Certificate2(\n                        'path/to/certificate-with-password.pem',\n                        'certificate-password');\n\nvar options = new HiveMQClientOptionsBuilder()\n                    .WithClientCertificate(clientCertificate);\n\nvar client = new HiveMQttClient(options);\n"})}),"\n",(0,n.jsx)(t.p,{children:"...or alternatively, just pass the string path to the certificate with the password:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"using HiveMQtt.Client.Options;\nusing System.Security.Cryptography.X509Certificates;\n\n\nvar options = new HiveMQClientOptionsBuilder()\n                    .WithClientCertificate(\n                        'path/to/certificate-with-password.pem',\n                        'certificate-password'\n                    );\n\nvar client = new HiveMQttClient(options);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"security-tips",children:"Security Tips"}),"\n",(0,n.jsxs)(t.p,{children:["When using ",(0,n.jsx)(t.code,{children:"X509Certificate2"})," in C# with TLS client certificates that require a password, it's important to handle and protect the certificate passwords securely. Here are some tips to manage certificate passwords safely:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Avoid Hardcoding Passwords:"})," Never hardcode the certificate password directly in the source code. This can lead to security vulnerabilities, as the source code (or compiled binaries) could be accessed by unauthorized parties."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Use Configuration Files:"})," Store the password in a configuration file separate from the codebase. Ensure this file is not checked into source control (like Git) and is only accessible by the application and authorized team members."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Environment Variables:"})," Consider using environment variables to store certificate passwords. This is useful in cloud or containerized environments. Environment variables can be set at the operating system level or within the deployment environment, keeping sensitive data out of the code."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Secure Secrets Management:"})," When appropriate, utilize a secrets management tool (like Azure Key Vault, AWS Secrets Manager, or HashiCorp Vault) to store and access secrets like certificate passwords. These tools provide a secure and centralized way to manage sensitive data, with features like access control, audit logs, and automatic rotation of secrets."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Regular Updates and Rotation:"})," Regularly update and rotate certificates and passwords. This practice can limit the damage if a certificate or its password is compromised."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"using-an-environment-variable-for-the-certificate-password",children:"Using an Environment Variable for the Certificate Password"}),"\n",(0,n.jsx)(t.p,{children:"Instead of hard-coding a password, you can use an environment variable to hold the certificate password as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'using System;\nusing HiveMQtt.Client.Options;\nusing System.Security.Cryptography.X509Certificates;\n\nvar certPassword = Environment.GetEnvironmentVariable("CERT_PASSWORD");\n\nif (string.IsNullOrEmpty(certPassword))\n{\n    throw new InvalidOperationException(\n        "Certificate password not found in environment variables");\n}\n\nvar options = new HiveMQClientOptionsBuilder()\n                    .WithClientCertificate(\n                        "path/to/certificate-with-password.pem",\n                        certPassword\n                    );\n\nvar client = new HiveMQttClient(options);\n'})}),"\n",(0,n.jsx)(t.h2,{id:"using-a-configuration-file-for-the-certificate-password",children:"Using a Configuration File for the Certificate Password"}),"\n",(0,n.jsx)(t.p,{children:"You can use a configuration file to store the password instead of hardcoding it into your source code. In .NET applications, this is commonly done using appsettings.json or a similar configuration file. Here's a step-by-step guide on how to implement this:"}),"\n",(0,n.jsx)(t.p,{children:"To enhance security when handling sensitive information such as a certificate password, you can use a configuration file to store the password instead of hardcoding it into your source code. In .NET applications, this is commonly done using appsettings.json or a similar configuration file. Here's a step-by-step guide on how to implement this:"}),"\n",(0,n.jsx)(t.h3,{id:"step-1-modify-appsettingsjson",children:"Step 1: Modify appsettings.json"}),"\n",(0,n.jsxs)(t.p,{children:["Add the certificate password to your ",(0,n.jsx)(t.code,{children:"appsettings.json"})," file. It's important to ensure that this file is properly secured and not included in source control (e.g., Git)."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  // Other configuration settings\n  "CertificateSettings": {\n    "CertificatePath": "path/to/certificate-with-password.pem",\n    "CertificatePassword": "YourSecurePassword"\n  }\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"step-2-create-a-configuration-model",children:"Step 2: Create a Configuration Model"}),"\n",(0,n.jsx)(t.p,{children:"Create a simple model to represent the settings."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"public class CertificateSettings\n{\n    public string CertificatePath { get; set; }\n    public string CertificatePassword { get; set; }\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"step-3-load-configuration-in-your-application",children:"Step 3: Load Configuration in Your Application"}),"\n",(0,n.jsxs)(t.p,{children:["In the part of your application where you configure services, set up code to load the settings from ",(0,n.jsx)(t.code,{children:"appsettings.json"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"using Microsoft.Extensions.Configuration;\nusing System.IO;\n\n// Assuming you are in the Startup.cs or a similar setup file\npublic class Startup\n{\n    public IConfiguration Configuration { get; }\n\n    public Startup(IConfiguration configuration)\n    {\n        Configuration = configuration;\n    }\n\n    // Other configurations...\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"step-4-use-the-configuration-in-your-code",children:"Step 4: Use the Configuration in Your Code"}),"\n",(0,n.jsx)(t.p,{children:"Now, use the configuration settings when creating the HiveMQtt client options."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'// Load certificate settings\nvar certSettings = new CertificateSettings();\nConfiguration.GetSection("CertificateSettings").Bind(certSettings);\n\n// Use settings to initialize HiveMQtt client options\nvar options = new HiveMQClientOptionsBuilder()\n    .WithClientCertificate(\n        certSettings.CertificatePath,\n        certSettings.CertificatePassword\n    );\n\nvar client = new HiveMQttClient(options);\n'})}),"\n",(0,n.jsx)(t.h3,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.p,{children:"A couple tips on the above example:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Secure ",(0,n.jsx)(t.code,{children:"appsettings.json"}),": Ensure this file is not exposed or checked into source control. Use file permissions to restrict access."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Environment-Specific Settings: For different environments (development, staging, production), use environment-specific appsettings files like ",(0,n.jsx)(t.code,{children:"appsettings.Production.json"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"extended-options",children:"Extended Options"}),"\n",(0,n.jsxs)(t.p,{children:["TLS negotiation with client certificates is based on the ",(0,n.jsx)(t.code,{children:"X509Certificate2"})," class.  See the ",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/system.security.cryptography.x509certificates.x509certificate2?view=net-8.0",children:"official\n.NET documentation"})," for more options and information."]}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See Also"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.hivemq.com/blog/mqtt-security-fundamentals-x509-client-certificate-authentication/",children:"X509 Client Certificate Authentication - MQTT Security Fundamentals"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.hivemq.com/blog/mqtt-security-fundamentals-tls-ssl/",children:"TLS/SSL - MQTT Security Fundamentals"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/main/Source/HiveMQtt/Client/HiveMQClientOptionsBuilder.cs",children:"HiveMQClientOptionsBuilder.cs"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/hivemq/hivemq-mqtt-client-dotnet/blob/main/Source/HiveMQtt/Client/Options/HiveMQClientOptions.cs",children:"HiveMQClientOptions.cs"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/system.security.cryptography.x509certificates.x509certificate2?view=net-8.0",children:"Microsoft .NET Documentation: X.509"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var n=i(7294);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);