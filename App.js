import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { PageContainer, ContentContainer } from './AppStyle';

import { Header } from './src/components/Header';
import { Account } from './src/components/Account';
import { Tabs } from './src/components/Tabs';

export default function App() {
  return (
    <PageContainer >
      <StatusBar style = 'light' backgroundColor='#8B10AE'/>
      <Header />

      <ContentContainer>
        <Account/>
      </ContentContainer>

      <Tabs />
    </PageContainer>
  );
}
