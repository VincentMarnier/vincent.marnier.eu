import { alpha, Divider, Stack, SvgIconProps, Typography } from "@mui/material";

export default function Section({icon: Icon, title, color, mt = 8, children}: {icon: React.ComponentType<SvgIconProps>, title: string, color: string, mt?: number, children?: React.ReactNode}) {
  return (
    <Stack direction="column" sx={{mt, color, gap: 1}}>
      <Stack direction="row" sx={{gap: 1}}>
        <Icon color="secondary" fontSize="medium" />
        <Typography variant='h5' component="h2">{title}</Typography>
      </Stack>
      <Divider sx={{borderColor: alpha(color, 0.1)}} />
      {children}
    </Stack>
  )
}