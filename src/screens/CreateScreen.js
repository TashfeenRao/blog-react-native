import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);
  return (
    <View>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        style={styles.input}
      />
      <Button
        title='Add Blog Post'
        onPress={() => {
          addBlogPost(title, content, () => navigation.navigate('Index'));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    margin: 5,
    marginBottom: 15,
  },
  label: {
    margin: 5,
    fontSize: 20,
    marginVertical: 10,
  },
});
export default CreateScreen;
