import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,Card, FlatList } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import axios from "axios";

export default class Popular extends Component {
  constructor() {
    super();
    this.state = {
      data:[]
    };
  }
  componentDidMount() {
    this.getData();
  }

  

  getData = () => {
    const url = "http://localhost:5000/get-articles";
    axios
      .get(url)
      .then(response => {
       
        this.setState({ articleDetails: details });
      })
      .catch(error => {
        console.log(error.message);
      });
  }; 
  keyExtractor=(item,index)
  renderItems=({items,index})=>{
    return(
        <Card
            key={'card-${index}'}
            image={{uri:item.poster_link}}
            imageprops={{resizeMode:"cover"}}
            featuredTitle={item.title}
            containerStyle={styles.cardContainer}
            featuredstyle={item.title}
            featuredSubtitle={`${
                item.release_date.split("-")[0]
             }|${this.timeConvert(item.duration)}`}
             featuredSubtitleStyle={styles.subtitle}
          
        />

        
    )
  }
  render(){
    const{data}=this.state;
    return(
        <View>
            <FlatList
                data={data}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItems}
            />
        </View>
    )
  }
   
  
 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    title: {
      color: "#fff",
      alignSelf: "flex-start",
      paddingLeft: RFValue(15),
      fontSize: RFValue(25),
      marginTop: RFValue(65)
    },
    subtitle: {
      fontWeight: "bold",
      alignSelf: "flex-start",
      paddingLeft: RFValue(15),
      fontSize: RFValue(15)
    },
    cardContainer: {
      flex: 1,
      borderRadius: RFValue(10),
      justifyContent: "center",
      height: RFValue(110),
      marginBottom: RFValue(20)
    }
  });
  