import React, {useState, useEffect} from 'react';
import {Container, Buttons} from './styles';
import Button from '../components/Button/index';
import Display from '../components/Display/index';

export default function Home() {
  // Declara o Hook de State das váriáveis que serão utilizadas
  const [displayValue, setDisplayValue] = useState('0');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [nextOperation, setNextOperation] = useState(null);
  const [values, setValues] = useState(Array(2).fill(0));
  const [current, setCurrent] = useState(0);

  // Utiliza o State Hook para atualizar o valor corrente cada vez que o
  // display for atualizado
  useEffect(() => {
    // Cria um clone do array de valores utilizando o operador Spreed
    const oldValues = [...values];
    oldValues[current] = parseFloat(displayValue);
    setValues(oldValues);
  }, [displayValue]);

  const addDigit = (digit) => {
    // Verifia no valor corrente a existência do ponto
    if (digit === '.' && values[current].toString().includes('.')) return;

    // Define o novo valor corrente
    let currentValue = displayValue === '0' || clearDisplay ? '' : displayValue;

    // Inclui o valor 0 para quando a string for começar com .
    if (digit === '.') currentValue = '0';

    // atribui os valores calculados nas variáveis de estado
    setDisplayValue(currentValue + digit);
    setClearDisplay(false);
  };

  const clearMemory = () => {
    // atribui os valores padrões nas variáveis de estado
    setDisplayValue('0');
    setClearDisplay(false);
    setNextOperation(null);
    setValues(Array(2).fill(0));
    setCurrent(0);
  };

  const setOperation = (operation) => {
    if (current === 0) {
      setNextOperation(operation);
      setCurrent(1);
      setClearDisplay(true);
    } else {
      const equals = operation === '=';

      // recupera os valores do array de forma desestruturada
      let [firstValue, secondValue] = [...values];

      try {
        // Eval is Evil :)
        // firstValue = eval(`${firstValue} ${nextOperation} ${secondValue}`);

        if (nextOperation === '+') {
          firstValue += secondValue;
        } else if (nextOperation === '-') {
          firstValue -= secondValue;
        } else if (nextOperation === '*') {
          firstValue *= secondValue;
        } else if (nextOperation === '/') {
          firstValue /= secondValue;
        }
      } catch (error) {
        [firstValue] = values;
      }

      secondValue = 0;

      // utilizada a função toString para remover o filler de 0 a direita
      setDisplayValue(firstValue.toString());
      setNextOperation(equals ? null : operation);
      setCurrent(equals ? 0 : 1);
      setClearDisplay(!equals);
      setValues([firstValue, secondValue]);
    }
  };

  return (
    <Container>
      <Display value={displayValue} />
      <Buttons>
        <Button label="AC" triple onClick={clearMemory} />
        <Button label="/" operation onClick={setOperation} />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" operation onClick={setOperation} />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" operation onClick={setOperation} />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" operation onClick={setOperation} />
        <Button label="0" double onClick={addDigit} />
        <Button label="." onClick={addDigit} />
        <Button label="=" operation onClick={setOperation} />
      </Buttons>
    </Container>
  );
}
