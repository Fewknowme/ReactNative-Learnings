import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, ImageSource, imgScore }) => {
	return (
		<View>
			<Image source={ImageSource} />
			<Text style={styles.text}>{title}</Text>
			<Text>{imgScore}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default ImageDetail;
