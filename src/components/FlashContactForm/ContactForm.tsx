import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './ContactFormStyle';

// Define as propriedades que o componente pode receber.
interface FlashContactFormProps {
  onBack: () => void; // Função para o botão "Voltar".
  onSubmit: () => void; // NOVA: Função para o botão "Enviar".
}

/**
 * Componente de formulário para coletar dados de contato.
 * @param {FlashContactFormProps} props - Propriedades do componente.
 */
export default function FlashContactForm({ onBack, onSubmit }: FlashContactFormProps) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Sinal de Emergência</Text>
      
      {/* Campo Nome */}
      <Text style={styles.label}>Nome Completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#888"
      />

      {/* Campo Telefone */}
      <Text style={styles.label}>Telefone para Contato</Text>
      <TextInput
        style={styles.input}
        placeholder="(XX) XXXXX-XXXX"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>E-Mail</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#888"
      />

      {/* Campo Localização */}
      <Text style={styles.label}>Localização Atual</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Rua das Flores, 123"
        placeholderTextColor="#888"
      />

      {/* Campo Observações */}
      <Text style={styles.label}>Observações</Text>
      <TextInput
        style={styles.inputMultiline}
        placeholder="Descreva a emergência..."
        placeholderTextColor="#888"
        multiline
        numberOfLines={4}
      />

      {/* Botões de Ação */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.backButton]} onPress={onBack} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        {/* ATUALIZADO: Adicionado o onPress={onSubmit} */}
        <TouchableOpacity style={[styles.button, styles.sendButton]} onPress={onSubmit} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Enviar Sinal</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}