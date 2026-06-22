import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import LinkIcon from '@mui/icons-material/Link';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CloudIcon from '@mui/icons-material/Cloud';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import InsightsIcon from '@mui/icons-material/Insights';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { Typography } from '@mui/material';

export const titles = {
  "Main title": "Software Architect",
  "Profile": "Profile",
  "Professional experience": "Professional experience",
  "Education": "Education",
  "Projects & Contributions": "Projects & Contributions",
  "Technical Skills": "Technical Skills",
  "Languages": "Languages",
  "Interests": "Interests",
}

export const profile = <Typography>
  Software Architect and entrepreneur, turning complex ideas into scalable industrial and cloud-based products.
  <Typography variant="inherit" component="span" sx={{fontWeight: 700}}>13+ years of experience</Typography> in the industry, including 8 years at Schneider Electric delivering large-scale IoT and Edge solutions.{" "}
  <Typography variant="inherit" component="span" sx={{fontWeight: 700}}>Founder of Augmencia</Typography>, designing and building end-to-end cloud and edge platforms, from architecture to delivery.
</Typography>

export const aboutMe = [
  {
    key: 'phoneNumber',
    icon: <CallIcon color="secondary" fontSize="medium" />,
    text: '+33 7 86 35 09 26'
  },
  {
    key: 'email',
    icon: <AlternateEmailIcon color="secondary" fontSize="medium" />,
    text: 'vincent@marnier.eu'
  },
  {
    key: 'location',
    icon: <LocationPinIcon color="secondary" fontSize="medium" />,
    text: 'Grenoble, France'
  },
  {
    key: 'website',
    icon: <LinkIcon color="secondary" fontSize="medium" />,
    text: 'https://vincent.marnier.eu'
  }
];

export const keySkills = {
  icon: ArchitectureIcon,
  title: "Core Skills",
  data: [ 
    "Software Architecture",
    "Cloud Architecture",
    "Distributed Systems",
    "Microservices",
    "Event-Driven Architecture",
    "Domain-Driven Design (DDD)",
    "Security by Design",
    "IAM",
    "Zero Trust"
  ]
}

export const skills = [{
  icon: CloudIcon,
  title: "Cloud & Platform",
  data: ["Azure", "OVHcloud", "Scaleway", "Kubernetes", "Docker", "Helm", "Infrastructure as Code (IaC)", "Secrets Management", "PKI & Certificate Management"],
}, {
  icon: SyncAltIcon,
  title: "APIs & Integration",
  data: ["API Design (REST, gRPC)", "RabbitMQ", "MQTT", "NATS", "Redis Pub/Sub"]
}, {
  icon: InsightsIcon,
  title: "Observability",
  data: ["Prometheus", "Grafana"]
}, {
  icon: StorageIcon,
  title: "Data",
  data: ["PostgreSQL", "Redis", "SQL Server", "NoSQL", "MongoDB"]
}, {
  icon: CodeIcon,
  title: "Software Development",
  data: ["ASP.NET", "React", "Next.js"]
}, {
  icon: PrecisionManufacturingIcon,
  title: "Domains",
  data: ["IoT", "Edge Computing", "Vision par Ordinateur"]
}]

export const languages = [ "🇫🇷 French: Native", "🇬🇧 English: Full Professional" ];

export const interests = [
  "Board games",
  "Science & Technology)",
  "Cooking (techniques & world cuisines)",
  "E-sport (French national team captain, Jedi Academy - 2009)",
]

