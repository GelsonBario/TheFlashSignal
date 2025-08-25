import { StyleSheet } from 'react-native';

/**
 * Folha de estilos para o componente SuccessMessage.
 */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50, // Metade da largura/altura para fazer um círculo perfeito.
    backgroundColor: '#2E7D32', // Um tom de verde para sucesso.
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  iconText: {
    color: '#FFF',
    fontSize: 50,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});