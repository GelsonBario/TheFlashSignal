import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

/**
 * Folha de estilos para o componente FlashContactForm.
 */
export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 8,
    marginLeft: 5,
  },
  input: {
    backgroundColor: '#333',
    color: '#FFF',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#555',
  },
  inputMultiline: {
    backgroundColor: '#333',
    color: '#FFF',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#555',
    height: 120,
    textAlignVertical: 'top', // Alinha o texto no topo para multiline.
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    width: (width * 0.8) / 2 - 10, // Calcula a largura para dois botões com espaço.
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#555',
  },
  sendButton: {
    backgroundColor: '#c00', // Vermelho para o botão de enviar.
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});