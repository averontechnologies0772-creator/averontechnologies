export const COMPANY_INFO = {
  name: "Averon Technologies LLC",
  shortName: "Averon Technologies",
  legalName: "Averon Technologies LLC",
  domain: "averontechnologiesllc.com",
  url: "https://averontechnologiesllc.com",
  email: "info@averontechnologiesllc.com",
  tagline: "IT Staffing & Technology Talent Solutions",
  subTagline: "The Right Technology Talent. When Your Business Needs It.",
  description:
    "Averon Technologies helps organizations across the United States connect with qualified technology professionals aligned with their technical requirements, project priorities, and business objectives.",
  foundedDescription:
    "At Averon Technologies, we understand that the right people make a lasting difference in business performance. We work with organizations across the United States to deliver dependable IT staffing solutions, connecting businesses with skilled technology professionals who bring the experience, expertise, and capabilities needed to move projects forward.",
};

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Direct Client IT Staffing",
        href: "/services/it-staffing",
        description: "Direct talent matching aligned with specified business and technical expectations.",
      },
      {
        label: "Contract Staffing & Contract-to-Hire",
        href: "/services/contract-staffing",
        description: "Flexible, project-driven staffing and contract-to-hire evaluation models.",
      },
      {
        label: "Permanent Placement",
        href: "/services/permanent-placement",
        description: "Full-lifecycle technical recruitment for permanent engineering and leadership roles.",
      },
    ],
  },
  { label: "Technology Expertise", href: "/expertise" },
  { label: "For Clients", href: "/clients" },
  { label: "For Candidates", href: "/candidates" },
  { label: "Contact Us", href: "/contact" },
];

export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  href: string;
  iconName: string;
  useCases: string[];
  responsibilities: string[];
}

export const CORE_SERVICES: ServiceDetail[] = [
  {
    id: "it-staffing",
    title: "Direct Client IT Staffing",
    shortDescription:
      "Dedicated staffing support directly matching technical professionals with defined client requirements and team dynamics.",
    fullDescription:
      "Our direct client IT staffing solutions connect hiring managers and technical leadership directly with vetted technology talent. We tailor recruitment to your project architectures, delivery schedules, and operational standards.",
    href: "/services/it-staffing",
    iconName: "Briefcase",
    useCases: [
      "Scaling core engineering teams for major software milestones",
      "Addressing specialized technical gaps within active internal teams",
      "Direct communication and transparent candidate qualification",
    ],
    responsibilities: [
      "Technical requirement scoping and alignment",
      "Direct candidate qualification and resume submissions",
      "Interview coordination and feedback management",
      "Seamless onboarding coordination",
    ],
  },
  {
    id: "contract-staffing",
    title: "Contract Staffing",
    shortDescription:
      "Project-based technical staffing to satisfy critical milestone demands and temporary capacity needs.",
    fullDescription:
      "Contract staffing delivers responsive workforce flexibility, allowing organizations to bring in specialized technical skills for the exact duration of a project or technology transformation.",
    href: "/services/contract-staffing",
    iconName: "Clock",
    useCases: [
      "Targeted multi-month technology initiatives and migrations",
      "Interim capacity during peak product development phases",
      "Niche expertise requirements for defined deliverables",
    ],
    responsibilities: [
      "Swift alignment on project duration and required competencies",
      "Targeted sourcing of contract-ready professionals",
      "Ongoing administrative and engagement support",
    ],
  },
  {
    id: "contract-to-hire",
    title: "Contract-to-Hire",
    shortDescription:
      "Evaluate technical competency, team collaboration, and organizational fit during an agreed evaluation period.",
    fullDescription:
      "Contract-to-hire arrangements offer a low-risk mechanism for organizations to evaluate a technology professional's on-the-job execution before making a permanent hiring commitment.",
    href: "/services/contract-staffing",
    iconName: "UserCheck",
    useCases: [
      "Evaluating technical problem-solving on active production systems",
      "Assessing cross-functional communication and cultural alignment",
      "Mitigating hiring uncertainty for critical business initiatives",
    ],
    responsibilities: [
      "Structured contract term definition with transparent conversion criteria",
      "Periodic engagement check-ins during the contract window",
      "Smooth transition management upon mutual agreement to convert",
    ],
  },
  {
    id: "permanent-placement",
    title: "Permanent Placement",
    shortDescription:
      "Comprehensive recruitment coordination for permanent technical contributors, leads, and architects.",
    fullDescription:
      "Our permanent placement service identifies, evaluates, and presents technology professionals seeking long-term organizational impact and career alignment with your company vision.",
    href: "/services/permanent-placement",
    iconName: "Award",
    useCases: [
      "Building foundational engineering and technical architecture teams",
      "Filling senior technical leadership and key individual contributor roles",
      "Long-term workforce retention and institutional knowledge development",
    ],
    responsibilities: [
      "Rigorous role requirement definition and culture profiling",
      "Comprehensive vetting across technical depth and career stability",
      "Offer coordination and transition support",
    ],
  },
  {
    id: "specialized-recruitment",
    title: "Specialized Technical Recruitment",
    shortDescription:
      "Deep-domain recruitment across cloud architecture, security, data pipelines, infrastructure, and enterprise platforms.",
    fullDescription:
      "We focus recruitment efforts on high-demand, specialized technical disciplines where conventional generalist hiring approaches frequently struggle to identify qualified candidates.",
    href: "/expertise",
    iconName: "Layers",
    useCases: [
      "Cloud migrations and infrastructure modernization programs",
      "Complex cybersecurity remediation and governance enhancements",
      "Modern enterprise data platforms and data pipeline engineering",
    ],
    responsibilities: [
      "Domain-specific qualification criteria",
      "Understanding modern technology stacks and deployment patterns",
      "Targeted networking within specialized practitioner communities",
    ],
  },
  {
    id: "consultant-support",
    title: "Technology Consultant Support",
    shortDescription:
      "Dedicated coordination and professional communication supporting consultants and clients throughout the engagement.",
    fullDescription:
      "We maintain responsive, consistent communication between client decision-makers and deployed technical consultants, ensuring expectations remain aligned and engagements run smoothly.",
    href: "/services",
    iconName: "Headphones",
    useCases: [
      "Responsive point-of-contact for engagement operational inquiries",
      "Active retention and engagement monitoring throughout project lifecycles",
      "Professional relationship management fostering repeat engagements",
    ],
    responsibilities: [
      "Regular check-ins with client managers and technical consultants",
      "Rapid resolution of operational or administrative questions",
      "Fostering professional, collaborative long-term relationships",
    ],
  },
];

