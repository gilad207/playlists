import React, { useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import AppContainer from './routing/AppContainer';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { I18nManager } from 'react-native';

I18nManager.forceRTL(true);

const loadFonts = async (setFontReady) => {
  await Font.loadAsync({
    'Heebo': require('./assets/fonts/Heebo/Heebo-Light.ttf'),
    'Heebo-Bold': require('./assets/fonts/Heebo/Heebo-Bold.ttf'),
    'Assistant': require('./assets/fonts/Assistant/Assistant-Light.ttf'),
    'Assistant-Bold': require('./assets/fonts/Assistant/Assistant-Bold.ttf'),
    ...Ionicons.font,
  });
  setFontReady(true);
};

export default function App() {
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    loadFonts(setFontReady);
  }, []);

  return fontReady ? <AppContainer /> : <AppLoading />;
}

