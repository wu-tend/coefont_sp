import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// constructor(props) {
//     
// }

function Main(props){
    super(props);
    this.state = {
        text: "",
    };
    return(
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#F5FCFF'
        }}>
        <TextInput
            style={{
                width: "100%",
                borderBottomWidth: 1,
                borderBottomColor: "#ccc"
            }}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
        />
        <Text>{this.state.text}</Text>
        </View>
    );
}

export default Main;