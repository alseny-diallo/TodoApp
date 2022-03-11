import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

const App = () => {
  const [todos, setTodos] = useState([
    {title: 'to project', key: '1'},
    {title: 'learning angular', key: '2'},
    {title: 'learning reactjs', key: '3'},
    {title: 'learning react-native', key: '4'},
    {title: 'learning vuejs', key: '5'},
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => <TodoItem item={item} />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {padding: 40},
  list: {marginTop: 20},
});

export default App;
