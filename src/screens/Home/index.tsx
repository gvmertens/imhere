import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert, FlatList } from 'react-native';

import { Participant } from './components/Participant';

import { styles } from './styles'
import { useState } from 'react';

export function Home() {

  const [participants, setParticipants] = useState(['Guilherme']);

  function handleParticipantAdd() {
    if(participants.includes("Rosane")){
        return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome.")
    }
    setParticipants(prevState => [...prevState, 'Renata'])
    console.log('BT clicado');
  }

  function handleParticipantRemove(name: string) {

    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () =>  Alert.alert('Deletado') 
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])

    console.log(`BT remover add ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Quarta, 21 de junho de 2023
      </Text>

      <View style={styles.form}>
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

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Adicione participantes ao evento
          </Text>
        )}
      />
    </View>
  );
}