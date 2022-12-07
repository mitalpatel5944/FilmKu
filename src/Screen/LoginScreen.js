import React, {memo, useState, useEffect} from 'react';
import {StyleSheet, Text, KeyboardAvoidingView, Image} from 'react-native';
import Button from '../Components/Button';
import {theme} from '../theme';

const LoginScreen = ({navigation}) => {

function _onLoginPressed(){
  navigation.navigate('DownloadList')
}
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Button mode="contained" onPress={_onLoginPressed}>
        START
      </Button>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 25,
    marginBottom: 40,
  },
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  logo: {
    width: 128,
    height: 128,
    marginBottom: 12,
  },
});

export default memo(LoginScreen);
