import React, { useState, useEffect } from 'react';
import HeeboText from '../../components/HeeboText';
import { DATA } from '../../assets/Data'
import { Searchbar, Snackbar, Card, IconButton, FAB } from 'react-native-paper'
import { FlatList, View, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../GlobalStyles'

export default function Playlist({ navigation }) {
    const [searchValue, setSearchValue] = useState('');
    const [songs, setSongs] = useState(DATA)
    const [filteredSongs, setFilteredSongs] = useState(DATA)
    const [isSnackbarVisible, setSnackbarVisible] = useState(false);

    useEffect(() => {
        setFilteredSongs(songs
            .filter(item => item.key.includes(searchValue)))
    }, [songs]);

    const addPlaylist = () => {
        setSongs((prev) => {
            return [...prev, { key: songs.length.toString() }];
        })
    }

    const onChangeText = (value) => {
        setSearchValue(value);
        setFilteredSongs(songs
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
                data={filteredSongs}
                renderItem={({ item }) =>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Card style={styles.card}
                            onPress={() => navigation.navigate('Song', { name: item.key })}>
                            <Card.Title title={item.key} />
                        </Card>
                        <IconButton
                            icon='dots-horizontal'
                            size={40}
                            onPress={() => setSnackbarVisible(true)}
                        />
                    </View>
                } />
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={addPlaylist}
            />
            <Snackbar
                visible={isSnackbarVisible}
                onDismiss={() => { setSnackbarVisible(false) }}
                duration={1000}>
                <HeeboText>
                    הקובץ הורד
            </HeeboText>
            </Snackbar>
        </View>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 80,
        right: 0,
        bottom: 0,
    },
    card: {
        marginVertical: 10,
        marginLeft: 43,
        marginRight: 10,
        width: '80%',
        height: 70,
    },
})
