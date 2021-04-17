import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

export default function IndexScreen({ navigation }) {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.title}
        renderItem={({ item }) => (
          <View style={styles.constainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}>
              <Text style={styles.text}>
                {item.title}
                {'   '}
                {item.id}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Feather name='trash' size={24} color='black' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name='plus' size={30} />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontSize: 20,
  },
});
