import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Text} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {getUsers, UserState} from '@redux/users/users.redux';

interface Props {
  navigation: any;
}

const User: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector((state: RootState) => state.users);

  const renderItem = ({item}: {item: UserState}) => {
    return <Text>{item?.name}</Text>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatListContainer}
        data={users}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  flatListContainer: {
    flex: 1,
  },
  button: {
    alignSelf: 'center',
    width: '50%',
  },
});

export default User;
