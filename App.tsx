import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import Introduction from './screens/introduction';
import Features from './screens/features';
import Pagination from './components/pagination';
export default function App() {
  const [Component, setComponent] = useState<Boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setComponent(false);
    }, 3000)
  }, [])
  return (
    <SafeAreaProvider>
      <PaperProvider>
          {Component ? <Introduction/> : <Features/>}
        <StatusBar/>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
