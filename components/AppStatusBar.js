import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {useTheme} from '../hooks/useTheme';

export default function AppStatusBar() {
  const {theme, lightTheme} = useTheme();
  return (
    <StatusBar
      style={lightTheme ? 'dark' : 'light'}
      backgroundColor={theme.primary}
    />
  );
}
