import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar({term,onTermChange,onTermSubmit}) {
    return (
        <View style={styles.backgroundStyles}>
            <AntDesign style={styles.İconStyle}
                name="search1"
                size={30}
                color="black" />
            <TextInput style={styles.İnputStyle}
                placeholder='Ara'
                autoCorrect={false}
                autoCapitalize='none'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}/>
          
        </View>
    );
}

const styles = StyleSheet.create({

    backgroundStyles: {
        backgroundColor:'lightgray',
        flexDirection: 'row',
        margin: 10,
        height: 50,
        alignItems: 'center',
        borderRadius:20,
    },
    İconStyle: {
        marginHorizontal: 15,
      
        fontSize:18,

    },
    İnputStyle: {
          flex: 1,
    },

})