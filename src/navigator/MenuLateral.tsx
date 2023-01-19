import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
// import {StackNavigator} from './StackNavigator';
import {
  Image,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={({navigation}) => ({
        drawerType: width >= 600 ? 'permanent' : 'front',
        headerLeft: () => (
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Icon name="grid-outline" size={30} color={'black'} />
          </TouchableOpacity>
        ),
      })}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
          }}
          style={styles.avatar}
        />
      </View>
      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{...styles.menuButton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Icon name="compass-outline" size={20} color="black" />
          <Text style={styles.menuText}> Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.menuButton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="cog-outline" size={20} color="black" />
          <Text style={styles.menuText}> Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
