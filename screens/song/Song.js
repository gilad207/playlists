import React from 'react';
import { Container, CardItem, Card, Content, Footer, FooterTab, Button, Header, Item, Input, Icon } from 'native-base';
import { Text } from 'react-native'

export default function Song({ route }) {
  const { name } = route.params;
  const range = Array(5).fill().map((_, i) => { return { key: i } })

  return (
    <Container>
      <Header searchBar rounded>
      </Header>
      <Content>
        <Card>
          {range.map(item =>
            <CardItem >
              <Text>
                {name + item.key}
              </Text>
            </CardItem>)}
        </Card>
      </Content>
      <Footer>
      </Footer>
    </Container>
  )
}
