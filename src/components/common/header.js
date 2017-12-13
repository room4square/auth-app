// import library for making component
import React from 'react';
import { Text, View } from 'react-native';

// Make a registerComponent
const Header = (props) => { // props adalah object js jd argumen disini
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// STYLE DETIL dibawah ini untuk dipake diatasnya
const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // ga ngaruh di android
    shadowOpacity: 0.2,
    elevation: 4, //di android buat shadow hrs pake elevation
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// make component available for other parts of the App
// export default Header;
export { Header };
