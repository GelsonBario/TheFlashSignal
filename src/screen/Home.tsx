import React, { useState, useEffect } from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { styles } from './Style';
import FlashLogo from '../components/FlashLogo/FlashLogo';
import FlashButton from '../components/FlashButton/FlashButton';
import FlashContactForm from '../components/FlashContactForm/ContactForm';
import SuccessMessage from '../components/SuccessMessage/SuccessMessage'; 

/**
 * Componente da tela inicial (Home).
 * Gerencia o estado para alternar entre a visualização inicial,
 * o formulário e a mensagem de sucesso.
 */
export default function Home() {
  // Estado para controlar a visibilidade do formulário.
  const [formVisible, setFormVisible] = useState(false);
  // Estado para controlar a visibilidade da mensagem de sucesso.
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Efeito que executa quando o estado 'submissionSuccess' muda para 'true'.
  useEffect(() => {
    if (submissionSuccess) {
      // Define um temporizador para voltar à tela inicial após 3 segundos.
      const timer = setTimeout(() => {
        setSubmissionSuccess(false); // Esconde a mensagem de sucesso.
      }, 3000); // 3000 milissegundos = 3 segundos.

      // Função de limpeza: cancela o temporizador se o componente for desmontado.
      return () => clearTimeout(timer);
    }
  }, [submissionSuccess]);


  // Função para exibir o formulário.
  const handlePressSignal = () => {
    setFormVisible(true);
  };

  // Função para esconder o formulário e voltar à tela inicial.
  const handleBack = () => {
    setFormVisible(false);
  };

  // Função chamada ao enviar o formulário.
  const handleFormSubmit = () => {
    setFormVisible(false); // Esconde o formulário.
    setSubmissionSuccess(true); // Mostra a mensagem de sucesso.
  };

  // Função para decidir qual componente renderizar.
  const renderContent = () => {
    if (submissionSuccess) {
      // 1. Se o formulário foi enviado com sucesso, mostra a mensagem.
      return <SuccessMessage />;
    }
    if (formVisible) {
      // 2. Se o formulário deve estar visível, mostra o formulário.
      return <FlashContactForm onBack={handleBack} onSubmit={handleFormSubmit} />;
    }
    // 3. Caso contrário, mostra a tela inicial com logo e botão.
    return (
      <>
        <FlashLogo />
        <FlashButton onPress={handlePressSignal} />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
      <View style={styles.content}>
        {renderContent()}
      </View>
    </SafeAreaView>
  );
}
