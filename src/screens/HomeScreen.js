import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}> Hello World! </Text>
			<Button
				title="Go To Components Demo"
				onPress={() => navigation.navigate("Components")}
			/>
			<Button
				onPress={() => navigation.navigate("List")}
				title="Go To List Demo"
			/>
			<Button
				onPress={() => navigation.navigate("img")}
				title="Go to ImageList"
			/>
			<Button
				onPress={() => navigation.navigate("counter")}
				title="Go to CounterDemo"
			/>
			<Button
				onPress={() => navigation.navigate("color")}
				title="Go to ColorScreen"
			/>
			<Button
				onPress={() => navigation.navigate("intensity")}
				title="Go to Intensity ColorScreen"
			/>
			<Button
				onPress={() => navigation.navigate("text")}
				title="Go to TextScreen"
			/>
			<Button
				onPress={() => navigation.navigate("box")}
				title="Go to BoxScreen"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
