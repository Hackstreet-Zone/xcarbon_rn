import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Metric_box from '../components/Metric_box';
// import { firebase, firestore, storage } from "./firebase";

export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor:'#f8fcff' }}>
            <Text style={styles.head}></Text>
            <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 }}>
                <Metric_box title={"step Count"} count={"7,490"} />
                <Metric_box title={"Distance"} count={"17 km"} />
            </View>
            <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30  }}>
                <Metric_box title={"Sleep"} count={"9 hours"} />
                <Metric_box title={"Exercise"} count={"7 hours"} />
            </View>
            <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30  }}>
                <Metric_box title={"Standing"} count={"3 hours"} />
                <Metric_box title={"kills"} count={"99"} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    head: {
        marginLeft: 20,
        fontSize: 29,
        fontWeight: '900',
        marginBottom: 30,
        marginTop: 20
    }})