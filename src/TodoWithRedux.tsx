import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, removeTodo} from './Redux/Reducers';

const TodoWithRedux = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  const list = useSelector((state: any) => state.todos);
  console.log(list, '===ReudxTdo');

  const HandleAddTodo = () => {
    dispatch(addTodo({text}));
    setText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List With Redux</Text>
      <TextInput
        onChangeText={e => setText(e)}
        style={styles.inputText}
        placeholder="Enter Task Here..."
      />
      <TouchableOpacity
        onPress={() => HandleAddTodo()}
        style={styles.addBtnStyle}>
        <Text style={styles.addBtnText}>ADD</Text>
      </TouchableOpacity>
      <View style={{marginTop: 10}}>
        <Text>njsdkn</Text>

        <FlatList
          data={list.lists}
          renderItem={({item, index}) => {
            console.log(item, '---flatlist');
            return (
              <View
                key={index}
                style={{
                  marginVertical: 8,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
                  {item.text}
                </Text>
                <TouchableOpacity onPress={()=>{dispatch(removeTodo({index}))}}>
                  <Text style={{fontSize: 20, color: '#000'}}>X</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      {/* {
        list.length && list?.map((e:any,index:any)=>{
          console.log(e,'====eeee');
            return(
              <View style={{marginTop:20,left:10}} key={index}>
                <Text style={{fontSize:20,fontWeight:'600',color:'#000'}}>{e.text}</Text>
              </View>
            )
          })
        } */}
    </View>
  );
};

export default TodoWithRedux;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    // width: '90%',
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    alignSelf: 'center',
  },
  inputText: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    fontSize: 15,
    fontWeight: '500',
  },
  addBtnStyle: {
    backgroundColor: 'red',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
});
