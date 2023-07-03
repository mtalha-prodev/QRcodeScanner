import {View, Text} from 'react-native';
import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';

const QRcode = () => {
  const [msg, setMsg] = useState([
    {data: 'https://www.youtube.com/', mode: 'Official QR Code Scanner'},
  ]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <QRCode
        value={msg}
        // logo={{uri: }}
        logoSize={30}
        size={300}
        logoBackgroundColor="transparent"
      />
    </View>
  );
};

export default QRcode;
