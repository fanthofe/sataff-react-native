import { Image, StyleSheet, ViewStyle } from "react-native"
import { Card } from "../Card"
import { ThemedText } from "../ThemedText"

type Props = {
    style?: ViewStyle,
    id: number,
    name: string,
}

export function PatenteCard({style, id, name}: Props) {
    return <Card style={[style, styles.card]}>
        <Image 
            width={200}
            height={200}
            source={{uri: 
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`}} 
        />
        <ThemedText variant="subtitle1" color="grayMedium" style={styles.title}>{name}</ThemedText>
    </Card>
}

const styles = StyleSheet.create({
    card: {
        alignItems: "center"
    },
    title: {
        paddingBottom: 8
    }
})