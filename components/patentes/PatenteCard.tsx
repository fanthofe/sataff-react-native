import { Image, Pressable, StyleSheet, ViewStyle } from "react-native"
import { Card } from "../Card"
import { ThemedText } from "../ThemedText"
import { ToCapitalize } from "@/functions/functions"
import { Link } from "expo-router"
import { Colors } from "@/constants/Colors"

type Props = {
    style?: ViewStyle,
    id: number,
    name: string,
}

export function PatenteCard({style, id, name}: Props) {

    // asChild indique que c'est l'enfant qui va recevoir le lien soit le pressable + la card
    return <Link href={{pathname: "/patente/[id]", params: {id: id}}} asChild>
        <Pressable android_ripple={{color: Colors.light.tint, foreground: true}}>
            <Card style={[style, styles.card]}>
                <Image 
                    width={200}
                    height={200}
                    source={{uri: 
                        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`}} 
                />
                <ThemedText variant="subtitle1" color="grayMedium" style={styles.title}>{ToCapitalize(name)}</ThemedText>
            </Card>
        </Pressable>
    </Link>;
}

const styles = StyleSheet.create({
    card: {
        alignItems: "center"
    },
    title: {
        paddingBottom: 8
    }
})