import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Body({children, style}) {
  return <View style={[styles.content, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 15,
  },
});
