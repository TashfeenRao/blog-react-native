import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import InputForm from '../components/InputForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return (
    <View>
      <InputForm
        onSubmit={(title, content) => {
          addBlogPost(title, content, () => navigation.navigate('Index'));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default CreateScreen;
