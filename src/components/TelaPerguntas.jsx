import {View, Text, Button} from 'react-native';
import React, {useState, useContext} from 'react';
import {CheckBox} from '@rneui/base';
import {AuthContext} from '../contexto/DadosContext';

export default function TelaPerguntas(props) {
  const [BD, result] = useContext(AuthContext);
  const [pag, setPag] = useState(0);
  const [selectedIndex, setIndex] = useState(null);

  function acabou() {
    let cont = 0;
    result.forEach(item => {
      if (item != null) {
        cont++;
      }
    });
    if (cont == result.length) {
      return true;
    }
    return false;
  }

  return (
    <View>
      <Text>{BD[pag]}</Text>

      <CheckBox
        title={'Não'}
        checked={selectedIndex === 0}
        onPress={() => setIndex(0)}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
      />
      <CheckBox
        title={'Sim'}
        checked={selectedIndex === 1}
        onPress={() => setIndex(1)}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
      />

      <Button
        title="Anterior"
        onPress={() => {
          if (pag > 0) {
            result[pag] = selectedIndex;
            console.warn(result);
            setPag(pag - 1);
            setIndex(result[pag - 1]);
          }
        }}
      />

      {pag == 3 ? (
        <Button
          title="Enviar"
          onPress={() => {
            result[pag] = selectedIndex;
            let resfunc = acabou();
            if (resfunc) {
              // console.warn('Enviado');
              props.navigation.navigate('telaResultado');
            } else {
              console.warn('Preencha todos os campos');
            }
          }}
        />
      ) : (
        <Button
          title="Proximo"
          onPress={() => {
            if (pag < BD.length - 1) {
              result[pag] = selectedIndex;
              console.warn(result);
              setIndex(result[pag + 1]);
              setPag(pag + 1);
            }
          }}
        />
      )}
    </View>
  );
}
