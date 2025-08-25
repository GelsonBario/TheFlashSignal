import { StyleSheet } from 'react-native';

/**
 * Folha de estilos para o componente FlashButton.
 */
export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFD700', // Cor dourada, remetendo ao raio.
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 5, // Sombra para Android.
    shadowColor: '#000', // Sombra para iOS.
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
