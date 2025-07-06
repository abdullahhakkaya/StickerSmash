import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import { PropsWithChildren } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
    return (
        <View>
            <Modal animationType='slide' transparent={true} visible={isVisible}>
                <View style={styles.modalContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Choose a sticker</Text>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name='close' color='#fff' size={22} />
                        </Pressable>
                    </View>
                    {children}
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        width: '100%',
        height: '25%',
        backgroundColor: '#25292e',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        height: '16%',
        backgroundColor: '#464C55',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 16,
    }
})