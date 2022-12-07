import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';

function DownloadDetail(props) {
    const dataRedux = useSelector(state => state)
     return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={styles.view}>
        <Text style={styles.label}>PDF {props.route.params.index + 1}</Text>
        <Progress.Bar
          progress={Math.round(Object.entries(dataRedux)[props.route.params.index][1]) / 100}
          width={Dimensions.get('window').width - 50}
          color={'green'}
          height={30}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.label}>0%</Text>
        {Object.entries(dataRedux)[props.route.params.index][1] !== '0' && (
          <Text style={styles.label}>{Math.round(Object.entries(dataRedux)[props.route.params.index][1]).toString()}%</Text>
        )}
      </View>
      </View>
    </View>
  );
}
export default DownloadDetail;

const styles = StyleSheet.create({
  label: {
    color: 'black',
    fontWeight: 'bold',
  },

  view: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});
