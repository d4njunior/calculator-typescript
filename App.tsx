import React, { useState } from 'react';
import { View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';
import Style from './src/styles/Style';
import { State } from './src/interfaces/State.interface';
import { useFonts } from 'expo-font';

const initialState: State = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default function App() {

  useFonts({
    'BowlbyOne': require('./assets/fonts/BowlbyOne-Regular.ttf'),
  });

  const [state, setState] = useState({...initialState})

  function addNumber(n: any) {
    const clearDisplay = state.displayValue === '0' || state.clearDisplay
    if (n === '.' && !clearDisplay && state.displayValue.includes('.')) return
    const currentValue = clearDisplay ? '' : state.displayValue
    const displayValue = currentValue + n
    setState({ ...state, displayValue, clearDisplay: false })

    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...state.values]
      values[state.current] = newValue
      setState({ ...state, displayValue, values, clearDisplay: false })
    }
  }

  function clearMemory() {
    setState({...initialState})
  }

  function addOperation(operation: string) {
    let values = [...state.values]
    const equals = operation === '='

    if (state.current === 0) {
      setState({ ...state, operation, current: 1, clearDisplay: true })
    } else {
      values[0] = eval(`${values[0]} ${state.operation} ${values[1]}`)
    }

    values[1] = 0

    setState({
      displayValue: values[0].toString(),
      operation: equals ? null : operation,
      current: equals ? 0 : 1,
      clearDisplay: true,
      values
    })
  }

  return (
    <View style={Style.container}>
      <Display value={state.displayValue}></Display>
      <View style={Style.buttons}>
      <Button label='AC' onClick={clearMemory} triple={true} />
      <Button label='/' onClick={() => addOperation('/')} operation={true} />
      <Button label='7' onClick={() => addNumber(7)} />
      <Button label='8' onClick={() => addNumber(8)} />
      <Button label='9' onClick={() => addNumber(9)} />
      <Button label='*' onClick={() => addOperation('*')} operation={true} />
      <Button label='4' onClick={() => addNumber(4)} />
      <Button label='5' onClick={() => addNumber(5)} />
      <Button label='6' onClick={() => addNumber(6)} />
      <Button label='-' onClick={() => addOperation('-')} operation={true} />
      <Button label='1' onClick={() => addNumber(1)} />
      <Button label='2' onClick={() => addNumber(2)} />
      <Button label='3' onClick={() => addNumber(3)} />
      <Button label='+' onClick={() => addOperation('+')} operation={true}  />
      <Button label='0' onClick={() => addNumber(0)} double={true} />
      <Button label='.' onClick={() => addNumber('.')} />
      <Button label='=' onClick={() => addOperation('=')} operation={true}  />
      </View>
    </View>
  );
}