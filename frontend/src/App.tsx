import * as React from 'react';
import TopAppBar from './layout/TopAppBar';
import Breadcrumbs from './layout/Breadcrumbs';
import Main from './layout/Main';
import PsychoTest from './pages/PsychoTest';

export default function App() {
  return (
    <>
      <TopAppBar></TopAppBar>
      <Breadcrumbs></Breadcrumbs>
      <Main>
        <PsychoTest />
      </Main>
    </>
  );
}
