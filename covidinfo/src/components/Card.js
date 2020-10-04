import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Card(props) {
    return (
        <View style={[styles.card, {backgroundColor: props.bgColor}]}>
            <Icon name="coronavirus" style={[styles.cardIcon,{color: props.color}]}/>
            <Text style={[styles.cardTitle,{color: props.color}]}>Lorem Ipsum Dolor Sit Amet</Text>
            <Text style={[styles.cardDesc,{color: props.color}]}>Eiusmod tempor incididunt ut.</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        width:150,
        height: 195,
        padding: 20,
        borderRadius: 15,
        marginRight: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 1,
    },
    cardIcon: {
        color: '#fff',
        fontSize: 30,
        marginTop: 5,
        marginBottom: 20
    },
    cardTitle: {
        minHeight:40,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 5
    },
    cardDesc: {
        minHeight:40,
        color: '#fff'
    }
})