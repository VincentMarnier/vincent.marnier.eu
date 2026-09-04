import * as React from "react"
import { Box, Chip, Stack, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import Badge from "./Badge";
import Link from "next/link";

export default function TimelineItem({title, subTitle, subTitleBadge, color, logoSrc, logoSize, startDate, endDate, description, pb = 2, drawConnector = true, url, index = 0}: {
  title?: string,
  subTitle?: string,
  subTitleBadge?: string,
  color: string,
  logoSrc: string,
  logoSize: number,
  startDate?: string,
  endDate?: string,
  description?: React.ReactNode,
  pb?: number,
  drawConnector?: boolean,
  url?: string,
  index?: number}) {
  const theme = useTheme();
  
  const computedDescription = React.useMemo(() => {
    if (!description) {
      return undefined;
    }
    if (typeof description === "string") {
      return <Typography color="text.secondary">
        {description}
      </Typography>
    }
    return description;
  }, [description]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        breakInside: "avoid",
        borderRadius: 3,
        mx: -1,
        px: 1,
        bgcolor: index % 2 === 1 ? alpha(theme.palette.primary.main, 0.015) : 'transparent',
        transition: 'background-color 0.3s',
      }}
    >
      {/* Left rail */}
      <Box
        sx={{
          width: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        {/* Circle */}
        <Box
          sx={{
            position: "relative",
            width: 32,
            height: 32,
            border: `2px ${alpha(color, 0.3)} solid`,
            borderRadius: "50%",
            mt: 0.5,
            bgcolor: alpha(color, 0.05),
          }}
        >
          <img 
            src={logoSrc} 
            alt={title ?? subTitle ?? ""} 
            width={logoSize} 
            height={logoSize} 
            style={{width: "60%", height: "auto", position: "absolute", top: "20%", left: "20%"}}
          />
      </Box>

        {/* Connector */}
        {drawConnector && (
          <Box
            sx={{
              width: 3,
              flex: 1,
              borderRadius: 999,
              my: 0.5,
              background: `linear-gradient(to bottom, ${alpha(color, 0.6)}, ${alpha(color, 0.1)})`,
            }}
          />
        )}
      </Box>

      {/* Content */}
      <Box sx={{ pb, pt: 1, width: "100%" }}>
        {(title || startDate || endDate) && <Stack direction="row" sx={{alignItems: "center", justifyContent: "space-between"}}>
            <Typography component="h3" variant="h6" sx={{fontWeight: 700}}>
              {title}
            </Typography>
          {startDate && endDate && (
            <Box sx={{
              bgcolor: alpha(color, 0.08),
              borderRadius: 2,
              px: 1,
              py: 0.25,
              flexShrink: 0,
            }}>
              <Typography variant="caption" noWrap sx={{fontWeight: 500}}><time>{startDate}</time> – <time>{endDate}</time></Typography>
            </Box>
          )}
        </Stack>}
        {subTitle && <Stack direction="row" sx={{alignItems: "center", gap: 1}}>
            <Typography component="h4" variant="h6">
              {subTitle}
            </Typography>
            {subTitleBadge && <Chip variant="outlined" size="small" label={subTitleBadge} /> }
          </Stack>}
        {computedDescription}
        {url && <Box sx={{mt:1}}><Link href={url}><Badge text={url} color={theme.palette.text.primary} icon={<LinkIcon color="secondary" fontSize="medium" />} /></Link></Box>}
      </Box>
    </Box>
  );
}