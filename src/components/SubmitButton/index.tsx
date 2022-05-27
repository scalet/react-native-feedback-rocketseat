import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
  onSendFeedback: () => void;
}

export function SubmitButton({ isLoading, onSendFeedback, ...rest } : Props) {
  return (
    <TouchableOpacity onPress={onSendFeedback} style={styles.container}>
    {
      isLoading ?
      <ActivityIndicator        
        color={theme.colors.text_on_brand_color}
      />
      :
      <Text style={styles.title}>
        Enviar Feedback
      </Text>
    }
    </TouchableOpacity>
  );
}