import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function Header({ navigation, title }) {

    function openMenu () {
        navigation.openDrawer();
    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <Entypo name="menu" size={28} style={styles.icon} onPress={openMenu} />
            <View style={styles.headerTitle}>
                <Image style={styles.headerImage} source={require('../assets/heart_logo.png')} />
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },

    icon: {
        position: 'absolute',
        left: 16
    },
    headerTitle: {
        flexDirection: 'row'
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
});