import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './FlashButtonStyle';

// Define as propriedades que o componente pode receber.
interface FlashButtonProps {
  onPress: () => void; // Uma função que não retorna nada.
}

/**
 * Componente de botão customizado "The Flash Signal".
 * @param {FlashButtonProps} props - Propriedades do componente.
 */
export default function FlashButton({ onPress }: FlashButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.text}>The Flash Signal</Text>
    </TouchableOpacity>
  );
}
