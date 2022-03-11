import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoItem = ({item, pressHandler}) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
  },
});

export default TodoItem;
