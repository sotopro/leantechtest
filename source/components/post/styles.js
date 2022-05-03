import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: width - 20,
    height: height / 4,
    borderColor: '#ccc',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 16,
    color: '#EF7B45',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: '#212121',
  },
});
