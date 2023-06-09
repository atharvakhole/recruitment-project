const skillData = [
  {
    category: "Access software",
    values: ["Citrix cloud computing software"],
  },
  {
    category: "Accounting software",
    values: ["Tax software"],
  },
  {
    category: "Analytical or scientific software",
    values: [
      "IBM SPSS Statistics",
      "Minitab",
      "SAS",
      "Simulation program with integrated circuit emphasis SPICE",
      "StataCorp Stata",
      "The MathWorks MATLAB",
    ],
  },
  {
    category: "Application server software",
    values: [
      "Docker",
      "GitHub",
      "Oracle WebLogic Server",
      "Red Hat OpenShift",
      "Red Hat WildFly",
      "Spring Boot",
    ],
  },
  {
    category: "Backup or archival software",
    values: ["Veritas NetBackup"],
  },
  {
    category: "Business intelligence and data analysis software",
    values: [
      "IBM Cognos Impromptu",
      "MicroStrategy",
      "Oracle Business Intelligence Enterprise Edition",
      "Qlik Tech QlikView",
      "Tableau",
    ],
  },
  {
    category: "Cloud-based data access and sharing software",
    values: ["Microsoft SharePoint"],
  },
  {
    category: "Cloud-based management software",
    values: [
      "Amazon Web Services AWS CloudFormation",
      "IBM WebSphere",
      "Splunk Enterprise",
    ],
  },
  {
    category: "Communications server software",
    values: ["IBM Domino"],
  },
  {
    category: "Compiler and decompiler software",
    values: [
      "Code generator software",
      "Command interpreters",
      "Compilers",
      "Decompilers",
      "Incremental compiler software",
      "Inline code expander software",
      "Interpreter software",
      "Just-in-time compiler",
      "Mixed code generator",
      "One pass compiler software",
      "Partial class generator software",
      "Retargetable compiler",
      "Threaded code compiler",
    ],
  },
  {
    category: "Computer aided design CAD software",
    values: [
      "Bentley MicroStation",
      "Computer aided design and drafting CADD software",
      "Dassault Systemes CATIA",
    ],
  },
  {
    category: "Configuration management software",
    values: [
      "Chef",
      "IBM Rational ClearCase",
      "Perforce Helix software",
      "Puppet",
      "Revision control software",
      "VMware",
    ],
  },
  {
    category: "Content workflow software",
    values: [
      "Atlassian JIRA",
      "Emerald Software Group Emerald Green Office",
      "Workflow software",
    ],
  },
  {
    category: "Data base management system software",
    values: [
      "Amazon DynamoDB",
      "Amazon Kinesis",
      "Apache Cassandra",
      "Apache Hadoop",
      "Apache Pig",
      "Apache Solr",
      "CAST SQL Builder",
      "Computer Associates integrated data management system CA-IDMS",
      "Data definition language DDL",
      "Data manipulation language DML",
      "Elasticsearch",
      "MongoDB",
      "MySQL",
      "NoSQL",
      "Oracle PL/SQL",
      "Relational database management software",
      "SAP Adaptive Server Enterprise",
      "Structured Query Report SQR",
      "Teradata Database",
    ],
  },
  {
    category: "Data base reporting software",
    values: [
      "Microsoft SQL Server Reporting Services SSRS",
      "ReCrystallize Crystal Reports",
      "SAP Crystal Reports",
    ],
  },
  {
    category: "Data base user interface and query software",
    values: [
      "Amazon Elastic Compute Cloud EC2",
      "Amazon Redshift",
      "Amazon Web Services AWS software",
      "Apache Hive",
      "dBASE Plus",
      "FileMaker Pro",
      "IBM DB2",
      "IEA Software Emerald",
      "Microsoft Access",
      "Microsoft SQL Server",
      "Oracle Database",
      "Oracle JDBC",
      "Structured query language SQL",
      "Transact-SQL",
    ],
  },
  {
    category: "Data mining software",
    values: ["Google Analytics"],
  },
  {
    category: "Desktop publishing software",
    values: ["Microsoft Publisher"],
  },
  {
    category: "Development environment software",
    values: [
      "A programming language APL",
      "ABC Compiler",
      "Ada",
      "Adobe Systems Adobe ActionScript",
      "Adobe Systems Adobe PostScript",
      "Algorithmic language ALGOL",
      "American National Standards Institute ANSI C",
      "Apache Ant",
      "Apache Kafka",
      "Apache Maven",
      "AWK",
      "B-Method",
      "Beginner's all-purpose symbolic instruction code BASIC",
      "Bigloo Scheme",
      "C",
      "Call-processing language CPL",
      "Canu",
      "Clipper",
      "Code munger software",
      "Common business oriented language COBOL",
      "Computer On-line Real-time Applications Language CORAL 66",
      "Eclipse IDE",
      "Event-driven State-machines Programming",
      "Formula translation/translator FORTRAN",
      "Forth",
      "Gambit Scheme",
      "Go",
      "Haskell",
      "ICON programming language",
      "Integrated development environment IDE software",
      "Interface definition language IDL",
      "Interstate connection ICON",
      "J",
      "List processing language LISP",
      "Logo design software",
      "Microsoft .NET Framework",
      "Microsoft Azure software",
      "Microsoft ESP SDK",
      "Microsoft Extensible Application Markup Language (XAML)",
      "Microsoft PowerShell",
      "Microsoft Visual Basic",
      "Microsoft Visual Basic for Applications VBA",
      "Microsoft Visual Basic Scripting Edition VBScript",
      "Microsoft Visual Studio",
      "MUMPS M",
      "National Instruments LabVIEW",
      "Pascal",
      "Programming language one PL/I",
      "Progress OpenEdge ABL",
      "Prolog",
      "Restructured extended executor REXX",
      "Ruby",
      "Scheme",
      "Source code migration software",
      "String oriented symbolic language SNOBOL",
      "Symantec Visual Cafe",
      "Tier generator software",
      "Verilog",
      "Web service definition language WDSL",
      "Xerces2 Java Parser",
    ],
  },
  {
    category: "Document management software",
    values: ["Adobe Systems Adobe Acrobat", "Virage VS Archive"],
  },
  {
    category: "Electronic mail software",
    values: ["IBM Notes", "Microsoft Exchange"],
  },
  {
    category: "Enterprise application integration software",
    values: [
      "Atlassian Bamboo",
      "Extensible markup language XML",
      "Extensible stylesheet language XSL",
      "IBM InfoSphere DataStage",
      "Microsoft SQL Server Integration Services SSIS",
      "Oracle Fusion Middleware",
      "Progress Sonic ESB",
      "SAP BusinessObjects Data Integrator",
      "SAP NetWeaver BW",
    ],
  },
  {
    category: "Enterprise resource planning ERP software",
    values: [
      "Microsoft Dynamics",
      "Microsoft Dynamics GP",
      "NetSuite ERP",
      "Oracle Fusion Applications",
      "Oracle Hyperion",
      "Oracle JD Edwards EnterpriseOne",
      "Oracle PeopleSoft",
      "Oracle PeopleSoft Financials",
      "SAP Business Objects",
      "SAP software",
    ],
  },
  {
    category: "Enterprise system management software",
    values: [
      "IBM Power Systems software",
      "Microsoft Systems Management Server",
    ],
  },
  {
    category: "Expert system software",
    values: ["Ansible software"],
  },
  {
    category: "File versioning software",
    values: ["Apache Subversion SVN", "Git"],
  },
  {
    category: "Financial analysis software",
    values: ["Delphi Technology", "Oracle E-Business Suite Financials"],
  },
  {
    category: "Geographic information system",
    values: [
      "ESRI ArcGIS software",
      "Geographic information system GIS software",
    ],
  },
  {
    category: "Graphical user interface development software",
    values: [
      "Basis BBx VisualPRO/5",
      "Graphical user interfaces GUI",
      "Salesforce Visualforce",
    ],
  },
  {
    category: "Graphics or photo imaging software",
    values: [
      "Adobe Systems Adobe Fireworks",
      "Adobe Systems Adobe Illustrator",
      "Adobe Systems Adobe Photoshop",
      "Corel CorelDraw Graphics Suite",
    ],
  },
  {
    category: "Human resources software",
    values: ["Human resource management software HRMS"],
  },
  {
    category: "Industrial control software",
    values: ["Supervisory control and data acquisition SCADA software"],
  },
  {
    category: "Medical software",
    values: ["Epic Systems"],
  },
  {
    category: "Metadata management software",
    values: ["CA Erwin Data Modeler"],
  },
  {
    category: "Network monitoring software",
    values: [
      "Nagios",
      "Network intrusion prevention systems NIPS",
      "Snort",
      "Wireshark",
    ],
  },
  {
    category:
      "Network security and virtual private network VPN equipment software",
    values: ["Virtual private networking VPN software"],
  },
  {
    category: "Object or component oriented development software",
    values: [
      "ABC: the AspectBench Compiler for AspectJ",
      "Advanced business application programming ABAP",
      "Apache Groovy",
      "Apache Spark",
      "C#",
      "C++",
      "Collaborative Application Markup Language CAML",
      "Common Lisp Object System CLOS",
      "E++ pattern language",
      "Eiffel",
      "Embarcadero Delphi",
      "Greatis Object Inspector",
      "jQuery",
      "Jupyter Notebook",
      "Microsoft ActiveX",
      "Microsoft Visual Basic.NET",
      "Microsoft Visual C# .NET",
      "Modula",
      "Oberon",
      "Objective C",
      "Objective Caml",
      "Oracle Java",
      "Perl",
      "PowerSoft PowerBuilder",
      "Python",
      "R",
      "Scala",
      "Smalltalk",
      "Swift",
    ],
  },
  {
    category: "Object oriented data base management software",
    values: ["Hibernate ORM", "Microsoft Visual FoxPro", "PostgreSQL"],
  },
  {
    category: "Office suite software",
    values: ["Microsoft Office software"],
  },
  {
    category: "Operating system software",
    values: [
      "Bash",
      "Bourne Shell",
      "Hewlett Packard HP-UX",
      "Job control language JCL",
      "KornShell",
      "Linux",
      "Microsoft Windows",
      "Microsoft Windows Server",
      "Oracle Solaris",
      "Red Hat Enterprise Linux",
      "Shell script",
      "Ubuntu",
      "UNIX",
      "UNIX Shell",
    ],
  },
  {
    category: "Portal server software",
    values: ["Apache HTTP Server"],
  },
  {
    category: "Presentation software",
    values: ["Microsoft PowerPoint"],
  },
  {
    category: "Process mapping and design software",
    values: ["Microsoft Visio"],
  },
  {
    category: "Program testing software",
    values: [
      "Debugging software",
      "Hewlett Packard LoadRunner",
      "JUnit",
      "Low-level debugger software",
      "Selenium",
      "Source code editor software",
      "Symbolic debugger software",
    ],
  },
  {
    category: "Project management software",
    values: ["Atlassian Confluence", "Microsoft Project"],
  },
  {
    category: "Requirements analysis and system architecture software",
    values: ["Unified modeling language UML"],
  },
  {
    category: "Spreadsheet software",
    values: ["Microsoft Excel"],
  },
  {
    category: "Storage networking software",
    values: ["Amazon Simple Storage Service S3"],
  },
  {
    category: "Transaction security and virus protection software",
    values: ["McAfee"],
  },
  {
    category: "Transaction server software",
    values: ["Customer information control system CICS"],
  },
  {
    category: "Web page creation and editing software",
    values: [
      "Adobe Systems Adobe Dreamweaver",
      "CoffeeCup The HTML Editor",
      "Microsoft FrontPage",
    ],
  },
  {
    category: "Web platform development software",
    values: [
      "Adobe Systems Adobe ColdFusion",
      "Adobe Systems Adobe Flex",
      "AJAX",
      "Apache Struts",
      "Apache Tomcat",
      "Backbone.js",
      "Cascading style sheets CSS",
      "Django",
      "Drupal",
      "Dynamic hypertext markup language DHTML",
      "Enterprise JavaBeans",
      "Ext JS",
      "Extensible hypertext markup language XHTML",
      "Google Angular",
      "Hypertext markup language HTML",
      "JavaScript",
      "JavaScript Object Notation JSON",
      "LAMP Stack",
      "Microsoft Active Server Pages ASP",
      "Microsoft ASP.NET",
      "Microsoft ASP.NET Core MVC",
      "Microsoft Silverlight",
      "Node.js",
      "Oracle JavaServer Pages JSP",
      "PHP",
      "Progress WebSpeed Workshop",
      "React",
      "Ruby on Rails",
      "Spring Framework",
    ],
  },
  {
    category: "Word processing software",
    values: ["Microsoft Word"],
  },
];

export default skillData;
