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
  Technical leader with{' '}<Typography variant="inherit" component="span" sx={{fontWeight: 700}}>13+ years of experience</Typography>{' '}in industrial software, from AR platforms deployed internationally to cloud and edge SaaS. I handle the full picture: architecture, code, infrastructure, deployment.
</Typography>

export const aboutMe = [
  {
    key: 'phoneNumber',
    icon: <CallIcon color="secondary" fontSize="medium" />,
    text: '+33 7 86 35 09 26',
    href: 'tel:+33786350926'
  },
  {
    key: 'email',
    icon: <AlternateEmailIcon color="secondary" fontSize="medium" />,
    text: 'vincent@marnier.eu',
    href: 'mailto:vincent@marnier.eu'
  },
  {
    key: 'location',
    icon: <LocationPinIcon color="secondary" fontSize="medium" />,
    text: 'Grenoble, France' // International/remote visibility (FR shows Moirans for local offers)
  },
  {
    key: 'website',
    icon: <LinkIcon color="secondary" fontSize="medium" />,
    text: 'vincent.marnier.eu',
    href: 'https://vincent.marnier.eu'
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
    "Technical Mentoring",
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

export const languages = [ { code: 'fr' as const, label: "French: Native" }, { code: 'en' as const, label: "English: Full Professional" } ];

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
    description: <>
      Founder of Augmencia, a SaaS platform for digitizing industrial field expertise.
      <ul style={{ margin: "4px 0", paddingLeft: "1.5em" }}>
        <li>Designed and built the entire platform from concept to production — AR application, cloud and edge architecture, infrastructure, security and deployment</li>
        <li>Industrialized the solution for demanding industrial environments (reliability, long runtime, constrained networks)</li>
        <li>Designed a hybrid cloud/edge architecture with tablet deployment</li>
        <li>Ensured data security and sovereignty with on-premise or cloud hosting per the company&apos;s security policy</li>
        <li>Integrated with existing systems via open API and Node-RED connectors (CMMS, ERP, SCADA, IoT)</li>
      </ul>
    </>,
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
    description: <>
      Lead dev on an IT/OT data acquisition platform for Schneider Electric&apos;s edge infrastructure.
      <ul style={{ margin: "4px 0", paddingLeft: "1.5em" }}>
        <li>Contributed to product and target architecture definition, built around Schneider&apos;s overlay on EdgeX Foundry (modular containers and plugins)</li>
        <li>Close collaboration with a US-based team</li>
        <li>Established code quality practices with a strong focus on CI, later reused by 3 other teams</li>
        <li>Mentored and coached junior developers</li>
      </ul>
    </>,
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
    description: <>
      Two engagements carried out back-to-back for Schneider Electric&apos;s R&D.
      <ul style={{ margin: "4px 0", paddingLeft: "1.5em" }}>
        <li>AI exploration: designed computer vision and AI demonstrators for Industry 4.0 use cases, validating business potential and industrialization readiness</li>
        <li>Audited then rearchitected EcoStruxure Clean-in-Place Advisor: evolved its legacy C# code base and stabilized the solution</li>
      </ul>
    </>,
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
    description: <>
      Lead dev in a 4-person team on EcoStruxure Augmented Operator Advisor, an industrial AR application deployed internationally.
      <ul style={{ margin: "4px 0", paddingLeft: "1.5em" }}>
        <li>Defined the Unity app architecture</li>
        <li>Co-designed data exchange formats with the web configurator and on-premise server</li>
        <li>Established code quality practices (reviews, standards, CI)</li>
        <li>Onboarded new team members</li>
        <li>Conducted tech watch and drove product improvements</li>
      </ul>
    </>,
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
    description: <>
      Worked on the AMIE collaborative research project (LIG, Digital Electronics Corp, AIST) exploring mobile AR for industrial maintenance.
      <ul style={{ margin: "4px 0", paddingLeft: "1.5em" }}>
        <li>Carried out the exploration and feasibility proof on Google Tango and Microsoft HoloLens (closed beta programs)</li>
        <li>Built early prototypes of immersive maintenance and training procedures</li>
        <li>Work that led to several patent filings</li>
      </ul>
    </>,
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
    description: "Built XR proof-of-concepts in Unity including an echolocation simulator, mixed reality apps, and a museum serious game where visitors play a bat using echolocation.",
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
    color: "#000000",
    description: "A widely-used AR fiducial marker library. Fixed a memory leak, resolved Windows cross-compilation issues, and added CI workflows.",
    url: 'https://github.com/AprilRobotics/apriltag',
    logoSrc: '/github.svg',
    logoSize: 98,
    drawConnector: false,
    pb: 1
  },
  {
    subTitle: "jampgame-proxy-rs",
    color: "#000000",
    description: "AI-assisted Rust port and evolution of the Jedi Academy server security proxy, addressing network vulnerabilities via module interposition, function detouring and injection.",
    url: 'https://github.com/VincentMarnier/jampgame-proxy-rs',
    logoSrc: '/github.svg',
    logoSize: 98,
    drawConnector: false
  },
]

const data: ResumeData = { titles, profile, aboutMe, keySkills, skills, languages, interests, jobs, diplomas, projectsAndContributions }
export default data
