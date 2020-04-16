import React from 'react';
import {Container, Value} from './styles';
import {Light} from '../../styles/themes/light';

export default ({value}) => {
  return (
    <Container style={Light.Dysplay}>
      <Value style={Light.DisplayValue} numberOfLines={1}>
        {value}
      </Value>
    </Container>
  );
};
