import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar, Badge, Card, BottomSheet } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function Home({navigation}) {
    return (
        <SafeAreaProvider>
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

                <Card>
                    <Card.Title>HELLO WORLD</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0 }}
                        source={{uri:'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',}}
                        />
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component
                        structure than actual design.
                    </Text>
                </Card>

            </View>
        </SafeAreaProvider>
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
