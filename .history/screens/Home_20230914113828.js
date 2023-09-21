import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar } from '@rneui/themed';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Button title="Outline" type="outline" />
            <Stack row spacing={4}>
                <Avatar
                    size={32}
                    rounded
                    title="Rd"
                    containerStyle={{ backgroundColor: "blue" }}
                />
                <Avatar
                    size={32}
                    rounded
                    title="AB"
                    containerStyle={{ backgroundColor: "purple" }}
                />
                </Stack>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
