import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar, Badge } from '@rneui/themed';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Button title="Outline" type="outline" />
            <Avatar
                size={40}
                rounded
                title="Rd"
                containerStyle={{ backgroundColor: "blue" }}
            />
            <Badge value="3" status="success" />
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
