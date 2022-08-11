import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'native-base';

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({navigation}) => {
  const onGoToUserScreen = () => navigation.navigate('User');

  return (
    <View style={styles.container}>
      <Button
        size={'md'}
        variant="outline"
        colorScheme="primary"
        style={styles.button}
        onPress={onGoToUserScreen}>
        Go to User screen
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    alignSelf: 'center',
    width: '50%',
  },
});

export default Home;
