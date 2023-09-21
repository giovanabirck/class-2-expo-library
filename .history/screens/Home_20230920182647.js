import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar, Badge, Card, BottomSheet, ListItem } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type BottomSheetComponentProps = {};

const BottomSheetComponent: React.FunctionComponent<BottomSheetComponentProps> = () => {
    const [isVisible, setIsVisible] = useState(false);
    const list = [
        { title: 'Option 1' },
        { title: 'Option 2' },
        {
            title: 'Cancel',
            containerStyle: { backgroundColor: 'red' },
            titleStyle: { color: 'white' },
            onPress: () => setIsVisible(false),
        },
    ];

export default function Home({navigation}) {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>

                <View>
                    <Button 
                        title="Open Bottom Sheet!" 
                        type="outline"
                        onPress={() => setIsVisible(true)}
                    />
                    <BottomSheet modalProps={{}} isVisible={isVisible}>
                        {list.map((l, i) => (
                            <ListItem
                                key={i}
                                containerStyle={l.containerStyle}
                                onPress={l.onPress}
                            >
                                <ListItem.Content>
                                    <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                            ))}
                    </BottomSheet>
                </View>


                {/*

                        ))}
                    </BottomSheet>
                </SafeAreaProvider>
                );
                };

                const styles = StyleSheet.create({
                button: {
                margin: 10,
                },
                }); */}

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
