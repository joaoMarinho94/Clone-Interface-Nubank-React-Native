import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from '~/components/header'
import Tabs from '~/components/tabs'
import Menu from '~/components/menu'

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

export default function Main() {
  return (
    <Container>
      <Header/>

      <Content>

        <Menu/>

        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666"/>
            <Icon name="visibility" size={28} color="#666"/>
          </CardHeader>

          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 197.611,65</Description>
          </CardContent>

          <CardFooter>
            <Annotation>
              Transferência de R$ 20,00 recebida de Barbára Carvalho hoje às 10:00h
            </Annotation>
          </CardFooter>

        </Card>
      </Content>

      <Tabs/>
    </Container>
  );
}