export interface TechDomain {
  id: string;
  title: string;
  summary: string;
  roles: string[];
  skills: string[];
  iconName: string;
}

export const TECH_DOMAINS: TechDomain[] = [
  {
    id: "software-development",
    title: "Software Development",
    summary:
      "Modern full-stack engineering, distributed systems, backend architectures, and enterprise application development.",
    roles: [
      "Full Stack Developers",
      "Backend Software Engineers",
      "Frontend Engineers",
      "Mobile Application Developers",
      "API & Microservices Engineers",
      "Software Architects",
    ],
    skills: ["Java", "Python", "TypeScript / JavaScript", ".NET / C#", "Golang", "React / Next.js", "Node.js", "REST / GraphQL"],
    iconName: "Code2",
  },
  {
    id: "cloud-devops",
    title: "Cloud Computing & DevOps",
    summary:
      "Cloud architecture, infrastructure as code, CI/CD pipeline automation, containerization, and site reliability.",
    roles: [
      "Cloud Solutions Architects",
      "DevOps Engineers",
      "Site Reliability Engineers (SRE)",
      "Platform Engineers",
      "Cloud Migration Specialists",
    ],
    skills: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Kubernetes", "Docker", "Terraform", "Ansible", "CI/CD Pipelines"],
    iconName: "Cloud",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    summary:
      "Information security, threat detection, identity & access management, security operations, and compliance frameworks.",
    roles: [
      "Cybersecurity Analysts",
      "Security Engineers",
      "SOC Analysts",
      "IAM Specialists",
      "Information Security Officers",
      "Cloud Security Architects",
    ],
    skills: ["SIEM / Splunk", "Identity & Access Management (IAM)", "Network Security", "Vulnerability Assessment", "SOC Operations", "NIST / SOC 2 / ISO Compliance"],
    iconName: "ShieldCheck",
  },
  {
    id: "data-analytics",
    title: "Data Engineering & Analytics",
    summary:
      "Data pipeline development, warehouse architecture, business intelligence, data modeling, and reporting solutions.",
    roles: [
      "Data Engineers",
      "Data Analysts",
      "BI Developers",
      "Database Administrators",
      "Data Warehouse Architects",
    ],
    skills: ["SQL / T-SQL", "Python", "Snowflake", "Apache Spark", "Databricks", "Power BI", "Tableau", "ETL / ELT Pipelines"],
    iconName: "Database",
  },
  {
    id: "it-infrastructure",
    title: "IT Infrastructure",
    summary:
      "Enterprise systems administration, network engineering, virtualization, datacenter management, and technical support operations.",
    roles: [
      "Network Engineers",
      "Systems Administrators",
      "Virtualization Specialists",
      "IT Infrastructure Managers",
      "Systems Support Specialists",
    ],
    skills: ["Cisco / Juniper Networking", "Windows Server", "Linux / RedHat", "VMware / Hyper-V", "Active Directory", "Storage Area Networks (SAN)"],
    iconName: "Server",
  },
  {
    id: "enterprise-technologies",
    title: "Enterprise Technologies",
    summary:
      "Enterprise resource planning (ERP), customer relationship management (CRM), IT service management (ITSM), and corporate business systems.",
    roles: [
      "ERP Consultants & Developers",
      "CRM Specialists",
      "ServiceNow Administrators",
      "Enterprise Systems Analysts",
      "Integration Specialists",
    ],
    skills: ["SAP", "Salesforce", "ServiceNow", "Workday", "Microsoft Dynamics 365", "Oracle Enterprise Applications"],
    iconName: "Building2",
  },
];

export const WORK_PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand Requirements",
    description:
      "We begin by understanding your specific technical requirements, team composition, project timelines, and operational context.",
  },
  {
    step: "02",
    title: "Identify Relevant Talent",
    description:
      "Our recruitment team sources and screens candidates whose technical capabilities, background, and availability directly match your needs.",
  },
  {
    step: "03",
    title: "Coordinate the Recruitment Process",
    description:
      "We present qualified candidate profiles, coordinate interview logistics, and maintain transparent, responsive communication throughout.",
  },
  {
    step: "04",
    title: "Support the Engagement",
    description:
      "From onboarding coordination to ongoing engagement communication, we stay actively engaged to support professional relationships.",
  },
];
