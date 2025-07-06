import { View, Text, StyleSheet } from 'react-native'

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>StickerSmash App</Text>
            <Text style={styles.text}>
                This app allows you to select a photo from your gallery,
                add fun emoji stickers to it, and save your creations.
            </Text>
            <Text style={styles.text}>
                Built with React Native & Expo. 🚀
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20, // Yazıların kenarlara yapışmaması için
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 16,
    },
    text: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center', // Metni ortalamak için
        lineHeight: 24, // Satır yüksekliği
        marginBottom: 10,
    },
})