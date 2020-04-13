import React, { Component } from 'react';
import { Text } from 'react-native';

export default function HeeboText({ children, bold, size, color }) {
  const style = bold ? { fontFamily: 'Heebo-Bold' } : { fontFamily: 'Heebo' };
  style.fontSize = size;
  style.color = color;
  
  return (
    <Text style={style}>
      {children}
    </Text>
  )
};
