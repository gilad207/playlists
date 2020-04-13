import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import {Text} from 'react-native'

export default function Home({navigation}) {
  return (
    <Container>
      
      <Content>
        <Text>
          This is Content Section
          </Text>
      </Content>
      <Footer>
        <FooterTab>
          <Button onPress={()=> navigation.navigate('Playlist')}>
            <Text>to playlist</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}
