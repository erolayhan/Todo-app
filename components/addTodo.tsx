import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({submitHandler}:any) {

    const [text, setText] = useState('');
    
    const changeHandler = (val : any) =>{
        setText(val)
    }

    return(
        <View>
            <TextInput style={styles.input}
            placeholder= "Yeni Ekle"
            onChangeText={changeHandler}
            />
            <Button onPress={()=>(submitHandler(text))} color='coral' title='Ekle'/>
        </View>
    )
    
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa'
  },
});
