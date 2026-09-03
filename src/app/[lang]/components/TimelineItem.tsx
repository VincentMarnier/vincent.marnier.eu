import { Box, Chip, Stack, Typography, useTheme } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import Badge from "./Badge";
import Link from "next/link";

export default function TimelineItem({title, subTitle, subTitleBadge, color, logoSrc, logoSize, startDate, endDate, description, pb = 2, drawConnector = true, url}: {
  title?: string,
  subTitle?: string,
  subTitleBadge?: string,
  color: string,
  logoSrc: string,
  logoSize: number,
  startDate?: string,
  endDate?: string,
  description?: string,
  pb?: number,
  drawConnector?: boolean,
  url?: string}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        breakInside: "avoid",
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
            border: `1px ${color} solid`,
            borderRadius: "50%",
            mt: 0.5,
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
              width: 4,
              flex: 1,
              bgcolor: color,
              borderRadius: 999,
              my: 0.5,
            }}
          />
        )}
      </Box>

      {/* Content */}
      <Box sx={{ pb, pt: 0.8, width: "100%" }}>
        {(title || startDate || endDate) && <Stack direction="row" sx={{alignItems: "center", justifyContent: "space-between"}}>
            <Typography component="h3" variant="h6" sx={{fontWeight: 700}}>
              {title}
            </Typography>
          {startDate && endDate && <Typography variant="caption" noWrap><time>{startDate}</time> - <time>{endDate}</time></Typography>}
        </Stack>}
        {subTitle && <Stack direction="row" sx={{alignItems: "center", gap: 1}}>
            <Typography component="h4" variant="h6">
              {subTitle}
            </Typography>
            {subTitleBadge && <Chip variant="outlined" size="small" label={subTitleBadge} /> }
          </Stack>}
        {description && <Typography color="text.secondary">
          {description}
        </Typography>}
        {url && <Box sx={{mt:1}}><Link href={url}><Badge text={url} color={theme.palette.text.primary} icon={<LinkIcon color="secondary" fontSize="medium" />} /></Link></Box>}
      </Box>
    </Box>
  );
}