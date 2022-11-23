import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { PageContainer } from './AppStyle';

import { Header } from './src/components/Header';
import { Tabs } from './src/components/Tabs';

export default function App() {
  return (
    <PageContainer >
      <StatusBar style = 'light' backgroundColor='#8B10AE'/>
      <Header />
      <Tabs />
    </PageContainer>
  );
}
