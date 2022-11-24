import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Animated } from 'react-native';

import { PageContainer, AccountContainer } from './AppStyle';

import { Header } from './src/components/Header';
import { Account } from './src/components/Account';
import { Tabs } from './src/components/Tabs';
import { Support } from './src/components/Suport';

export default function App() {
  const translateY = new Animated.Value(0);

  return (
    <GestureHandlerRootView style = {{flex: 1}}>
      <PageContainer >
        <StatusBar style = 'light' backgroundColor='#8B10AE'/>
        <Header />

        <AccountContainer> 
          <Account translateY = {translateY}/>
          <Support translateY = {translateY}/>
        </AccountContainer>

        <Tabs translateY = {translateY}/>
      </PageContainer>
    </GestureHandlerRootView>
  );
}
