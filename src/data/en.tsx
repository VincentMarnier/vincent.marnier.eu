import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import LinkIcon from '@mui/icons-material/Link';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CloudIcon from '@mui/icons-material/Cloud';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import CodeIcon from '@mui/icons-material/Code';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LockIcon from '@mui/icons-material/Lock';
import StorageIcon from '@mui/icons-material/Storage';
import { Typography } from '@mui/material';
import { ResumeData } from './types';

export const titles = {
  "Main title": "Lead Developer / Tech Lead",
  "Profile": "Profile",
  "Professional experience": "Professional experience",
  "Education": "Education",
  "Projects & Contributions": "Projects & Contributions",
  "Technical Skills": "Technical Skills",
  "Languages": "Languages",
  "Interests": "Interests",
}

export const profile = <Typography>
  Lead Developer and founder with <Typography variant="inherit" component="span" sx={{fontWeight: 700}}>13+ years of experience</Typography> shipping complex software — from industrial AR solutions to cloud platforms. I take full technical ownership: I define the architecture, write the code, set up the infrastructure, and ship.{" "}
  <Typography variant="inherit" component="span" sx={{fontWeight: 700}}>Founder of Augmencia</Typography>, building end-to-end cloud and edge platforms solo.
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
    text: 'Grenoble, France' // International/remote visibility (FR shows Moirans for local offers)
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
    "System Design",
    "Technical Leadership",
    "API Design",
    "CI/CD",
    "Code Review & Quality",
    "Git",
    "Agile & Scrum"
  ]
}

export const skills = [{
  icon: CodeIcon,
  title: "Languages & Frameworks",
  data: ["C#", ".NET", "ASP.NET", "TypeScript", "JavaScript", "React", "Next.js", "Node.js"],
}, {
  icon: CloudIcon,
  title: "Cloud & Infrastructure",
  data: ["Azure", "OVHcloud", "Scaleway", "Kubernetes", "Docker", "Helm", "Infrastructure as Code (IaC)", "S3", "Lambda", "Prometheus", "Grafana"],
}, {
  icon: LockIcon,
  title: "Security & Identity",
  data: ["Keycloak", "OIDC", "SAML", "OAuth"],
}, {
  icon: SyncAltIcon,
  title: "Messaging & Protocols",
  data: ["REST", "gRPC", "Protobuf", "WebRTC", "RabbitMQ", "MQTT", "NATS", "Redis Pub/Sub"],
}, {
  icon: StorageIcon,
  title: "Databases",
  data: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Redis", "SQLite"],
}, {
  icon: EngineeringIcon,
  title: "Tooling & Quality",
  data: ["GitHub Actions", "Jenkins", "SonarQube", "NUnit", "Jest"],
}, {
  icon: PrecisionManufacturingIcon,
  title: "Domains",
  data: ["Cloud", "IoT", "Edge Computing", "Augmented Reality", "Computer Vision"],
}]

export const languages = [ "🇫🇷 French: Native", "🇬🇧 English: Full Professional" ];

export const interests = [
  "Board games",
  "Science & Technology",
  "Cooking (techniques & world cuisines)",
  "E-sport (French national team captain, Jedi Academy - 2009)",
]

export const jobs = [
  {
    title: "Augmencia",
    subTitle: "Founder",
    subTitleBadge: "Founder",
    description: "Built Augmencia's AR cloud and edge platform from scratch — architecture, development, infrastructure, and deployment. Full technical ownership of a production system serving field experts across multiple industries.",
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
    subTitle: "Lead Developer",
    subTitleBadge: "Freelance",
    description: "Led the design and development of an IT/OT data acquisition platform. Defined technical direction, integration strategies, and delivered a distributed system for edge environments.",
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
    description: "Innovations, architecture reviews, and technical improvements across industrial solutions.",
    color: "#009e4d",
    startDate: 'Nov 2021',
    endDate: 'May 2023',
    logoSrc: '/se.svg',
    logoSize: 1540,
  },
  {
    title: "Schneider Electric",
    subTitle: "Lead Developer",
    subTitleBadge: "Freelance",
    description: "Led the development of an industrial AR solution deployed internationally. Owned technical decisions, platform evolution, and delivery of a system used in production across multiple countries.",
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

const data: ResumeData = { titles, profile, aboutMe, keySkills, skills, languages, interests, jobs, diplomas, projectsAndContributions }
export default data
