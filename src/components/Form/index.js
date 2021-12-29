import React, {useState} from 'react';
import {
    View, 
    Text, 
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
} from 'react-native';
import styles from './style';
import ResultImc from './ResultImc';

export default function Form() {
   
const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState('Preencha o peso e a altura');
const [imc, setImc] = useState(null)
const [TextButton, setTextButton] = useState('Calcular')
const [errorMessage, setErrorMessage] = useState(null)


function imcCalculator(){
    let heighFormat = height.replace(',','.') //substitui a virgula por ponto
    return setImc((weight/(heighFormat * heighFormat)).toFixed(2))
}

function verificationImc(){
    if(imc == null){
    Vibration.vibrate();
    setErrorMessage('Campo obrigatório!!')
    }
}



function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc('Seu imc é igual: ')
        setTextButton('Calcular Novamente')
        setErrorMessage(null)

    }
    else{

        verificationImc()
        setImc(null)
        setTextButton('Calcular')
        setMessageImc('Preencha o peso e a altura')
    }
}


  return (
      <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
          <View style={styles.form}>
              <Text style={styles.formLabel}>Altura</Text>
              <Text style={styles.errorMessage}>{errorMessage}</Text>
              <TextInput style={styles.input}
              onChangeText={setHeight}
              value={height}
              style={styles.formLabel}
              placeholder='Ex: 1.75cm'
              placeholderTextColor={'#A9A9A9'}
              keyboardType='numeric' />
              <Text style={styles.formLabel}>Peso</Text>
              <Text style={styles.errorMessage}>{errorMessage}</Text>
              <TextInput style={styles.input}
                onChangeText={setWeight}
                value={weight}
                style={styles.formLabel}
                placeholder='Ex: 85.4kg'
                placeholderTextColor={'#A9A9A9'}
                keyboardType='numeric'/>
             <TouchableOpacity style={styles.buttonCalculator}
             onPress={() => {
                validationImc()
             }}>
                 <Text style={styles.textButtonCalculator}>{TextButton}</Text>
             </TouchableOpacity>
          </View>
          <ResultImc messageResultImc ={messageImc} ResultImc ={imc}  />

      </Pressable>
  );
}

