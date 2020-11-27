import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";

import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "domates al", key: "1", status: true },
    { text: "çamaşır suyu al", key: "3", status: true },
    { text: "ekmek al", key: "2", status: false },
    { text: "çay demle", key: "4", status: false },
  ]);

const [nope, setNope] = useState([]);
  
  React.useEffect(() => {
    const fetchData = async () => {
    	const response = await axios.get('http://www.mocky.io/v2/5e9b29003300005000bf170d');
    	setNope(response.data)
    }
    
    fetchData();
  }, []);


  const pressHandler = (key: string) => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () =>
            setTodos((prevTodos) => {
              return prevTodos.filter((todo) => todo.key != key);
            }),
        },
      ],
      { cancelable: false }
    );
  };

  const toggle = (key:any) => {
    setTodos(todos.map(item => item.key===key ? {...item, status : !item.status} : item ))

  };

  const submitHandler = (text: string) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString(), status: false },
          ...prevTodos,
        ];
      });
      Keyboard.dismiss();
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <FlatList
            style={styles.list}
            data={[...todos.filter(todo => {return todo.status===false}), ...todos.filter(todo => {return todo.status===true}) ]}
            renderItem={({ item }) => (
              <TodoItem
                item={item}
                pressHandler={pressHandler}
                toggle={toggle}
              />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
    // paddingBottom:40
  },
  list: {
    marginTop: 20,
    flex: 1,
    marginBottom: 50,
  },
});
