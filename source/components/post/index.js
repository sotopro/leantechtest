import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Post = ({item}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={() => null}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.body} numberOfLines={5}>
            {item.body}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Post;
