import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './SuccessMessageStyle';

/**
 * Componente para exibir uma mensagem de sucesso após o envio do formulário.
 * Mostra um ícone de "check" e uma mensagem de confirmação.
 */
export default function SuccessMessage() {
  return (
    <View style={styles.container}>
      {/* Símbolo de OK (check) */}
      <View style={styles.iconCircle}>
        <Text style={styles.iconText}>✓</Text>
      </View>
      
      {/* Mensagem de sucesso */}
      <Text style={styles.message}>
        Formulário enviado com sucesso!
      </Text>
    </View>
  );
}