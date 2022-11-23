import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { PageContainer } from './AppStyle';

import { Header } from './src/components/Header';

export default function App() {
  return (
    <PageContainer >
      <StatusBar style = 'light' backgroundColor='#8B10AE'/>
      <Header />
    </PageContainer>
  );
}
