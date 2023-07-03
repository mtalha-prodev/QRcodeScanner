import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();
  // const navigation = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.btn}
        onPress={() => navigation.navigate('PDF')}>
        <Text style={{fontSize: 20}}>PDF Generate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.btn}
        onPress={() => navigation.navigate('QRcode')}>
        <Text style={{fontSize: 20}}>QR Generate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.btn}
        onPress={() => navigation.navigate('QRscanner')}>
        <Text style={{fontSize: 20}}>QR Scanner</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    color: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '90%',
    height: 45,
    alignItems: 'center',
    marginVertical: 25,
    borderRadius: 20,
    backgroundColor: 'orange',
    justifyContent: 'center',
  },
});

export default Main;
