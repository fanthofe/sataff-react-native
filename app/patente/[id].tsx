import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function Patente() {
    const params = useLocalSearchParams();
    return <View>
        <ThemedText variant="headline" color="tint">
            Patente {params.id}
        </ThemedText>
    </View>;
}