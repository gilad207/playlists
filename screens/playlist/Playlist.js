import React, { useState } from 'react';
import { Container, CardItem, List, ListItem, Content, Footer, Button, Header, Item, Input, Icon, Left, Right } from 'native-base';
import HeeboText from '../../components/HeeboText'
import {DATA} from '../../assets/Data'
import SearchBar from 'react-native-material-design-searchbar';

export default function Playlist({ navigation, route }) {
  const { name } = route.params;
  const [songs, setSongs] = useState(DATA)
  const [filteredSongs, setFilteredSongs] = useState(DATA)

  const addSong = () => {
    setSongs((prev) => {
      return [...prev, { key: songs.length.toString() }];
    })
  }

  const updateFilteredList = (value) => {
    songs.filter(item => {console.log(item.key);item.key.includes(value)});
    setFilteredSongs(
      songs.filter(item => item.key.includes(value)))}

  return (
    <Container>
      {/* <Header searchBar rounded> */}
      <SearchBar
        onSearchChange={() => console.log('On Search Change')}
        height={50}
        onFocus={() => console.log('On Focus')}
        onBlur={() => console.log('On Blur')}
        placeholder={'Search...'}
        autoCorrect={false}
        padding={5}
        returnKeyType={'search'}
      />
        {/* <Item>
          <Icon name="ios-search" />
          <Input placeholder="חיפוש..." onChangeText={(value)=>updateFilteredList(value)}/>
        </Item> */}
      {/* </Header> */}
      <Content>
        <List
          dataArray={filteredSongs}
          renderRow={({ key }) =>
            <ListItem button onPress={() => navigation.navigate('Song', { name: (name + key) })}>
              <Left>
                <HeeboText>
                  {name + key}
                </HeeboText>
              </Left>
              <Right>
                <Button transparent onPress={() => alert("bla")}>
                  <Icon type="MaterialCommunityIcons" name="dots-horizontal" style={{ fontSize: 28, color: 'black' }} />
                </Button>
              </Right>
            </ListItem>} />
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
