import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { Copyright  } from '../Copyright';

import { styles } from './styles';
import successImage from '../../assets/success.png';

interface Props {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback } : Props) {
  return (
    <View style={styles.container}>
      <Image
      source={successImage}
      style={styles.image}
      />
      <Text style={styles.title}>
        Agradecemos o feedback.
      </Text>

      <TouchableOpacity 
        onPress={onSendAnotherFeedback}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>
          Quero enviar outro feedback.
        </Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}