import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { io } from "socket.io-client";

export default function App() {

  const [server, setServer] = useState('');
  const [socket, setSocket] = useState<any>('');
  const [modifier, setModifier] = useState<any>([]);

  const setSocketIp = () =>{
    if(server){
      setSocket(io('http://'+server+":4444"));
    }
  }

  const pressKey = (key: any) => {
    if(!socket){
      return;
    }
    if(key == 'command' || key == 'alt' || key == 'control' || key == 'shift'){
      const index: any = modifier.indexOf(key);
      if (index > -1) { // only splice array when item is found
        modifier.splice(index, 1); // 2nd parameter means remove one item only
      }else{
        let keys: any = modifier;
        keys.push(key);
        setModifier(keys);
      }
    }
    socket.emit("keyPress", {key,modifier});
  }

  const pressString = (key: any) => {
    if(!socket){
      return;
    }
    socket.emit("keyStringPress", key);
  }

  return (
    <View style={styles.container}>
      <View style={styles.keyContainer}>
      <View style={{flexDirection: 'row'}}>
        <TextInput style={{minWidth: 200, borderColor: '#000000', borderWidth: 1, padding: 5}} placeholder='Enter ip' onChangeText={setServer}></TextInput>
        <Button title='Set IP' onPress={setSocketIp}></Button>
      </View>
      <View style={{flexDirection: 'row'}}>
        <AppButton title='Esc' onPress={()=>pressKey('escape')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='F1' onPress={()=>pressKey('f1')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='F2' onPress={()=>pressKey('f2')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='F3' onPress={()=>pressKey('f3')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='F4' onPress={()=>pressKey('f4')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='F5' onPress={()=>pressKey('f5')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='F6' onPress={()=>pressKey('f6')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='F7' onPress={()=>pressKey('f7')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='F8' onPress={()=>pressKey('f8')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='F9' onPress={()=>pressKey('f9')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='F10' onPress={()=>pressKey('f10')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='F11' onPress={()=>pressKey('f11')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='F12' onPress={()=>pressKey('f12')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
      </View>
      <View style={{flexDirection: 'row'}}>
        <AppButton title='`~' onPress={()=>pressKey('`')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='1!' onPress={()=>pressKey('1')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='2@' onPress={()=>pressKey('2')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='3#' onPress={()=>pressKey('3')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='4$' onPress={()=>pressKey('4')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='5%' onPress={()=>pressKey('5')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='6^' onPress={()=>pressKey('6')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='7&' onPress={()=>pressKey('7')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='8*' onPress={()=>pressKey('8')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='9(' onPress={()=>pressKey('9')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='0)' onPress={()=>pressKey('0')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='-_' onPress={()=>pressKey('-')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='=+' onPress={()=>pressKey('=')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='backspace' onPress={()=>pressKey('backspace')} containerStyle={{minWidth: '10%', margin: 5}}></AppButton>
      </View>
      <View style={{flexDirection: 'row'}}>
        <AppButton title='tab' onPress={()=>pressKey('tab')} containerStyle={{minWidth: '10%', margin: 5}}></AppButton>
        <AppButton title='Q' onPress={()=>pressKey('q')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='W' onPress={()=>pressKey('w')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='E' onPress={()=>pressKey('e')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='R' onPress={()=>pressKey('r')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='T' onPress={()=>pressKey('t')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='Y' onPress={()=>pressKey('y')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='U' onPress={()=>pressKey('u')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='I' onPress={()=>pressKey('i')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='O' onPress={()=>pressKey('o')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='P' onPress={()=>pressKey('p')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='[{' onPress={()=>pressKey('[')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title=']}' onPress={()=>pressKey(']')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='\|' onPress={()=>pressKey('\\')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
      </View>
      <View style={{flexDirection: 'row'}}>
        <AppButton title='caps' onPress={()=>pressKey('capslock')} containerStyle={{minWidth: '10%', margin: 5}}></AppButton>
        <AppButton title='A' onPress={()=>pressKey('a')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='S' onPress={()=>pressKey('s')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='d' onPress={()=>pressKey('d')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='F' onPress={()=>pressKey('f')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='G' onPress={()=>pressKey('g')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='H' onPress={()=>pressKey('h')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='J' onPress={()=>pressKey('j')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='K' onPress={()=>pressKey('k')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='L' onPress={()=>pressKey('l')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title=';:' onPress={()=>pressKey(';')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='"' onPress={()=>pressKey('\'')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='enter' onPress={()=>pressKey('enter')} containerStyle={{minWidth: '10%', margin: 5}}></AppButton>
      </View>
      <View style={{flexDirection: 'row'}}>
        <AppButton title='sft' onPress={()=>pressKey('shift')} containerStyle={{minWidth: '10%', margin: 5}}></AppButton>
        <AppButton title='Z' onPress={()=>pressKey('z')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='X' onPress={()=>pressKey('x')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='C' onPress={()=>pressKey('c')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='V' onPress={()=>pressKey('v')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='B' onPress={()=>pressKey('b')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='N' onPress={()=>pressKey('n')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='M' onPress={()=>pressKey('m')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title=',<' onPress={()=>pressKey(',')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='.>' onPress={()=>pressKey('.')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='/?' onPress={()=>pressKey('/')} containerStyle={{minWidth: '5%', margin: 5}}></AppButton>
        <AppButton title='sft' onPress={()=>pressKey('shift')} containerStyle={{minWidth: '10%', margin: 5}}></AppButton>
      </View>
        <View style={{flexDirection: 'row'}}>
          <AppButton title='Ctrl' onPress={()=>pressKey('control')} containerStyle={{minWidth: '10%', margin: 5}}></AppButton>
          <AppButton title='Opt' onPress={()=>pressKey('alt')} containerStyle={{minWidth: '10%', margin: 5}}></AppButton>
          <AppButton title='cmd' onPress={()=>pressKey('command')} containerStyle={{minWidth: '10%', margin: 5}}></AppButton>
          <AppButton title='space' onPress={()=>pressKey('space')} containerStyle={{minWidth: '30%', margin: 5}}></AppButton>
          <AppButton title='cmd' onPress={()=>pressKey('command')} containerStyle={{minWidth: '10%', margin: 5}}></AppButton>
          <AppButton title='Opt' onPress={()=>pressKey('alt')} containerStyle={{minWidth: '10%', margin: 5}}></AppButton>
          <View>
            <AppButton title='↑' onPress={()=>pressKey('up')}></AppButton>
            <View style={{flexDirection: 'row'}}>
              <AppButton title='←' onPress={()=>pressKey('left')} containerStyle={{padding: 5}}></AppButton>
              <AppButton title='↓' onPress={()=>pressKey('down')} containerStyle={{padding: 5}}></AppButton>
              <AppButton title='→' onPress={()=>pressKey('right')} containerStyle={{padding: 5}}></AppButton>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const AppButton = ({ onPress, title, containerStyle, buttonStyle}: any) => (
  <TouchableOpacity onPress={onPress} style={{...containerStyle, ...{borderColor: '#000000', borderWidth: 1}}}>
    <Text style={{...buttonStyle, ...{textAlign: 'center'}}}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '10%'
    // justifyContent: 'center',
  },
  keyContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10
  }
});
