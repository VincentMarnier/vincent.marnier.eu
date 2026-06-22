import * as React from 'react'
import { alpha, Paper, Stack, Typography } from "@mui/material"

export default function Badge({
  icon,
  text,
  color,
  py = 0.5,
  px = 2,
  fontSize = 0.8
}: {
  icon?: React.ReactNode,
  text: string,
  color: string,
  py?: number,
  px?: number,
  fontSize?: number
}) {
  return (
    <Paper
      variant="outlined"
      sx={{
        ':hover': {
          backgroundColor: alpha(color, 0.2),
        },
        py,
        px,
        backdropFilter: 'blur(4px)',
        transition: 'background-color 0.3s',
        borderRadius: 50,
        backgroundColor: alpha(color, 0.07),
        color: color,
        borderColor: alpha(color, 0.1),
        width: 'fit-content',
        display: "inline-block"
      }}
    >
      <Stack direction="row" sx={{alignItems: "center", gap: 1}}>
        {icon}
        <Typography
          variant="caption"
          component="p"
          sx={{ color: color, fontSize: `${fontSize}rem`, fontWeight: 700 }}
          noWrap
        >
          {text}
        </Typography>
      </Stack>
    </Paper>
  )
}