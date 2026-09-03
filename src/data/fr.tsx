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
  Leader technique avec <Typography variant="inherit" component="span" sx={{fontWeight: 700}}>13+ ans d&apos;expérience</Typography> en logiciel industriel, de plateformes AR déployées à l&apos;international jusqu&apos;au SaaS cloud et edge. Je prends en charge l&apos;ensemble du sujet : architecture, code, infrastructure, déploiement.
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
    "Mentorat technique",
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
  "E-sport (Capitaine de l'équipe de France, Jedi Academy - 2009)",
]

export const jobs = [
  {
    title: "Augmencia",
    subTitle: "Fondateur",
    subTitleBadge: "Fondateur",
    description: "Fondateur d'Augmencia, une plateforme SaaS de digitalisation des savoir-faire industriels. J'ai conçu et développé l'ensemble de la plateforme cloud et edge : architecture, application AR, infrastructure, sécurité et déploiement. Elle permet aux experts terrain de capturer et transmettre leurs connaissances sur site, rationalisant la formation, la maintenance et le transfert de savoir-faire en environnement industriel.",
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
    description: "Pilotage de l'architecture et du développement d'une plateforme d'acquisition de données IT/OT pour l'infrastructure edge de Schneider Electric. Architecture cible autour d'EdgeX Foundry avec des conteneurs et plugins modulaires, jusqu'à la commercialisation.",
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
    description: "Consulting en innovation et en architecture sur deux projets industriels. J'ai conçu des démonstrateurs en vision par ordinateur et en IA pour des cas d'usage Industrie 4.0, en validant leur potentiel métier et leur capacité à être industrialisés. En parallèle, j'ai audité et refondu EcoStruxure Clean-in-Place Advisor, une solution de gestion de la qualité, en améliorant la fiabilité et les performances de son code C# avant son passage en maintenance.",
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
    description: "Pilotage de la création et de l'évolution d'EcoStruxure Augmented Operator Advisor, une plateforme de réalité augmentée industrielle déployée à l'international. Définition de l'architecture logicielle et cloud, et conduite du passage à une scalabilité horizontale, réduisant nettement les coûts d'infrastructure. Pour les utilisateurs : procédures standardisées, moins d'erreurs, onboarding plus rapide.",
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
    description: "Contribution au projet de recherche collaboratif AMIE (LIG, Digital Electronics Corp, AIST) sur la réalité augmentée mobile pour la maintenance industrielle. Développement des premiers prototypes sur Google Tango et Microsoft HoloLens (programmes beta fermés), démontrant la faisabilité de procédures de maintenance et de formation immersives. Contribution au dépôt de brevets.",
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
    description: "Développement de Proof of Concepts XR sous Unity : un simulateur d'écholocation, des applications de réalité mixte et un serious game muséal.",
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
    color: "#000000",
    description: "Bibliothèque open source de marqueurs AR très utilisée en robotique. Correction d'une fuite mémoire, résolution de problèmes de cross-compilation Windows et ajout de workflows CI.",
    url: 'https://github.com/AprilRobotics/apriltag',
    logoSrc: '/github.svg',
    logoSize: 98,
    drawConnector: false,
    pb: 1
  },
  {
    subTitle: "jampgame_proxy",
    color: "#000000",
    description: "Outil de sécurisation pour serveurs Jedi Academy vieillissants, adressant les vulnérabilités réseau via proxy DLL, function detouring et injection de fonctions.",
    url: 'https://github.com/VincentMarnier/jampgame_proxy',
    logoSrc: '/github.svg',
    logoSize: 98,
    drawConnector: false
  },
]

const data: ResumeData = { titles, profile, aboutMe, keySkills, skills, languages, interests, jobs, diplomas, projectsAndContributions }
export default data