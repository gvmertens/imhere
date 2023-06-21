import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles'

export function Home() {

  function handleParticipantAdd() {
    console.log('BT clicado');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Quarta, 21 de junho de 2023
      </Text>

      <TextInput 
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor="#6B6B6B"
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}