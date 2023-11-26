import React, {Component} from "react";
import CardList from "../components/robo/CardList";
import SearchBox from "../components/robo/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";

//to use state we must declare class components

export class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount(){
        //this is a react life cycle method
        //executes after first time rendering the app
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>this.setState({robots: users}));
    }
    
    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value});
    }
    
    render(){
        const { robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase()
            .includes(searchField.toLowerCase());
        });
         return !robots.length?
                <h1 className="f1">Loading.....</h1> :
                (
                    <div className="tc">
                        <h1 className="f1">RoboFriends</h1>
                        <SearchBox searchChange = {this.onSearchChange}/>
                        <Scroll>
                            <CardList robots = {filteredRobots}/>
                        </Scroll>   
                    </div>
                )
    }
}

export default App;
