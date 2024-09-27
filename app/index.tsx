import { PatenteCard } from "@/components/patentes/PatenteCard";
import { SearchBar } from "@/components/SearchBar";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { getPatenteId } from "@/functions/patente";
import { useFetchQuery, useInfiniteFetchQuery } from "@/hooks/useFetchQuery";
import { useState } from "react";
import { StyleSheet, View, Image, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const {data, isFetching, fetchNextPage} = useInfiniteFetchQuery('/pokemon?limit=20');
  const patentes = data?.pages.flatMap(page => page.results) ?? [];
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: Colors.light.bgWhite}]}>
      <View style={styles.header}>
        <Image 
          source={require('@/assets/images/logo-sataffe.jpg')}
          style={styles.logo}
        />
      </View>
      <View>
        <SearchBar value={search} onChange={setSearch} />
      </View>
      <View style={styles.body}>
        <ThemedText variant="headline" style={styles.titleCard}>
          Populaires
        </ThemedText>
        <FlatList
          data={patentes}
          contentContainerStyle={styles.flatList}
          renderItem={({item}) => <PatenteCard id={getPatenteId(item.url)} name={item.name} 
          style={styles.patenteCard}/>} 
          keyExtractor={(item) => item.url}
          // Ajoute un loader à chaque nouveau chargement de la page
          ListFooterComponent={
            isFetching ? <View style={styles.loader}><ActivityIndicator size='large' color={Colors.light.tint} /></View> : null
          }
          // Détecte la fin d'une liste
          onEndReached={() => fetchNextPage()}
          horizontal
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
  }, 
  loader: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
