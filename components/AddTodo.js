import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';

const AddTodo = ({submitHandler}) => {
  const [text, SetText] = useState('');

  const changeHandler = val => {
    SetText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="add a task"
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="add todo"
        color="coral"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default AddTodo;
