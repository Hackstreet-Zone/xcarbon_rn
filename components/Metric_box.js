import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome5, AntDesign, Ionicons, Entypo } from '@expo/vector-icons';

function Metric_box({title, count}) {
    return (
        <View style={styles.m_box}>
            <Text style={styles.m_head}>{title}</Text>


            <Text style={styles.m_count}>{count}</Text>
            {/* <FontAwesome5 name="shoe-prints" size={24} color="black" style={styles.m_icon}/> */}


        </View>
    )
}

const styles = StyleSheet.create({
    m_box: {
        backgroundColor: 'white',
        height: 90,
        width: 130,
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        borderColor: 'red'
    },
    m_head: {
        fontWeight: '200',
        fontSize: 17,
    },
    m_count: {
        fontWeight: '900',
        fontSize: 25,
    },
    // m_icon:{
    //     transform: [{ rotate: '-90deg' }],
    //     marginLeft: 100,
    //     // marginTop:40
    // }
})
export default Metric_box

