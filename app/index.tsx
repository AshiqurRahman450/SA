import { Text, View, Image } from "react-native";
import 'react-native-gesture-handler'
import Login from './../components/Login';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <Login />
    </View>
  );
}
