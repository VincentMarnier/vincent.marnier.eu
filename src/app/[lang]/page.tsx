"use client"

import Image from "next/image";
import { Box, Divider, Paper, Stack, Typography, useTheme } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeIcon from '@mui/icons-material/Code';
import Section from './components/Section';
import Badge from './components/Badge';
import TimelineItem from './components/TimelineItem';
import { useLocalizedData } from "./LanguageContext";

const drawerWidth = {xs: 240, md: 280};

export default function Page() {
  const theme = useTheme();
  const data = useLocalizedData()

  return (
    <Stack direction="row" component="main" sx={{m:0}}>
      <Paper
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          boxSizing: 'border-box',
          bgcolor: theme.palette.primary.dark,
          color: theme.palette.primary.contrastText,
          py: 3,
          px: {xs: 1, md: 2},
          minHeight: "200vh" // For printing
        }}
        square
      >
        <Stack direction="column" sx={{gap: 2}}>
          <Image 
            src="/VincentMarnier.png"
            alt="Vincent Marnier"
            width={800}
            height={800}
            style={{
              width:"66%",
              height: "auto",
              borderRadius: "50%",
              border: `6px ${theme.palette.secondary.main} solid`,
              alignSelf: "center"
            }}
          />

          <Stack direction="column" sx={{gap: 0.5}}>
            {data.aboutMe.map(r => <Stack key={r.key} direction="row" sx={{gap: 0.5, alignItems: "center"}}>{r.icon} <Typography>{r.text}</Typography></Stack>)}
          </Stack>
        </Stack>
        <Section icon={AccessTimeIcon} title={data.titles["Technical Skills"]} color={theme.palette.primary.contrastText}>
          <Stack direction="row" sx={{flexWrap: 'wrap', gap: 0.5}}>
            {data.technicalSkills.map((t, idx) => <Badge key={`technical-skills-${idx}`} text={t} color={theme.palette.primary.contrastText} />)}
          </Stack>
        </Section>
        <Section icon={LanguageIcon} title={data.titles.Languages} color={theme.palette.primary.contrastText}>
          <Box>
            {data.languages.map((t, idx) => <Typography key={`language-${idx}`}>{t}</Typography>)}
          </Box>
        </Section>
        <Section icon={LightbulbOutlinedIcon} title={data.titles.Interests} color={theme.palette.primary.contrastText}>
          <Box>
            {data.interests.map((t, idx) => <Stack key={`interests-${idx}`} direction="row">
              <ChevronRightIcon color="secondary" fontSize="small" sx={{mt:0.1}} />
              <Typography>{t}</Typography>
            </Stack>)}
          </Box>
        </Section>
      </Paper>

      {/* ****************************************** */}

      <Stack direction="column" sx={{flex: 1, pt: 4, px: 2}}>
        <Stack sx={{alignItems: "center"}}>
          <Typography variant="h1" align="center">
            Vincent Marnier
          </Typography>
          <Divider sx={{width: 300, my: 1}} />
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            {data.titles["Software Architect & Tech Consultant"]}
          </Typography>
        </Stack>
        
        <Section icon={BusinessCenterOutlinedIcon} title={data.titles.Profile} color={theme.palette.text.primary} mt={4}>
          {data.profile}
        </Section>
        
        <Section icon={BusinessCenterOutlinedIcon} title={data.titles["Professional experience"]} color={theme.palette.text.primary} mt={4}>
          {data.jobs.map((job, idx) => {
            return <TimelineItem key={`job-${idx}`} {...job} />
          })}
        </Section>
        
        <Section icon={SchoolOutlinedIcon} title={data.titles.Education} color={theme.palette.text.primary} mt={4}>
          {data.diplomas.map((diploma, idx) => {
            return <TimelineItem key={`diploma-${idx}`} {...diploma} />
          })}
        </Section>
        
        <Section icon={CodeIcon} title={data.titles["Projects & Contributions"]} color={theme.palette.text.primary} mt={4}>
          {data.projectsAndContributions.map((project, idx) => {
            return <TimelineItem key={`projects-${idx}`} {...project} />
          })}
        </Section>
      </Stack>
    </Stack>
  );
}
