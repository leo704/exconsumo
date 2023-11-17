import {View, Text, Button} from 'react-native';
import React from 'react';

export default function TelaLogin(props) {
  return (
    <View>
      <Text>Tela1</Text>
      <Button
        title="Começar"
        onPress={() => props.navigation.navigate('telaPerguntas')}
        color={'green'}
      />
    </View>
  );
}
