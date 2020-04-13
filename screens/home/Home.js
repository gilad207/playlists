import React, { useState } from 'react';
import { Container, CardItem, Card, Content, Footer, FooterTab, Button, Header, Item, Input, Icon, Left, Right } from 'native-base';
import { Text } from 'react-native'
import HeeboText from '../../components/HeeboText';
import { PLAYLISTS } from '../../assets/Data'
import Playlist from '../playlist/Playlist';

export default function Home({ navigation }) {
  const [Playlists, setPlaylists] = useState(PLAYLISTS)

  const addPlaylist = () =>{
    setPlaylists((prev) =>{
      return [...prev, {key:Playlists.length}];
    })
  }

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="חיפוש..." />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <Content>
        {Playlists.map(item =>
          <Card>
            <CardItem button onPress={() => navigation.navigate('Playlist', { name: item.key })}>
              <Text>
                {item.key}
              </Text>
            </CardItem>
          </Card>)}
      </Content>
      <Footer>
        <Right>
          <Button onPress={() => addPlaylist()}>
            <HeeboText size={20} color={'white'}>
              הוסף
          </HeeboText>
            <Icon type="AntDesign" name="pluscircleo" style={{ fontSize: 24 }} />
          </Button>
        </Right>
      </Footer>
    </Container>
  );
}
