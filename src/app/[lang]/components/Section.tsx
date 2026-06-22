import { alpha, Divider, Stack, SvgIconProps, Typography } from "@mui/material";

export default function Section({icon: Icon, title, color, mt = 8, variant="default", children}: {icon: React.ComponentType<SvgIconProps>, title: string, color: string, mt?: number, variant?: 'default'|'small', children?: React.ReactNode}) {
  return (
    <Stack direction="column" sx={{mt, color, gap: variant === "small" ? 0 : 1}}>
      <Stack direction="row" sx={{gap: variant === "small" ? 0.8 : 1, alignItems: "center"}}>
        <Icon color="secondary" fontSize="medium" sx={{fontSize: variant === "small" ? '1rem' : undefined}}/>
        <Typography variant={variant === "small" ? "body1" : "h5"} component={variant === "small" ? "h3" : "h2"}>{title}</Typography>
      </Stack>
      <Divider sx={{borderColor: alpha(color, 0.1)}} />
      {children}
    </Stack>
  )
}