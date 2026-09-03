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
import { ResumeData } from './types';

export const titles = {
  "Main title": "Architecte Logiciel",
  "Profile": "Profil",
  "Professional experience": "Expérience professionnelle",
  "Education": "Formation",
  "Projects & Contributions": "Projets & Contributions",
  "Technical Skills": "Compétences techniques",
  "Languages": "Langues",
  "Interests": "Centres d'intérêt",
}

export const profile = <Typography>
  Architecte logiciel et entrepreneur, je transforme des idées complexes en produits industriels et cloud utilisables.{" "}
  <Typography variant="inherit" component="span" sx={{fontWeight: 700}}>13+ ans d’expérience</Typography> dans l’industrie, dont 8 ans chez Schneider Electric sur des solutions IoT et Edge à grande échelle.{" "}
  <Typography variant="inherit" component="span" sx={{fontWeight: 700}}>Fondateur d’Augmencia</Typography>, je conçois et développe des plateformes cloud & edge de bout en bout, de l’architecture au delivery.
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
    text: 'Moirans (38430)' // Local visibility (EN shows Grenoble for international/remote)
  },
  {
    key: 'website',
    icon: <LinkIcon color="secondary" fontSize="medium" />,
    text: 'https://vincent.marnier.eu'
  }
];

export const keySkills = {
  icon: ArchitectureIcon,
  title: "Compétences",
  data: [ 
    "Architecture Logicielle",
    "Architecture Cloud",
    "Architectures Distribuées",
    "Microservices",
    "Event-Driven Architecture",
    "Domain-Driven Design (DDD)",
    "Security by Design",
    "IAM",
    "Zero Trust",
  ]
}

export const skills = [{
  icon: CloudIcon,
  title: "Cloud & Platform",
  data: ["Azure", "OVHcloud", "Scaleway", "Kubernetes", "Docker", "Helm", "Infrastructure as Code (IaC)", "Secrets Management", "PKI & Certificate Management"],
}, {
  icon: SyncAltIcon,
  title: "APIs & Intégration",
  data: ["API Design (REST, gRPC)", "RabbitMQ", "MQTT", "NATS", "Redis Pub/Sub"]
}, {
  icon: InsightsIcon,
  title: "Observabilité",
  data: ["Prometheus", "Grafana"]
}, {
  icon: StorageIcon,
  title: "Data",
  data: ["PostgreSQL", "Redis", "SQL Server", "NoSQL", "MongoDB"]
}, {
  icon: CodeIcon,
  title: "Développement",
  data: ["ASP.NET", "React", "Next.js"]
}, {
  icon: PrecisionManufacturingIcon,
  title: "Domaines",
  data: ["IoT", "Edge Computing", "Vision par Ordinateur"]
}]

export const languages = [ "🇫🇷 Français : Natif", "🇬🇧 Anglais : Courant" ];

export const interests = [
  "Jeux de société",
  "Sciences & technologie",
  "Cuisine - techniques & saveurs du monde",
  "E-sport - capitaine de l'équipe de France (Jedi Academy, 2009)",
]

export const jobs = [
  {
    title: "Augmencia",
    subTitle: "CTO",
    subTitleBadge: "Fondateur",
    description: "Conçu et développé une plateforme cloud & edge de Réalité Augmentée permettant aux experts métier de capitaliser leurs savoir-faire sans compétences techniques. Architecture, developpement et stratégie produit (cloud, edge, IoT).",
    color: "#FF9B82",
    startDate: 'Jan 2024',
    endDate: "Aujourd'hui",
    logoSrc: '/augmencia.svg',
    logoSize: 400,
    url: "https://augmencia.com",
    pb: 2
  },
  {
    title: "Schneider Electric",
    subTitle: "Architecte Logiciel",
    subTitleBadge: "Freelance",
    description: "Conception d’une architecture de plateforme d’acquisition de données IT/OT. Définition de l’architecture et des principes d’intégration pour systèmes distribués en environnement edge.",
    color: "#009e4d",
    startDate: 'Juin 2023',
    endDate: 'Déc 2023',
    logoSrc: '/se.svg',
    logoSize: 1540,
  },
  {
    title: "Schneider Electric",
    subTitle: "Consultant Logiciels",
    subTitleBadge: "Freelance",
    description: "Audit et accompagnement d’une solution industrielle critique: Analyse d’architecture et amélioration du système existant",
    color: "#009e4d",
    startDate: 'Déc 2022',
    endDate: 'Mai 2023',
    logoSrc: '/se.svg',
    logoSize: 1540,
  },
  {
    title: "Schneider Electric",
    subTitle: "Consultant Innovation",
    subTitleBadge: "Freelance",
    description: "Développement de démonstrateurs en vision par ordinateur et intelligence artificielle pour des applications industrielles. Prototypage rapide et exploration de solutions innovantes.",
    color: "#009e4d",
    startDate: 'Nov 2021',
    endDate: 'Déc 2022',
    logoSrc: '/se.svg',
    logoSize: 1540,
  },
  {
    title: "Schneider Electric",
    subTitle: "Lead Developer / Architecte Logiciel",
    subTitleBadge: "Freelance",
    description: "Conception et pilotage du développement d’une solution de réalité augmentée industrielle déployée à l’international. Responsabilité de l’architecture logicielle et de l’évolution d’un système destiné à des environnements industriels.",
    color: "#009e4d",
    startDate: 'Jan 2017',
    endDate: 'Oct 2021',
    logoSrc: '/se.svg',
    logoSize: 1540,
  },
  {
    title: "Schneider Electric",
    subTitle: "Développeur Logiciels",
    subTitleBadge: "Freelance",
    description: "Contribution au projet de recherche collaboratif AMIE, développement de PoC et démonstrateurs au sein de l'équipe Innovation, puis création d'une solution de Réalité Augmentée sur Google Tango et Microsoft HoloLens.",
    color: "#009e4d",
    startDate: 'Sep 2013',
    endDate: 'Déc 2016',
    logoSrc: '/se.svg',
    logoSize: 1540,
  },
  {
    title: "CYBERIO",
    subTitle: "Développeur Logiciels",
    color: "#83bb34",
    startDate: 'Fév 2013',
    endDate: 'Août 2013',
    logoSrc: '/cyberio.jpg',
    logoSize: 313,
    pb: 0,
    drawConnector: false
  },
];

export const diplomas = [
  {
    title: "Master Génie Informatique",
    subTitle: "Université Joseph Fourier (Grenoble I)",
    color: "#ef4044",
    startDate: '2012',
    endDate: '2014',
    logoSrc: '/ujf.svg',
    logoSize: 370
  },
  {
    title: "Licence ISTI — Informatique",
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
    description: "Bibliothèque open source de marqueurs AR très utilisée en robotique. Correction d'une fuite mémoire, résolution de problèmes de cross-compilation Windows et ajout de workflows CI.",
    url: 'https://github.com/AprilRobotics/apriltag',
    logoSrc: '/github.svg',
    logoSize: 98,
    drawConnector: false,
    pb: 1
  },
  {
    subTitle: "jampgame_proxy",
    color: "black",
    description: "Outil de sécurisation pour serveurs Jedi Academy vieillissants, adressant les vulnérabilités réseau via un proxy DLL, du detouring et de l'injection de fonctions.",
    url: 'https://github.com/VincentMarnier/jampgame_proxy',
    logoSrc: '/github.svg',
    logoSize: 98,
    drawConnector: false
  },
]

const data: ResumeData = { titles, profile, aboutMe, keySkills, skills, languages, interests, jobs, diplomas, projectsAndContributions }
export default data