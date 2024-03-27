//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// create a component
const TodoList = () => {
  const [todo, setTodo] = useState<string>('');
  const [list, setList] = useState<any>([]);
  const [editIndex, setEditIndex] = useState<boolean | any>(null);

  const handleChangeText = (text: any) => {
    setTodo(text);
    // console.log(todo,'===todoText')
  };
  const handleAdd = async (event: any) => {
    if(!todo)return;
    if (editIndex) {
      console.log(editIndex, '--editIndexNo');
      const updatedItem = list.map((e: any) => {
        if (e.id === editIndex) {
          return {...e, text: todo};
        } else return e;
      });
      console.log(updatedItem, '==edititem');
      setList(updatedItem);
      saveStoreData(updatedItem);
      setEditIndex(null);
      setTodo('');
    } else {
      if (todo.trim() !== '') {
        const updatedItem=[...list, {text: todo, id: Date.now()}];
        //setList([...list, {text: todo, id: Date.now()}]);
        setList(updatedItem)
        saveStoreData(updatedItem);
        setTodo('');
      }
    }
  };

  const HandleDelete = (e: any) => {
    const updatedItem = list.filter((item: any) => item.id !== e.id);
    setList(updatedItem);
    saveStoreData(updatedItem);
  };

  const HandleEdit = (e: any) => {
    setTodo(e.text);
    setEditIndex(e.id);
  };

  const saveStoreData = async (updatedItem: any[]) => {
    console.log(updatedItem,'==updatedItem==')
    try {
      await AsyncStorage.setItem('myitem', JSON.stringify(updatedItem));
    } catch (err) {
      console.log(err);
    }
  };
  const getStoreData = async () => {
    try {
      const retriveData: any = await AsyncStorage.getItem('myitem');
      if (retriveData !== null) {
        setList(JSON.parse(retriveData));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStoreData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{alignSelf: 'center', fontSize: 30, color: '#000'}}>
        Todo List
      </Text>
      <TextInput
        value={todo}
        onChangeText={handleChangeText}
        style={styles.input}
        placeholder="Enter Task"
      />
      <TouchableOpacity
        onPress={handleAdd}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
          padding: 10,
          marginTop: 20,
        }}>
        <Text style={{color: '#fff', fontSize: 20}}>ADD</Text>
      </TouchableOpacity>
      <View style={styles.listContainer}>
        {list?.length > 0 &&
          list?.map((e: any) => {
            return (
              <View key={e.id} style={styles.listView}>
                <Text style={styles.listText}>{e.text}</Text>
                <View
                  style={{flexDirection: 'row', gap: 20, marginVertical: 10}}>
                  <TouchableOpacity onPress={() => HandleEdit(e)}>
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#000000',
                      }}>
                      Edit
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => HandleDelete(e)}>
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#000000',
                      }}>
                      X
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    padding: 10,
    marginVertical: 20,
    backgroundColor: '#ffffff',
    //width:'90%'
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    fontSize: 20,
    marginTop: 20,
  },
  listContainer: {
    marginTop: 20,
  },
  listText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginVertical: 10,
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

//make this component available to the app
export default TodoList;
