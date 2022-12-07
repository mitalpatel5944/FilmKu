import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
var RNFS = require('react-native-fs');
import * as Progress from 'react-native-progress';
import {useDispatch, useSelector} from 'react-redux';
import {DOWNLOADFIRST} from '../Redux/Constant';

function CommonDownloader(props) {
  const [progress, setProgress] = useState('0');
  const dataRedux = useSelector(state => state);
  const dispatch = useDispatch();

  function downloadFileFunction() {
    RNFS.downloadFile({
      fromUrl: props.url,
      toFile: `${RNFS.DocumentDirectoryPath}/${props.index}react-native.pdf`,
      //headers
      background: true,
      discretionary: true,
      cacheable: true,

      begin: res => {
        console.log('Response begin ===\n\n',res);
      },
      progress: res => {
        let progressPercent = (res.bytesWritten / res.contentLength) * 100; // to calculate in percentage
        props.dispatchData(progressPercent, props.index);
      },
    }).promise.then(res => {
      return RNFS.readFile(
        `${RNFS.DocumentDirectoryPath}/${props.index}react-native.pdf`,
        'base64',
      );
    });
  }

  return (
    <View style={styles.view}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.label}>PDF {props.index + 1}</Text>
        <TouchableOpacity
          onPress={() => {
            if (props.data == '0') {
              downloadFileFunction();
            } else {
              alert('File already Downloaded!');
            }
          }}
          style={{backgroundColor: 'green', padding: 10}}>
          <Text style={styles.label}>Start Download</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.pdfurl}>{props.url}</Text>
      <Progress.Bar
        progress={Math.round(props.data) / 100}
        width={Dimensions.get('window').width - 50}
        color={'green'}
        height={30}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.label}>0%</Text>
        {props.data !== '0' && (
          <Text style={styles.label}>{Math.round(props.data).toString()}%</Text>
        )}
      </View>
    </View>
  );
}
export default CommonDownloader;

const styles = StyleSheet.create({
  label: {
    color: 'black',
    fontWeight: 'bold',
  },
  pdfurl: {
    color: 'black',
  },
  view: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});
