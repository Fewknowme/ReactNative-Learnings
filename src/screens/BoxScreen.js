import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>Child #1</Text>
			<Text style={styles.text2Style}>Child #2</Text>
			<Text style={styles.text3Style}>Child #3</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 3,
		borderColor: "black",
		height: 200,
	},
	textStyle: {
		borderWidth: 3,
		borderColor: "red",
	},
	text2Style: {
		borderWidth: 3,
		borderColor: "green",
	},
	text3Style: {
		borderWidth: 3,
		borderColor: "blue",
	},
});

export default BoxScreen;
