import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar } from '@rneui/themed';





export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Button title="Outline" type="outline" />
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
