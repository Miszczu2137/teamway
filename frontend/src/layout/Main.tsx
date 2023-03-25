import * as React from 'react';
import Stack from '@mui/material/Stack';

const Main = ({ children }: { children: JSX.Element }) => (
  <Stack
    alignItems="center"
    direction="row"
    justifyContent="space-between"
    paddingLeft={3}
    paddingRight={3}
    spacing={2}
  >
    {children}
  </Stack>
);

export default Main;
