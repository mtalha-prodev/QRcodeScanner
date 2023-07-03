import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Alert,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('screen');
const CustomMarker = () => {
  return (
    <View style={style.marker}>
      <View style={style.top}>
        <View style={style.topLeft}></View>
        <View style={style.topRight}></View>
      </View>
      <View style={{height: 40}}></View>
      <View style={style.btm}>
        <View style={style.btmLeft}></View>
        <View style={style.btmRight}></View>
      </View>
    </View>
  );
};

const QRscanner = () => {
  const [openUrl, setOpenUrl] = useState(false);

  const navigation = useNavigation();

  const onSuccess = async e => {
    try {
      console.log(e.data);
      Alert.alert('QR Scanner', 'Please Open Url', [
        {
          text: 'cancel',
          onPress: navigation.navigate('Main'),
        },
        {
          text: 'Open',
          onPress: async () => {
            try {
              await Linking.openURL(e.data);
            } catch (error) {
              console.log(error);
            }
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <SafeAreaView>
      <QRCodeScanner
        onRead={e => onSuccess(e)}
        reactivate={true}
        reactivateTimeout={10000}
        showMarker={true}
        customMarker={<CustomMarker />}
        style={{width: 120, height: 120}}
        cameraContainerStyle={style.cont}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  cont: {
    width: 200,
    height: 200,
  },
  marker: {
    // position: 'absolute',
    width: (width + 80) / 2,
    height: (width + 80) / 2,
    justifyContent: 'space-between',
    zIndex: 999,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topLeft: {
    height: 80,
    width: 80,
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderColor: '#34EE1A',
  },
  topRight: {
    height: 80,
    width: 80,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderColor: '#34EE1A',
  },
  btmLeft: {
    height: 80,
    width: 80,
    borderLeftWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#34EE1A',
  },
  btmRight: {
    height: 80,
    width: 80,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#34EE1A',
  },
});

export default QRscanner;
