import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CalculatorApp = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Erro');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Digite a expressão"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Button title="Calcular" onPress={handlePress} />
      <Text>Resultado: {result}</Text>
    </View>
  );
};

export default CalculatorApp;
