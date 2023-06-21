import { Text, View, TextInput } from 'react-native';

import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Quarta, 21 de junho de 2023
      </Text>

      <TextInput style={styles.input}/>
    </View>
  );
}