import { alpha, Box, Stack, SvgIconProps, Typography } from "@mui/material";

export default function Section({icon: Icon, title, color, mt = 8, variant="default", children}: {icon: React.ComponentType<SvgIconProps>, title: string, color: string, mt?: number, variant?: 'default'|'small', children?: React.ReactNode}) {
  const isSmall = variant === "small"
  return (
    <Stack direction="column" sx={{mt, color, gap: isSmall ? 0 : 1}}>
      <Stack direction="column" sx={{alignSelf: "flex-start", gap: isSmall ? 0.2 : 0.3}}>
        <Stack direction="row" sx={{gap: isSmall ? 0.8 : 1, alignItems: "center"}}>
          <Icon color="secondary" fontSize={isSmall ? "small" : "medium"} />
          <Typography variant={isSmall ? "body1" : "h5"} component={isSmall ? "h3" : "h2"}>{title}</Typography>
        </Stack>
        <Box sx={{
          height: 2,
          width: "100%",
          borderRadius: 2,
          background: theme => isSmall
            ? `linear-gradient(90deg, ${alpha(theme.palette.secondary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0)})`
            : `linear-gradient(90deg, ${alpha(theme.palette.secondary.main, 0.8)}, ${alpha(theme.palette.secondary.main, 0)})`,
        }} />
      </Stack>
      {children}
    </Stack>
  )
}