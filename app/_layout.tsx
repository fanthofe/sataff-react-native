import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Tabs } from "expo-router";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs 
        screenOptions={{ 
          tabBarActiveTintColor: Colors.light.tint,
          headerShown: false 
          }}>
        <Tabs.Screen 
          name="index"
          options={{
            title: "Rechercher",
            tabBarIcon: ({color}) => 
              <TabBarIcon name={'search-outline'} color={color} /> 
          }} />
        <Tabs.Screen 
          name="favorites"
          options={{
            title: "Favoris",
            tabBarIcon: ({color}) => 
              <TabBarIcon name={'heart-outline'} color={color} /> 
          }} />
        <Tabs.Screen 
          name="publications"
          options={{
            title: "Publier",
            tabBarIcon: ({color}) => 
              <TabBarIcon name={'add-circle-outline'} color={color} /> 
          }} />
        <Tabs.Screen 
          name="messages"
          options={{
            title: "Messages",
            tabBarIcon: ({color}) => 
              <TabBarIcon name={'chatbox-outline'} color={color} /> 
          }} />
        <Tabs.Screen 
          name="profil"
          options={{
            title: "Profil",
            tabBarIcon: ({color}) => 
              <TabBarIcon name={'person-circle-outline'} color={color} /> 
          }} />
        <Tabs.Screen 
          name="patente/[id]"
          options={{
            href: null,
          }} />
      </Tabs>
    </QueryClientProvider>
  );
}
