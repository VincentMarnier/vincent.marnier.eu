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
    description: <>
      Fondateur d&apos;Augmencia, une plateforme SaaS de digitalisation des savoir-faire industriels.
      <ul style={{ margin: "4px 0", paddingLeft: "1.5em" }}>
        <li>Conception et développement de l&apos;ensemble de la plateforme, du concept à la mise en production : application AR, architecture cloud et edge, infrastructure, sécurité et déploiement</li>
        <li>Industrialisation de la solution pour des environnements industriels exigeants (fiabilité, longue durée, réseau contraint)</li>
        <li>Conception d&apos;une architecture hybride cloud/edge avec déploiement sur tablette</li>
        <li>Sécurité et souveraineté des données avec hébergement on-premise ou cloud selon la politique de l&apos;entreprise</li>
        <li>Intégrations aux systèmes existants via API ouverte et connecteurs Node-RED (CMMS, ERP, SCADA, IoT)</li>
      </ul>
    </>,
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
    description: <>
      Lead dev dans une équipe de 3 sur une plateforme d&apos;acquisition de données IT/OT pour l&apos;infrastructure edge de Schneider Electric.
      <ul style={{ margin: "4px 0", paddingLeft: "1.5em" }}>
        <li>Participation à la définition du produit et de la cible d&apos;architecture, autour d&apos;une surcouche Schneider à EdgeX Foundry (conteneurs et plugins modulaires)</li>
        <li>Collaboration étroite avec une équipe américaine</li>
        <li>Mise en place de pratiques de qualité avec un fort accent sur le CI, réutilisées ensuite par 3 autres équipes</li>
        <li>Formation et coaching de développeurs juniors</li>
      </ul>
    </>,
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
    description: <>
      Deux chantiers menés successivement pour la R&D de Schneider Electric.
      <ul style={{ margin: "4px 0", paddingLeft: "1.5em" }}>
        <li>Exploration IA : conception de démonstrateurs vision par ordinateur et IA pour des cas d&apos;usage Industrie 4.0, avec validation du potentiel métier et de l&apos;industrialisation</li>
        <li>Audit puis rearchitecture d&apos;EcoStruxure Clean-in-Place Advisor : évolution du code legacy C# et stabilisation de la solution</li>
      </ul>
    </>,
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
    description: <>
      Lead dev dans une équipe de 4 sur EcoStruxure Augmented Operator Advisor, une application de réalité augmentée industrielle déployée à l&apos;international.
      <ul style={{ margin: "4px 0", paddingLeft: "1.5em" }}>
        <li>Architecture de l&apos;application Unity</li>
        <li>Définition des formats d&apos;échange avec le configurateur web et le serveur on-premise</li>
        <li>Mise en place de pratiques de qualité (reviews, conventions, CI)</li>
        <li>Onboarding des nouveaux membres de l&apos;équipe</li>
        <li>Veille technologique et améliorations produit</li>
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
    subTitle: "Développeur Logiciel",
    subTitleBadge: "Freelance",
    description: <>
      Contribution au projet de recherche collaboratif AMIE (LIG, Digital Electronics Corp, AIST) sur la réalité augmentée mobile pour la maintenance industrielle.
      <ul style={{ margin: "4px 0", paddingLeft: "1.5em" }}>
        <li>Réalisation de l&apos;exploration et de la preuve de faisabilité sur Google Tango et Microsoft HoloLens (programmes beta fermés)</li>
        <li>Développement des premiers prototypes de procédures de maintenance et de formation immersives</li>
        <li>Travaux à l&apos;origine de plusieurs dépôts de brevets</li>
      </ul>
    </>,
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