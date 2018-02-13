import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

class FrontDoor extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            outside: true
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        var testURL = "http://dev-api.codeforkc.org//address-attributes/V0/1407%20Grand%20blvd?city=Kansas%20City&state=mo";
        var dummyURL = "https://jsonplaceholder.typicode.com/users";
        var newURL = "http://dev-api.codeforkc.org//address-attributes/V0/2516%20Holmes%20st?city=Kansas%20City&state=mo";
        
        console.log(this.state.value);
        event.preventDefault();
        axios.get(newURL).then(function(response){
            var myResponse = response.data;
            console.log("this is working");
            console.log(myResponse.data.city_id);
        });

        this.setState({ outside: false});
      }

      renderIn(){
          return(
              <div>
              <InsideHouse />
              </div>
          );
      }

      renderOut(){
        return (
            <div className="centerStuff">
                <form onSubmit={this.handleSubmit}>
                    <label className="mainLabel" >
                    Address
                    <input type="text" value={this.state.value} onChange={this.handleChange} className="mainInput"  />
                    </label>
                    <div>
                    <input type="submit" value="Submit" className="redButton" />
                    </div>
                </form>
            </div>
        );
      }
    
      render() {
        if (this.state.outside) {
            return this.renderOut();
          } else {
            return this.renderIn();
          }
      }
}

class Hallway extends React.Component{
    render(){
        return (
            <div>
                <div className="menuBar">
                <form>
                <div><label><input type="radio" name="groupName" value="Option1" checked={true}/><p1>Option Something</p1></label></div>
                <div><label><input type="radio" name="groupName" value="Option2" /><p1>Option Something2</p1></label></div>
                <div><label><input type="radio" name="groupName" value="Option3" /><p1>Option Something3</p1></label></div>
                </form>
                </div>
            </div>
        );
    }
}

class InsideHouse extends React.Component{
    render(){
        return (
            <div>
                <Hallway />
            </div>
        );
    }
}

ReactDOM.render(<FrontDoor />, document.getElementById('root'));
registerServiceWorker();
