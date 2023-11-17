import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../contexto/DadosContext';

export default function TelaResultado() {
  const [BD, result] = useContext(AuthContext);
  console.warn(result);

  return (
    <View>
      <Text>TelaResultado</Text>
      <Text> - {result} -</Text>
    </View>
  );
}
