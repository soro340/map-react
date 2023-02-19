import React from "react";
import Test from "./component/test";

const API_KEY="b859e3163c3ead1c5605b08babd2df45"
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      temp1:-3,
      temp2:-2,
      temp3:-3,
      temp4:-2
  };}
  ge= ()=>{
    
    this. geting(55.75, 37.57).then((a) => {
      this.setState({
        temp1:a
      });
    });
    this. geting(59.939402, 30.314264).then((a) => {
      this.setState({
        temp2:a
      });
    });
    this. geting(47.221373, 39.718848).then((a) => {
      this.setState({
        temp3:a
      });
    });
    this. geting(56.327055, 44.006394).then((a) => {
      this.setState({
        temp4:a
      });
    });
}

  geting= async(lat,lon)=>{
    const api_url=await 
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const data =await api_url.json();
   return data.main.temp
  }
  

  render(){
    return(
     <Test pog={this.ge}
     mr={this.state.temp1}
     mr2={this.state.temp2}
     mr3={this.state.temp3}
     mr4={this.state.temp4}
     />
    );
  }
}
export default App
