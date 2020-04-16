import React from 'react';
import {Container, Label, DoubleLabel, TripleLabel} from './styles';
import {Light} from '../../styles/themes/light';

const handleLabel = (size, label, style) => {
  if (size === 3) {
    return <TripleLabel style={style}>{label}</TripleLabel>;
  }

  if (size === 2) {
    return <DoubleLabel style={style}>{label}</DoubleLabel>;
  }

  return <Label style={style}>{label}</Label>;
};

const handleSize = (double, triple) => {
  if (triple) return 3;
  if (double) return 2;
  return 1;
};

export default ({label, onClick, double, triple, operation}) => {
  return (
    <Container onPress={() => onClick(label)}>
      {handleLabel(
        handleSize(double, triple),
        label,
        operation ? Light.OrangeLabel : Light.WhiteLabel,
      )}
    </Container>
  );
};
