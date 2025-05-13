import { Link } from 'expo-router';
import { View, Text, Button, Linking } from 'react-native';
const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 60,
      }}
    >
      <Text>Home Screen</Text>
      <Link style={{ color: 'blue' }} href="myapp://items/1">
        Item 1
      </Link>
      <Link style={{ color: 'blue' }} href="myapp://items/2">
        Item 2
      </Link>
      <Link style={{ color: 'blue' }} href="myapp://items/3">
        Item 3
      </Link>
    </View>
  );
};

export default Home;
