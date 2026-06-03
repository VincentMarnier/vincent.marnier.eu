import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import LinkIcon from '@mui/icons-material/Link';
import { Typography } from '@mui/material';

export const titles = {
  "Software Architect & Tech Consultant": "Architecte Logiciel & Consultant Tech",
  "Profile": "Profil",
  "Professional experience": "Expérience professionnelle",
  "Education": "Formation",
  "Projects & Contributions": "Projets & Contributions",
  "Technical Skills": "Compétences techniques",
  "Languages": "Langues",
  "Interests": "Centres d'intérêt",
}

export const profile = <Typography>
    Architecte logiciel et entrepreneur, je transforme des idées complexes en produits utilisables.{" "}
    <Typography variant="inherit" component="span" sx={{fontWeight: 700}}>Plus de 13 ans d'expérience</Typography> dans l'industrie, dont 8 ans chez Schneider Electric à piloter des solutions innovantes de bout en bout.{" "}
    <Typography variant="inherit" component="span" sx={{fontWeight: 700}}>Fondateur d'Augmencia</Typography>, je mets aujourd'hui cette expertise au service de missions à fort impact.
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
    text: 'Grenoble'
  },
  {
    key: 'website',
    icon: <LinkIcon color="secondary" fontSize="medium" />,
    text: 'https://vincent.marnier.eu'
  }
];

export const technicalSkills = [ "C#", "JavaScript/TypeScript", "ASP.NET", "React/Next.js", "Réalité Augmentée", "Unity", "Vision par Ordinateur", "Kubernetes", "Docker", "Architecture Cloud" ];

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
    description: "Conçu et développé de A à Z une plateforme SaaS de Réalité Augmentée permettant aux experts métier de capitaliser leurs savoir-faire sans compétences techniques. Full-stack, architecture cloud et go-to-market.",
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
    subTitle: "Consultant Logiciels",
    subTitleBadge: "Freelance",
    description: "Conception d'une couche d'acquisition de données IT/OT unifiée servant de base commune aux projets Edge de Schneider Electric.",
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
    description: "Audit et accompagnement d'EcoStruxure™ Clean-in-Place Advisor, une solution de gestion de la qualité d'opérations de nettoyage industriel.",
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
    description: "Développement de Preuves de Concept combinant vision par ordinateur et intelligence artificielle pour des cas d'usage industriels.",
    color: "#009e4d",
    startDate: 'Nov 2021',
    endDate: 'Déc 2022',
    logoSrc: '/se.svg',
    logoSize: 1540,
  },
  {
    title: "Schneider Electric",
    subTitle: "Lead Developer",
    subTitleBadge: "Freelance",
    description: "Pilotage du développement d'EcoStruxure™ Augmented Operator Advisor, une solution de Réalité Augmentée déployée sur des sites industriels à l'international.",
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
    description: "Contribution au projet de recherche collaboratif AMIE, développement de PoC et démonstrateurs pour le département Innovation, et création d'une solution de Réalité Augmentée 3D (devenue EcoStruxure™ XR Operator Advisor) basée sur les tablettes Google Tango et les lunettes Microsoft HoloLens.",
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
    description: "Bibliothèque open source de marqueurs fiduciaires AR très utilisée en robotique. Correction d'une fuite mémoire, résolution de problèmes de cross-compilation Windows et ajout de workflows CI.",
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