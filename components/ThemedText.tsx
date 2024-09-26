import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TextProps } from "react-native";

const styles = StyleSheet.create({
    body1: {
        fontSize: 14,
        lineHeight: 16,
    },
    body2: {
        fontSize: 12,
        lineHeight: 16,
    },
    body3: {
        fontSize: 10,
        lineHeight: 16,
    },
    caption: {
        fontSize: 8,
        lineHeight: 12,
    },
    headline: {
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 32,
    },
    subtitle1: {
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 16,
    },
    subtitle2: {
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 16,
    },
    subtitle3: {
        fontWeight: "bold",
        fontSize: 10,
        lineHeight: 16,
    },
})

type Props = TextProps & {
    variant?: keyof typeof styles, 
    color?: keyof typeof Colors['light'],
}

export function ThemedText({variant, color, style, ...rest} : Props) {
    return <Text style={[styles[variant ?? "body3"], {color: "grayLight"}, style]} {...rest}/>
}