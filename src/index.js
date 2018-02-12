import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class FrontDoor extends React.Component{

   
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        var testURL = "http://dev-api.codeforkc.org//address-attributes/V0/1407%20Grand%20blvd?city=Kansas%20City&state=mo";
        var dummyURL = "https://jsonplaceholder.typicode.com/users";
        
        console.log(this.state.value);
        event.preventDefault();

        {/*axios.get(dummyURL).then(function(response){
            console.log("this is working");
            console.log(response.data);

        });*/}




      }
    
      render() {
        return (
            <div className="centerStuff">
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Address:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <div>
                    <input type="submit" value="Submit" className="redButton" />
                    </div>
                </form>
            </div>
        );
      }
}



ReactDOM.render(<FrontDoor />, document.getElementById('root'));
registerServiceWorker();
