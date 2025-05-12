import { View, Text, Button, Linking } from 'react-native';
const Home = () => {
    return (
        <View>
        <Text>Home Screen</Text>
        <Button 
  title="Test Deep Link" 
  onPress={() => Linking.openURL('myapp://settings')}
/>
        </View>
    );
};

export default Home;
