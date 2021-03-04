import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { Text , TouchableOpacity, Button, Image, StyleSheet} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
//const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="image" component={imageScreen} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
                <Drawer.Screen name="Mylisten" component={MylistenScreen} />
                <Drawer.Screen name="Forums" component={ForumsScreen} />
                <Drawer.Screen name="Setting" component={SettingScreen} />
                <Drawer.Screen name="Help" component={HelpScreen} />
                <Drawer.Screen name="Logout" component={LogoutScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
        
    );
}
/* const MyDrawer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'BIENVENIDO' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};*/
function imageScreen(navigation, route) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:30}}>This is a banana!!!
            </Text>
            <Image styles ={styles.imgStyle}
            source = {require('../src/images/images.png')}/>
    </View>
    );
  };

function HomeScreen(props) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style= {{fontSize:30}}>PANTALLA DE INICIO</Text>
          <Button
            title="Ir a Perfil de Ramiro"
            onPress={() =>
            props.navigation.navigate('Profile')
            }/>
      </View>
      
    );
  };
function ProfileScreen(navigation, route) {
    return <Text style={{fontSize:30}}>This is Ramiro's profile</Text>;
  };

  function MylistenScreen(navigation, route) {
    return <Text style={{fontSize:30}}>This is my listenings</Text>;
  };
  function ForumsScreen(navigation, route) {
    return <Text style={{fontSize:30}}>This is my forums</Text>;
  };
  function SettingScreen(navigation, route) {
    return <Text style={{fontSize:30}}>This is the settings</Text>;
  };
  function HelpScreen(navigation, route) {
    return <Text>you need help?</Text>;
  };
  function LogoutScreen(navigation, route) {
    return <Text style={{fontSize:30}}>Can't log out</Text>;
  };

  const styles = StyleSheet.create({
      imgStyle: {
          width: 100,
          height: 100,
          marginTop: 30
      }
  })

  export default MyDrawer