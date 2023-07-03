import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';
import DecumentPicker from 'react-native-document-picker';

const {width} = Dimensions.get('screen');

const Pdf = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [number, setNumber] = useState('');
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [qty, setQty] = useState('');
  const [amount, setAmount] = useState('');
  const [subtotal, setSubtotal] = useState('');
  const [tex, setTex] = useState('');
  const [total, setTotal] = useState('');
  const [duebalance, setDuebalance] = useState(0);
  const [pickImg, setPickImg] = useState(null);

  // html start
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * {margin: 0; padding: 0;}
    p,h4,td {color: #656565;}
    .header {display: flex;justify-content: space-between;}
    .header>img {width: 100px;height: 100px; }
    .detail {display: flex;border-bottom: 2px solid #E0E0E0;padding-bottom: 25px;margin-bottom: 25px;}
    .detail-p {margin-top: 6px;}
    .title-2 {font-size: large;font-weight: 700;text-align: center;color: white;}
    h4 {text-transform: capitalize;}
    .des-td {padding-top: 8px;padding-bottom: 8px;}
  </style>
  <title>Pattern</title>
</head>
<body>
  <!-- header logo -->
  <div class="header"><h2>Invoice</h2><img src=${pickImg} alt="logo" /></div>
  <!-- user detail  to send -->
  <div class="detail">
    <div style="margin-right: 60px">
      <p class="detail-p">From</p>
      <h4>stanford plumbing & heating</h4>
      <p class="detail-p">google@gmail.com</p>
      <p class="detail-p">use</p>
      <p class="detail-p">seattle wa</p>
      <p class="detail-p">7829Q</p>
      <p class="detail-p">Phone: 990-120-4560</p>
    </div>
    <div>
      <p class="detail-p">For</p>
      <h4>${name}</h4>
      <p class="detail-p">${email}</p>
      <p class="detail-p">${address}</p>
      <p class="detail-p">${city}</p>
      <p class="detail-p">Phone: ${number}</p>
    </div>
  </div>
  <!-- invoice number -->
  <table style="margin-bottom: 20px;">
    <!-- row column details -->
    <tr><td style="width:100px"><h5>Number</h5></td><td>inv02081</td></tr>
    <tr><td><h5>Date</h5></td><td>jul 11,2018</td></tr>
    <tr><td><h5>Terms</h5></td><td>5 day</td></tr>
    <tr><td><h5>Due</h5> </td><td>jul 16, 2018</td></tr>
  </table>
  <!-- invoice descriptions -->
  <table style="width:100%;border-collapse: collapse; ">
    <!-- main title -->
    <tr style="background-color: #E73E3E ; height: 35px;">
      <td style="width:70%; font-size: large;font-weight: 700; color: white;">Description</td>
      <td class="title-2"> Price</td>
      <td class="title-2" style="width: 100px;"> Qty</td>
      <td class="title-2">Amount</td>
    </tr>
    <!-- row column details -->
    <tr>
      <td class="des-td"><h4 class="td-p">${productName}</h4><p>${description}</p></td>
      <td style="text-align:center;">${price}</td>
      <td style="text-align:center;">${qty}</td>
      <td style="text-align:center;">${price * qty}</td>
    </tr>
    <!-- text include  -->
    <tr style="height: 45px; border-bottom: 2px solid #FFA2A2; border-top: 2px solid #FFA2A2;">
      <td></td>
      <td style="text-align:center; padding: 10px;"><h4 style="margin-top: 0;">Sub Total</h4><h4 style="margin: 0;">Text(12%)</h4></td>
      <td></td>
      <td style="text-align:center;"><p style="margin-top: 0;">${
        price * qty
      }</p><p style="margin: 0;">${50}</p></td>
    </tr>
    <!-- total amount -->
    <tr style="height: 45px;">
      <td></td>
      <td style="text-align:center; padding-top: 10px;"><p>Total</p><h4>Balance Due</h4></td>
      <td></td>
      <td style="text-align:center;padding-top: 10px;"><p>${
        price * qty + 50
      }</p><h4>${duebalance}</h4></td>
    </tr>
    <!-- total detail & text end  -->
  </table>
  <div style="border-top: 2px solid #E0E0E0;
  padding-top: 20px;margin-top: 20px;">
    <h4 style="margin-bottom: 5px;">Notes</h4>
    <p style="margin-top: 0;">Please pay within 20 days by Account (12236655)</p>
    <p>Thank you!</p>
  </div>
</body>

</html>`;
  // html end

  const sellectImg = async () => {
    try {
      console.log('first');
      const res = await DecumentPicker.pickSingle({
        type: [DecumentPicker.types.images],
        copyTo: 'cachesDirectory',
      });

      setPickImg(res.uri);
      setPickImg(res.uri);
    } catch (error) {
      console.log(error);
    }
  };

  const printPDF = async () => {
    const results = await RNHTMLtoPDF.convert({
      html: html,
      fileName: 'test',
      base64: true,
    });

    await RNPrint.print({filePath: results.filePath});
    // console.log(results.filePath);
    setEmail('');
    setName('');
    setPrice('');
    setProductName('');
    setDescription('');
    setNumber('');
    setQty('');
    setCity('');
    setAddress('');
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <TextInput
          style={style.inputForm}
          placeholder="Name ..."
          value={name}
          onChangeText={e => setName(e)}
        />
        <TextInput
          style={style.inputForm}
          placeholder="E-mail ..."
          value={email}
          onChangeText={e => setEmail(e)}
        />
        <TextInput
          style={style.inputForm}
          placeholder="Address ..."
          value={address}
          onChangeText={e => setAddress(e)}
        />
        <TextInput
          style={style.inputForm}
          placeholder="City ..."
          value={city}
          onChangeText={e => setCity(e)}
        />
        <TextInput
          style={style.inputForm}
          placeholder="Phone ..."
          value={number}
          keyboardType="number-pad"
          onChangeText={e => setNumber(e)}
        />
        <TextInput
          style={style.inputForm}
          placeholder="Product Name ..."
          value={productName}
          onChangeText={e => setProductName(e)}
        />
        <TextInput
          style={style.inputForm}
          placeholder="Description ..."
          value={description}
          onChangeText={e => setDescription(e)}
        />
        <TextInput
          style={style.inputForm}
          placeholder="Enter Price ..."
          value={price}
          keyboardType="number-pad"
          onChangeText={e => setPrice(e)}
        />
        <TextInput
          style={style.inputForm}
          placeholder="Quantity ..."
          value={qty}
          keyboardType="number-pad"
          onChangeText={e => setQty(e)}
        />
        <TouchableOpacity onPress={() => sellectImg()} style={style.btn}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
            Select Logo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => printPDF()} style={style.btn}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
            Prind PDF
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  inputForm: {
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    width: width - 20,
    marginVertical: 6,
    padding: 0,
    paddingVertical: 8,
    fontSize: 16,
  },
  btn: {
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 25,
    marginTop: 20,
  },
});

export default Pdf;
