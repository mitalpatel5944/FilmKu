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
import CommonDownloader from '../Components/CommonDownloader';
import {DOWNLOADFIRST, DOWNLOADSECOND, DOWNLOADTHIRD} from '../Redux/Constant';

function DownloadList(props) {
  const dataRedux = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('DownloadDetail', {
            index: 0,
          });
        }}>
        <CommonDownloader
          data={dataRedux.DOWNLOADFIRST}
          index={0}
          url={'https://research.nhm.org/pdfs/10840/10840-001.pdf'}
          dispatchData={(progressPercent, index) => {
            console.log('index', index);
            if (index == 0) {
              dispatch({
                type: DOWNLOADFIRST,
                payload: progressPercent.toString(),
              });
            }
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('DownloadDetail', {
            index: 1,
          });
        }}>
        <CommonDownloader
          data={dataRedux.DOWNLOADSECOND}
          index={1}
          url={'https://research.nhm.org/pdfs/10840/10840-002.pdf'}
          dispatchData={(progressPercent, index) => {
            console.log('index', index);

            if (index == 1) {
              dispatch({
                type: DOWNLOADSECOND,
                payload: progressPercent.toString(),
              });
            }
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('DownloadDetail', {
            index: 2,
          });
        }}>
        <CommonDownloader
          data={dataRedux.DOWNLOADTHIRD}
          index={2}
          url={'https://research.nhm.org/pdfs/10840/10840-001.pdf'}
          dispatchData={(progressPercent, index) => {
            console.log('index', index);
            if (index == 2) {
              dispatch({
                type: DOWNLOADTHIRD,
                payload: progressPercent.toString(),
              });
            }
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default DownloadList;

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
