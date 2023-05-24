import { StyleSheet, Text, View, Pressable } from "react-native";
import {Component, useRef, useState } from "react";
import { styles } from "../styles/styles";
let currentSymbol = "X"


function getSymbol() : String {
  if (currentSymbol=="X"){
    currentSymbol = "O"
    return "X"
  }
  else{
    currentSymbol = "X"
    return "O"
  }
}



class CreateRectangle extends Component<any, any> {

  //const [clickable, setClickable] = useState(true);
  //const [symbol, setSymbol] = useState<String>("");

  constructor(props: any) {
    super(props);
    this.state = {
      clickable: true,
      symbol: ""
    };
  }

  clearSymbol() {
    console.log("clearing symbol")
    this.setState({ symbol: "Y" });
  }

  render() {
    return (
      <View >
        <Pressable
          style = {[styles.button]}
          onPress={() => {
            if(this.state.clickable){
              this.setState({clickable: false});
              this.setState({symbol: getSymbol()});
              }
            }
          }
        >
          <Text style={styles.symbols}>{this.state.symbol}</Text>
        </Pressable>
      </View>
      )
  }
}


let rects : any[] = [];

export function initRectangles() {
  rects = [];
  for (let i = 0; i < 9; i++) {
    rects.push(<CreateRectangle key={i}/>);
  }

  return (
    <View>
      <View style={styles.row}>
        {rects[0]}
        {rects[1]}
        {rects[2]}
      </View>
      <View style={styles.row}>
        {rects[3]}
        {rects[4]}
        {rects[5]}
      </View>
      <View style={styles.row}>
        {rects[6]}
        {rects[7]}
        {rects[8]}
      </View>
    </View>
  );
}

export function clearRectangles() {
  return initRectangles();
}