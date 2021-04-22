import React, { useContext, useState } from 'react';
import { Text, TextInput, Button, StyleSheet, View } from 'react-native';
import BlogContext, { Context } from '../context/BlogContext';
import InputForm from '../components/InputForm';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find((item) => item.id === id);
  return (
    <View>
      <InputForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => navigation.pop());
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
