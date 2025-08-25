import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './FlashLogoStyle';

/**
 * Componente para exibir a logo do Flash.
 * A imagem deve ser colocada na pasta 'assets'.
 */
export default function FlashLogo() {
  return (
    <View style={styles.container}>
      <Image
        // ATENÇÃO: Crie uma pasta 'assets' na raiz do projeto
        // e adicione a imagem 'flash-logo.png' nela.
        source={require('../../../assets/flash-logo.png')}
        style={styles.logo}
        resizeMode="contain" // Garante que a imagem se ajuste sem distorcer.
      />
    </View>
  );
}