import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar, Badge, Card, CheckBox } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type CheckboxComponentProps = {};

const CheckboxComponent: React.FunctionComponent<CheckboxComponentProps> = () => {
const [check1, setCheck1] = useState(false);
const [check2, setCheck2] = useState(false);
const [check3, setCheck3] = useState(false);
const [check4, setCheck4] = useState(false);

return (
  <>
    <CheckBox
      center
      title="Click Here"
      checked={check1}
      onPress={() => setCheck1(!check1)}
    />

    <CheckBox
      center
      title="Click Here"
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      checked={check2}
      onPress={() => setCheck2(!check2)}
    />

    <CheckBox
      center
      title={`Click Here to ${check3 ? 'Remove' : 'Add'} This Item`}
      iconRight
      iconType="material"
      checkedIcon="clear"
      uncheckedIcon="add"
      checkedColor="red"
      checked={check3}
      onPress={() => setCheck3(!check3)}
    />

    <CheckBox
      center
      checkedIcon={
        <Icon
          name="radio-button-checked"
          type="material"
          color="green"
          size={25}
          iconStyle={{ marginRight: 10 }}
        />
      }
      uncheckedIcon={
        <Icon
          name="radio-button-unchecked"
          type="material"
          color="grey"
          size={25}
          iconStyle={{ marginRight: 10 }}
        />
      }
      checked={check4}
      onPress={() => setCheck4(!check4)}
    />
  </>
);
};

export default function Home({navigation}) {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>

                <Button title="Outline Button" type="outline" />

                <View style={styles.checkbox}>
                    <CheckBox checked title="Click me" />
                    <CheckBox checked disabled title="Click me" />
                </View>

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
    checkbox: {
        display: 'felx',
        flexDirection: "row"
    }
});