export const jobs = [
  {
    title: "Augmencia",
    subTitle: "CTO",
    subTitleBadge: "Founder",
    description: "Designed and developed an Augmented Reality cloud and edge platform enabling field experts to capture and share knowledge without technical expertise. Responsible for architecture, software development, and product strategy across cloud, edge, and IoT environments.",
    color: "#FF9B82",
    startDate: 'Jan 2024',
    endDate: 'Present',
    logoSrc: '/augmencia.svg',
    logoSize: 400,
    url: "https://augmencia.com",
    pb: 2
  },
  {
    title: "Schneider Electric",
    subTitle: "Software Architect",
    subTitleBadge: "Freelance",
    description: "Designed the architecture of an IT/OT data acquisition platform. Defined architecture principles and integration strategies for distributed systems operating in edge environments.",
    color: "#009e4d",
    startDate: 'Jun 2023',
    endDate: 'Dec 2023',
    logoSrc: '/se.svg',
    logoSize: 1540,
  },
  {
    title: "Schneider Electric",
    subTitle: "Software Consultant",
    subTitleBadge: "Freelance",
    description: "Audited and advised on a business-critical industrial solution. Conducted architecture reviews and drove improvements to the existing system.",
    color: "#009e4d",
    startDate: 'Dec 2022',
    endDate: 'May 2023',
    logoSrc: '/se.svg',
    logoSize: 1540,
  },
  {
    title: "Schneider Electric",
    subTitle: "Innovation Consultant",
    subTitleBadge: "Freelance",
    description: "Developed computer vision and AI prototypes, rapidly evaluating innovative industrial solutions.",
    color: "#009e4d",
    startDate: 'Nov 2021',
    endDate: 'Dec 2022',
    logoSrc: '/se.svg',
    logoSize: 1540,
  },
  {
    title: "Schneider Electric",
    subTitle: "Lead Developer / Software Architect",
    subTitleBadge: "Freelance",
    description: "Designed and led the development of an industrial Augmented Reality solution deployed internationally. Responsible for software architecture and the evolution of a platform used in industrial environments.",
    color: "#009e4d",
    startDate: 'Jan 2017',
    endDate: 'Oct 2021',
    logoSrc: '/se.svg',
    logoSize: 1540,
  },
  {
    title: "Schneider Electric",
    subTitle: "Software Developer",
    subTitleBadge: "Freelance",
    description: "Contributed to the AMIE collaborative research project, developed PoC and demonstrators within the Innovation team, then built Augmented Reality solutions for Google Tango and Microsoft HoloLens.",
    color: "#009e4d",
    startDate: 'Sep 2013',
    endDate: 'Dec 2016',
    logoSrc: '/se.svg',
    logoSize: 1540,
  },
  {
    title: "CYBERIO",
    subTitle: "Software Developer",
    //description: "Developed an echolocation simulator and mixed reality applications leveraging device sensors.",
    color: "#83bb34",
    startDate: 'Feb 2013',
    endDate: 'Aug 2013',
    logoSrc: '/cyberio.jpg',
    logoSize: 313,
    pb: 0,
    drawConnector: false
  },
];

export const diplomas = [
  {
    title: "Master's Degree in Software Engineering",
    subTitle: "Université Joseph Fourier (Grenoble I)",
    color: "#ef4044",
    startDate: '2012',
    endDate: '2014',
    logoSrc: '/ujf.svg',
    logoSize: 370
  },
  {
    title: "Bachelor's Degree in Computer Science (ISTI)",
    subTitle: "Université de Poitiers",
    color: "#bf1b2c",
    startDate: '2009',
    endDate: '2012',
    logoSrc: '/up.svg',
    logoSize: 666,
    drawConnector: false,
    pb: 0
  },
];
  
export const projectsAndContributions = [
  {
    subTitle: "Apriltag",
    color: "black",
    description: "A widely-used AR fiducial marker library. Fixed a memory leak, resolved Windows cross-compilation issues, and added CI workflows.",
    url: 'https://github.com/AprilRobotics/apriltag',
    logoSrc: '/github.svg',
    logoSize: 98,
    drawConnector: false,
    pb: 1
  },
  {
    subTitle: "jampgame_proxy",
    color: "black",
    description: "Security hardening tool for legacy Jedi Academy game servers, addressing network vulnerabilities on aging infrastructure via proxy DLL, function detouring and injection.",
    url: 'https://github.com/VincentMarnier/jampgame_proxy',
    logoSrc: '/github.svg',
    logoSize: 98,
    drawConnector: false
  },
]
