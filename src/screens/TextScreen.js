import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const TextScreen = () => {
	const [tezt, setTezt] = useState("");
	return (
		<View>
			<Text>Type Some Text</Text>
			<TextInput
				style={styles.textinput}
				autoCapitalize="none"
				autoCorrect={false}
				value={tezt}
				onChangeText={(newTezt) => setTezt(newTezt)}
			/>
			<Text>Text is: {tezt}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textinput: {
		margin: 15,
		borderColor: "black",
		borderWidth: 1,
	},
});

export default TextScreen;
