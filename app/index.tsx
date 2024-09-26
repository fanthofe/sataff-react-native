import { Card } from "@/components/Card";
import { PatenteCard } from "@/components/patentes/PatenteCard";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { StyleSheet, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const patentes = Array.from({length: 20}, (_, k) => ({
    name: 'Name',
    id: k + 1
  }))

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: Colors.light.bgWhite}]}>
      <View style={styles.header}>
        <Image 
          source={require('@/assets/images/logo-sataffe.jpg')}
          style={styles.logo}
        />
      </View>
      <View style={styles.body}>
        <ThemedText variant="headline" style={styles.titleCard}>
          Populaires
        </ThemedText>
        <FlatList
          data={patentes}
          contentContainerStyle={styles.flatList}
          renderItem={({item}) => <PatenteCard id={item.id} name={item.name} style={styles.patenteCard}>
           <ThemedText variant="subtitle1">
            {item.name}
           </ThemedText>
          </PatenteCard>} 
          keyExtractor={(item) => item.id.toString()}
          horizontal
          pagingEnabled
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }, 
  header: {
    alignItems: "center",
    padding: 20
  },
  logo: {
    height: 50,
    width: 50,
  },
  body: {
    padding: 12
  },
  titleCard: {
    paddingVertical: 8
  },
  flatList: {
    gap: 10,
    padding: 4
  },
  patenteCard: {
    backgroundColor: Colors.light.grayDark
  }
});
