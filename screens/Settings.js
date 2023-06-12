import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native';
import PureChart from 'react-native-pure-chart';
function Settings() {
    let sampleData = [
        {
            seriesName: 'series1',
            data: [
                { x: '2018-02-01', y: 30 },
                { x: '2018-02-02', y: 200 },
                { x: '2018-02-03', y: 170 },
                { x: '2018-02-04', y: 250 },
                { x: '2018-02-05', y: 10 }
            ],
            color: 'red'
        },
        {
            seriesName: 'series2',
            data: [
                { x: '2018-02-01', y: 20 },
                { x: '2018-02-02', y: 100 },
                { x: '2018-02-03', y: 140 },
                { x: '2018-02-04', y: 550 },
                { x: '2018-02-05', y: 40 },
                { x: '2018-02-06', y: 240 },
                { x: '2018-02-07', y: 340 },
                { x: '2018-02-08', y: 240 }
            ],
            color: 'blue'
        }
    ]
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.head}>Carbon Credit trading Screen</Text>

            <PureChart data={sampleData} type='line' height={400} />
            {/* <PureChart type={'line'}
    data={data}
    width={'100%'}
    height={200}
    customValueRenderer={(index, point) => {
      if (index % 2 === 0) return null
      return (
        <Text style={{textAlign: 'center'}}>{point.y}</Text>
      )
    }}/> */}
            <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 }}>

                <Pressable style={styles.button}>
                    <Text style={styles.text}>{"Sell"}</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>{"Buy"}</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default Settings


const styles = StyleSheet.create({
    head: {
        marginLeft: 20,
        fontSize: 29,
        fontWeight: '900',
        marginBottom: 30,
        marginTop: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
        marginBottom: 30,
        marginTop:20,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})
