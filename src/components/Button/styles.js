import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.TouchableHighlight``;

export const Label = styled.Text`
  height: ${Dimensions.get('window').width / 4}px;
  width: ${Dimensions.get('window').width / 4}px;
  font-size: 35px;
  padding: 20px;
  text-align: center;
  border-width: 1px;
`;

export const DoubleLabel = styled(Label)`
  width: ${(Dimensions.get('window').width / 4) * 2}px;
`;

export const TripleLabel = styled(Label)`
  width: ${(Dimensions.get('window').width / 4) * 3}px;
`;
