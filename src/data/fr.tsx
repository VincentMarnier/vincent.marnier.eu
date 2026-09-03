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
  "Profile": "Profil",
  "Professional experience": "Expérience professionnelle",
  "Education": "Formation",
  "Projects & Contributions": "Projets & Contributions",
  "Technical Skills": "Compétences techniques",
  "Languages": "Langues",
  "Interests": "Centres d'intérêt",
}

export const profile = <Typography>
  Lead Developer et fondateur avec <Typography variant="inherit" component="span" sx={{fontWeight: 700}}>13+ ans d'expérience</Typography> en développement logiciel — de la réalité augmentée industrielle aux plateformes cloud. Je prends la responsabilité technique complète : architecture, code, infrastructure, delivery.{" "}
  <Typography variant="inherit" component="span" sx={{fontWeight: 700}}>Fondateur d'Augmencia</Typography>, je développe seul des plateformes cloud & edge de bout en bout.
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
    "Conception de Systèmes",
    "Leadership Technique",
    "Conception d'API",
    "CI/CD",
    "Revue de Code & Qualité",
    "Git",
    "Agile & Scrum"
  ]
}

export const skills = [{
  icon: CodeIcon,
  title: "Langages & Frameworks",
  data: ["C#", ".NET", "ASP.NET", "TypeScript", "JavaScript", "React", "Next.js", "Node.js"],
}, {
  icon: CloudIcon,
  title: "Cloud & Infrastructure",
  data: ["Azure", "OVHcloud", "Scaleway", "Kubernetes", "Docker", "Helm", "Infrastructure as Code (IaC)", "S3", "Lambda", "Prometheus", "Grafana"],
}, {
  icon: LockIcon,
  title: "Sécurité & Identité",
  data: ["Keycloak", "OIDC", "SAML", "OAuth"],
}, {
  icon: SyncAltIcon,
  title: "Messagerie & Protocoles",
  data: ["REST", "gRPC", "Protobuf", "WebRTC", "RabbitMQ", "MQTT", "NATS", "Redis Pub/Sub"],
}, {
  icon: StorageIcon,
  title: "Bases de données",
  data: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Redis", "SQLite"],
}, {
  icon: EngineeringIcon,
  title: "Outils & Qualité",
  data: ["GitHub Actions", "Jenkins", "SonarQube", "NUnit", "Jest"],
}, {
  icon: PrecisionManufacturingIcon,
  title: "Domaines",
  data: ["Cloud", "IoT", "Edge Computing", "Réalité Augmentée", "Vision par Ordinateur"]
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
    subTitle: "Fondateur",
    subTitleBadge: "Fondateur",
    description: "Créé la plateforme AR cloud & edge d'Augmencia de zéro : architecture, développement, infrastructure et déploiement. Responsabilité technique complète d'un système en production.",
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
    subTitle: "Lead Developer",
    subTitleBadge: "Freelance",
    description: "Pilotage de la conception et du développement d'une plateforme d'acquisition de données IT/OT. Direction technique, stratégies d'intégration et livraison d'un système distribué pour environnements edge.",
    color: "#009e4d",
    startDate: 'Juin 2023',
    endDate: 'Déc 2023',
    logoSrc: '/se.svg',
    logoSize: 1540,
  },
  {
    title: "Schneider Electric",
    subTitle: "Consultant Logiciel",
    subTitleBadge: "Freelance",
    description: "Innovations, revues d'architecture et améliorations techniques sur des solutions industrielles.",
    color: "#009e4d",
    startDate: 'Nov 2021',
    endDate: 'Mai 2023',
    logoSrc: '/se.svg',
    logoSize: 1540,
  },
  {
    title: "Schneider Electric",
    subTitle: "Lead Developer",
    subTitleBadge: "Freelance",
    description: "Pilotage du développement d'une solution de réalité augmentée industrielle déployée à l'international. Décisions techniques, évolution de la plateforme et livraison d'un système en production dans plusieurs pays.",
    color: "#009e4d",
    startDate: 'Jan 2017',
    endDate: 'Oct 2021',
    logoSrc: '/se.svg',
    logoSize: 1540,
  },
  {
    title: "Schneider Electric",
    subTitle: "Développeur Logiciel",
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
    subTitle: "Développeur Logiciel",
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