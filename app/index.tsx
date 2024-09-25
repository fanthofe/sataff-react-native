import { Colors } from "@/constants/Colors";
import { StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: Colors.light["bg-primary"]}]}>
      <View style={styles.header}>
        <Image 
          source={require('@/logo-sataffe.jpg')}
          style={styles.logo}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }, 
  header : {
    alignItems: "center",
    padding: 20
  },
  logo : {
    height: 50,
    width: 50,
  }
});
