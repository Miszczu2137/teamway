import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const BreadcrumbsLayout = () => (
  <Stack alignItems="center" direction="row" justifyContent="space-between" padding={3} spacing={2}>
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Dashboard
      </Link>
      <Link underline="hover" color="inherit" href="/">
        Psychologies
      </Link>
      <Typography color="text.primary">Test</Typography>
    </Breadcrumbs>
  </Stack>
);

export default BreadcrumbsLayout;
