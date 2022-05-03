import React, {useEffect, useState, useContext} from 'react';
import {View, FlatList, Button} from 'react-native';
import {getPost} from '../../services';
import {Post} from '../../components/index';
import {styles} from './styles';
import {AuthContext} from '../../context/auth';
const Home = () => {
  const [post, setPost] = useState(null);
  const {removeAuth} = useContext(AuthContext);
  useEffect(() => {
    getPost()
      .then(res => {
        setPost(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const renderItem = ({item}) => <Post item={item} />;

  return (
    <View style={styles.container}>
      {post && (
        <FlatList
          horizontal
          data={post}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          style={styles.list}
        />
      )}
      <Button
        title="Go to Login"
        onPress={() => removeAuth()}
        color="#EF7B45"
      />
    </View>
  );
};
export default Home;
