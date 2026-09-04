"use client"

import Image from "next/image";
import { alpha, Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeIcon from '@mui/icons-material/Code';
import Section from './components/Section';
import Badge from './components/Badge';
import TimelineItem from './components/TimelineItem';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useLocalizedData } from "./LanguageContext";
import { LanguageCode } from "./language";

const drawerWidth = {xs: 240, md: 280};

export default function Page({ lang }: { lang?: LanguageCode }) {
  const theme = useTheme();
  const data = useLocalizedData()

  return (
    <>
      <LanguageSwitcher lang={lang} />
      <Stack direction="row" component="main" sx={{m:0, minHeight: "200vh"}}>
      <Paper
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          boxSizing: 'border-box',
          background: `linear-gradient(180deg, ${theme.palette.primary.dark} 0%, #142838 100%)`,
          color: theme.palette.primary.contrastText,
          px: 2,
          minHeight: "100%",
        }}
        square
      >
        <Box sx={{
          py: 8,
          boxDecorationBreak: "clone",
        }}>
          <Stack direction="column" sx={{gap: 2.5}}>
            <Image 
              src="/VincentMarnier.png"
              alt="Vincent Marnier"
              width={800}
              height={800}
              style={{
                width:"66%",
                height: "auto",
                borderRadius: "50%",
                border: `4px solid transparent`,
                backgroundImage: `linear-gradient(${theme.palette.primary.dark}, ${theme.palette.primary.dark}), linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.info.main})`,
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                alignSelf: "center"
              }}
            />

            <Stack direction="column" sx={{gap: 1}}>
              {data.aboutMe.map(r => <Stack key={r.key} direction="row" sx={{gap: 1, alignItems: "center"}}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  bgcolor: alpha(theme.palette.secondary.main, 0.15),
                  flexShrink: 0,
                }}>
                  {r.icon}
                </Box>
                <Typography variant="body2">{r.text}</Typography>
              </Stack>)}
            </Stack>
          </Stack>
          <Section icon={data.keySkills.icon} title={data.keySkills.title} color={theme.palette.primary.contrastText}>
            <Box>
              <Stack direction="row" sx={{gap:0.5, flexWrap: "wrap"}}>
                {data.keySkills.data.map((d, idx) => <Badge key={`keyskills-${idx}`} text={d} color={theme.palette.primary.contrastText} />)}
              </Stack>

              <Box sx={{borderLeft: `solid 1px ${alpha(theme.palette.secondary.main, 0.1)}`, ml: 1.2, pl: 2, mt: 1}}>
                {data.skills.map((t, idx) => {
                return <Box key={`skills-${idx}`} sx={{breakInside: 'avoid'}}>
                  <Section icon={t.icon} title={t.title} color={theme.palette.primary.contrastText}  mt={idx === 0 ? 0 : 1} variant="small">
                    <Stack direction="row" sx={{gap:0.5, flexWrap: "wrap", mt: 0.6}}>
                      {t.data.map((d, idx2) => <Badge key={`skills-${idx}-${idx2}`} text={d} color={theme.palette.primary.contrastText} fontSize={0.7} px={7 / 4} py={7 / 16} />)}
                    </Stack>
                  </Section>
                </Box>})}
              </Box>
            </Box>
            
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
        </Box>
      </Paper>

      {/* ****************************************** */}

      <Box sx={{
        flex: 1,
        px: 2,
        '@keyframes fadeSlide': {
          from: { opacity: 0, transform: 'translateY(8px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      }}
      >
        <Stack
          direction="column"
          sx={{
            pt: 8,
            pb: 2,
            boxDecorationBreak: "clone",
          }}
        >
          <Stack
            sx={{
              alignItems: "center",
              mb: 1,
              animation: 'fadeSlide 0.6s ease both',
            }}
          >
            <Stack direction="column" sx={{alignItems: "center", gap: 0.3}}>
              <Typography variant="h1" align="center">
                Vincent Marnier
              </Typography>
              <Box sx={{
                height: 2,
                width: "100%",
                borderRadius: 2,
                background: `linear-gradient(90deg, ${alpha(theme.palette.secondary.main, 0)} 0%, ${alpha(theme.palette.secondary.main, 0.5)} 50%, ${alpha(theme.palette.secondary.main, 0)} 100%)`,
              }} />
            </Stack>
            <Typography variant="subtitle1" component="h2" align="center" gutterBottom sx={{fontSize: '0.9rem', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'text.secondary', mt: 1}}>
              {data.titles["Main title"]}
            </Typography>
          </Stack>
          <Box sx={{animation: 'fadeSlide 0.6s ease 0.1s both'}}>
            <Section icon={PersonIcon} title={data.titles.Profile} color={theme.palette.text.primary} mt={4}>
              {data.profile}
            </Section>
          </Box>
          
          <Box sx={{animation: 'fadeSlide 0.6s ease 0.2s both'}}>
            <Section icon={BusinessCenterOutlinedIcon} title={data.titles["Professional experience"]} color={theme.palette.text.primary} mt={4}>
              {data.jobs.map((job, idx) => {
                return <TimelineItem key={`job-${idx}`} {...job} index={idx} />
              })}
            </Section>
          </Box>
          
          <Box sx={{animation: 'fadeSlide 0.6s ease 0.3s both'}}>
            <Section icon={SchoolOutlinedIcon} title={data.titles.Education} color={theme.palette.text.primary} mt={4}>
              {data.diplomas.map((diploma, idx) => {
                return <TimelineItem key={`diploma-${idx}`} {...diploma} index={idx} />
              })}
            </Section>
          </Box>
          
          <Box sx={{animation: 'fadeSlide 0.6s ease 0.4s both'}}>
            <Section icon={CodeIcon} title={data.titles["Projects & Contributions"]} color={theme.palette.text.primary} mt={4}>
              {data.projectsAndContributions.map((project, idx) => {
                return <TimelineItem key={`projects-${idx}`} {...project} index={idx} />
              })}
            </Section>
          </Box>
        </Stack>
      </Box>
    </Stack>
    </>
  );
}
