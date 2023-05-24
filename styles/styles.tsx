import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    button: {
      backgroundColor : 'white',
      borderColor: 'black',
      borderWidth: 3, 
      width: 97 , 
      height: 97
    },
  
    text: {
      color: "black",
      fontSize: 30,
    },
  
    symbols: {
      display: 'flex', 
      textAlign: 'center',
      top: '25%',
      fontSize: 50
    },
  
    row: {
      display: 'flex', 
      flexDirection: 'row',
    },
    
    center: {
      display: 'flex',
      width: '100%', 
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    center_item_vertically: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    }
  });
  
  