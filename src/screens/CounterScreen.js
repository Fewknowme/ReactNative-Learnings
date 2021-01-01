import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
	switch (action.type) {
		case "increase_counter":
			return { ...state, counter: state.counter + action.payload };
		case "decrease_counter":
			return { ...state, counter: state.counter - action.payload };
		default:
			return state;
	}
};

const CounterScreen = () => {
	// const [counter, setCounter] = useState(0);
	const [state, dispatch] = useReducer(reducer, { counter: 0 });
	const { counter } = state;
	const I = 1;

	return (
		<View>
			<Button
				title="Increase"
				onPress={() => {
					dispatch({ type: "increase_counter", payload: I });
				}}
			/>
			<Button
				title="Decrease"
				onPress={() => {
					dispatch({ type: "decrease_counter", payload: I });
				}}
			/>
			<Text style={styles.text}>Current Counter Value: {counter}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default CounterScreen;
