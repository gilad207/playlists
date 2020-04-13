import React,{useState} from 'react';
import { Container, CardItem, Card, Content, Footer, Button, Header, Item, Input, Icon, Left, Right} from 'native-base';
import { Text } from 'react-native'
import HeeboText from '../../components/HeeboText'

export default function Playlist({ navigation, route }) {
  const { name } = route.params;
  const range = Array(8).fill().map((_, i) => {return {key:i.toString()}})
  const [songs, setSongs] = useState(range)
 
  const addSong = () =>{
    setSongs((prev) =>{
      return [...prev, {key:songs.length}];
    })
  }

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="חיפוש..."/>
        </Item>
      </Header>
      <Content>
        {songs.map(item =>
          <Card>
            <CardItem button onPress={() => navigation.navigate('Song', { name: (name + item.key), })}>
              <Left>
              <Text>
                {name + item.key}
              </Text>
              </Left>
              <Right>
                <Button transparent onPress={()=>alert("bla")}>
                  <Icon type="MaterialCommunityIcons" name="dots-horizontal" style={{fontSize:28, color:'black'}} />
                </Button>
              </Right>
            </CardItem>
          </Card>)}
      </Content>
      <Footer>
        <Right>
          <Button onPress={() => addSong()}>
            <HeeboText size={20} color={'white'}>
              הוסף
          </HeeboText>
            <Icon type="AntDesign" name="pluscircleo" style={{ fontSize: 24 }} />
          </Button>
        </Right>
      </Footer>
    </Container>
  )
}
