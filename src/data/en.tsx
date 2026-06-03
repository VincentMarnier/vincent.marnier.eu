import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import LinkIcon from '@mui/icons-material/Link';
import { Typography } from '@mui/material';

export const titles = {
  "Software Architect & Tech Consultant": "Software Architect & Tech Consultant",
  "Profile": "Profile",
  "Professional experience": "Professional experience",
  "Education": "Education",
  "Projects & Contributions": "Projects & Contributions",
  "Technical Skills": "Technical Skills",
  "Languages": "Languages",
  "Interests": "Interests",
}

export const profile = <Typography>
    Software engineer with <Typography variant="inherit" component="span" sx={{fontWeight: 700}}>13+ years of experience</Typography> building  innovative industrial solutions.{" "}
    <Typography variant="inherit" component="span" sx={{fontWeight: 700}}>Founder of Augmencia</Typography>, an AR platform designed for industrial expertise capture, deployable without any technical skills.
    Proven track record at Schneider Electric <Typography variant="inherit" component="span" sx={{fontWeight: 700}}>leading products from concept to market</Typography>.
    Passionate about closing the gap between cutting-edge technology and real-world operational needs.
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

export const technicalSkills = [ "C#", "JavaScript/TypeScript", "ASP.NET", "React/Next.js", "Augmented Reality", "Unity", "Computer Vision", "Kubernetes", "Docker", "Cloud Architecture" ];

export const languages = [ "🇫🇷 French: Native", "🇬🇧 English: Full Professional" ];

export const interests = [
  "Strategy board games",
  "Science & technology (physics, space, biology)",
  "Cooking (techniques & world flavours)",
  "E-sport (French national team captain, Jedi Academy - 2009)",
]

export const jobs = [
  {
    title: "Augmencia",
    subTitle: "CTO",
    subTitleBadge: "Founder",
    description: "Built from scratch an Augmented Reality SaaS platform enabling industrial experts to digitize and share their know-how without any technical skills. Full-stack development, cloud architecture, and go-to-market strategy.",
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
    subTitle: "Software Consultant",
    subTitleBadge: "Freelance",
    description: "Designed a unified IT/OT data acquisition layer to serve as a common foundation for Schneider Electric's Edge computing projects.",
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
    description: "Audited and supported EcoStruxure™ Clean-in-Place Advisor, a quality management solution for industrial cleaning operations, ahead of its maintenance phase.",
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
    description: "Developed Proof of Concepts combining computer vision and AI for industrial use cases.",
    color: "#009e4d",
    startDate: 'Nov 2021',
    endDate: 'Dec 2022',
    logoSrc: '/se.svg',
    logoSize: 1540,
  },
  {
    title: "Schneider Electric",
    subTitle: "Lead Developer",
    subTitleBadge: "Freelance",
    description: "Led the development of EcoStruxure™ Augmented Operator Advisor, an AR solution deployed across industrial sites worldwide.",
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
    description: "Contributed to the AMIE collaborative research project, developed PoCs and demonstrators for the Innovation department, and built a 3D Augmented Reality solution (later EcoStruxure™ XR Operator Advisor) based on Google Tango tablets and Microsoft HoloLens.",
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
