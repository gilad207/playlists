import React, { useState, useEffect } from 'react';
import HeeboText from '../../components/HeeboText';
import { DATA } from '../../assets/Data'
import { Searchbar, List, Card, Title, Paragraph, Divider, FAB } from 'react-native-paper'
import { FlatList, View, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../GlobalStyles'

export default function Home({ navigation }) {
  const [searchValue, setSearchValue] = useState('');
  const [playlists, setPlaylists] = useState(DATA)
  const [filteredPlaylists, setFilteredPlaylists] = useState(DATA)

  useEffect(() => {
    setFilteredPlaylists(playlists
      .filter(item => item.key.includes(searchValue)))
  }, [playlists]);

  const addPlaylist = () => {
    setPlaylists((prev) => {
      return [...prev, { key: playlists.length.toString() }];
    })
  }

  const onChangeText = (value) => {
    setSearchValue(value);
    setFilteredPlaylists(playlists
      .filter(item => item.key.includes(value)))
  }

  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        style={GlobalStyles.searchbar}
        placeholder="חפש..."
        value={searchValue}
        onChangeText={onChangeText}
      />
      <FlatList
        data={filteredPlaylists}
        numColumns={3}
        renderItem={({ item }) =>
          <Card style={styles.card}
            onPress={() => navigation.navigate('Playlist', { name: item.key })}>
            <Card.Title title="Card Title" />
            <Card.Content>
              <HeeboText>
                {item.key} </HeeboText>
            </Card.Content>
          </Card>
        } />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={addPlaylist}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 75,
    right: 0,
    bottom: 0,
  },
  card: {
    marginVertical: 30,
    marginHorizontal: 32,
    width: 200,
    height: 200
  },
})
