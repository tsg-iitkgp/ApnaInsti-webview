import { StyleSheet } from "react-native";
import { width, height, totalSize } from 'react-native-dimension';
export default StyleSheet.create({
 topbar: {
		height: height(10),
		fontFamily:'Roboto-Regular',
		// borderBottomLeftRadius: 20,
		// borderBottomRightRadius: 20,
		backgroundColor: "#0099ff",
		flexDirection: "row",
		elevation: 5
	},
	  blocks: {
		width: width(80),
		height: height(9),
		alignItems: "center",
		
		flexDirection: "row",

	},
	blockText: {
		fontSize: 15,
		color:'#fff',
		marginLeft:width(5)

	},
	icon: {
	
		marginLeft: width(5),
		fontSize: 28,
		color:'#fff',
	},
	mainBlocks:{
		marginTop:height(3),
	},
	box: {
		width: width(40),
		height: 100,
		
		borderColor:'#0000a0',
		borderWidth:2,
		marginLeft: width(6.5),
		marginTop: height(2),
		elevation: 2,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center"
	},
boxText: {
		fontSize:20,
		color:'#000',
	},
	boxText2:{
		fontSize:12,
		marginTop:4,
		alignItems:'center',
		textAlign:'center',
	}
});
