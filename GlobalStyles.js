import {StatusBar, StyleSheet} from 'react-native'

export const statusBarHeight = StatusBar.currentHeight;

export const GlobalStyles = StyleSheet.create({
    searchbar:{ 
        marginTop: statusBarHeight * 2,
        marginBottom: statusBarHeight, 
        width: '90%', 
        alignSelf: 'center' 
    }
})