import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {logout, authState} = useContext(AuthContext);
  return (
    <View>
      <Text>AlbumsScreen</Text>
      {authState.isLoggedIn && <Button title="Logout" onPress={logout} />}
    </View>
  );
};
