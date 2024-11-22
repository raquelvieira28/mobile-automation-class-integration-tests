// __tests__/InvestmentCard.test.tsx
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import InvestmentCard from '../InvestmentCard';
import { Alert } from 'react-native';

jest.spyOn(Alert, 'alert');

describe('InvestmentCard', () => {
  it('displays the correct investment information', () => {
    const { getByText } = render(
      <InvestmentCard code="MXRF11" earnings="Rendimento: R$ 0,09" amount="R$ 11,52" date="DAQUI A 2 DIAS" />
    );

    expect(getByText('MXRF11')).toBeTruthy();
    expect(getByText('Rendimento: R$ 0,09')).toBeTruthy();
    expect(getByText('R$ 11,52')).toBeTruthy();
    expect(getByText('DAQUI A 2 DIAS')).toBeTruthy();
    
  });

  it('displays alert', () => {
    //mocks
    const mockAlert = jest.fn()
    global.alert = mockAlert;


    const {getByText} = render(
      <InvestmentCard code="MXRF11" earnings="Rendimento: R$ 0,09" amount="R$ 11,52" date="DAQUI A 2 DIAS" />
    );

    const botao_mais_detalhes = getByText("Mais detalhes")

    //presiona o botão
    fireEvent((botao_mais_detalhes), 'click')

    expect(Alert.alert).toHaveBeenCalled();
  });
});
