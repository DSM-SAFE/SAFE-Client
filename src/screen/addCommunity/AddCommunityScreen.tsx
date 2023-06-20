import React, {useState} from 'react';
import {TextField} from '../../components/textfield';
import {TitleImagePicker} from '../../components/imagePicker';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import {FillButton} from '../../components/button';
import {useNavigation} from '@react-navigation/native';
import {setCommunity} from '../../localDB/service/CommunityService';

const AddCommunityScreen = () => {
  const navigation = useNavigation();
  const [uri, setUri] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const addCommunity = async () => {
    await setCommunity({
      title: title,
      content: content,
      imageUri: uri,
    });
  };

  return (
    <View style={styles.safeArea}>
      <ScrollView>
        <TextField
          title="제목"
          text={title}
          placeholder="재목"
          onChangeText={setTitle}
        />
        <TitleImagePicker uri={uri} setUri={setUri} />
        <TextInput
          style={styles.textView}
          placeholder="내용"
          value={content}
          multiline={true}
          onChangeText={setContent}
        />
        <FillButton
          title="추가하기"
          backgroundColor="#8A8A8A"
          tintColor="#EEE"
          onPress={() => {
            addCommunity();
            navigation.goBack();
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 10,
  },
  textView: {
    padding: 10,
    height: 250,
    backgroundColor: '#FFF',
    borderColor: '#B3B3B3',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
});

export default AddCommunityScreen;
