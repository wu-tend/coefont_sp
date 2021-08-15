import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool, shape } from 'prop-types'

function Hello(props) {
	const { children, bang, style } = props;
	return (
    	<View>
			<Text style={[styles.text, style]}>
        		{`Hello ${children}${bang ? '!':''}`}
			</Text>
		</View>
	);
}

//Propの種類を事前に宣言
Hello.propTypes = {
	children: string.isRequired,
	bang: bool,
	style: shape()
}

//Propのデフォルト値を事前に宣言
Hello.defaultProps = {
	bang: false,
	style: null
}

const styles = StyleSheet.create({
	text: {
		color: 'white',
		backgroundColor: 'blue',
		fontSize: 40,
		fontWeight: 'bold',
		padding: 16,
	}
});

export default Hello;
