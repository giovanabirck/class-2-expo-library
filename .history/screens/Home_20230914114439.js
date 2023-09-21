import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar, Badge, Card } from '@rneui/themed';

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
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 20,
                    marginBottom: 40,
                }}>
                <Badge value="3" status="success" />
                <Badge value="99+" status="error" />
                <Badge value="500" status="primary" />
                <Badge value="10" status="warning" />
            </View>
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
