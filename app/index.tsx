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
      <Link style={{ color: 'blue' }} href="myapp://settings">
        Link to Settings Page
      </Link>
    </View>
  );
};

export default Home;
