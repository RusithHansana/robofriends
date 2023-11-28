import React, {useState, useEffect} from "react";
import CardList from "../components/robo/CardList";
import SearchBox from "../components/robo/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";

// //to use state we must declare class components
//using class components
//import React, {Component} from 'react';
// export class App extends Component {
//     constructor(){
//         super()
//         this.state = {
//             robots: [],
//             searchField: '',
//         }
//     }

//     componentDidMount(){
//         //this is a react life cycle method
//         //executes after first time rendering the app
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(users =>this.setState({robots: users}));
//     }
    
//     onSearchChange = (event) =>{
//         this.setState({searchField: event.target.value});
//     }
    
//     render(){
//         const { robots, searchField} = this.state;
//         const filteredRobots = robots.filter(robot => {
//             return robot.name.toLowerCase()
//             .includes(searchField.toLowerCase());
//         });
//          return !robots.length?
//                 <h1 className="f1">Loading.....</h1> :
//                 (
//                     <div className="tc">
//                         <h1 className="f1">RoboFriends</h1>
//                         <SearchBox searchChange = {this.onSearchChange}/>
//                         <Scroll>
//                             <CardList robots = {filteredRobots}/>
//                         </Scroll>   
//                     </div>
//                 )
//     }
// }

//using hooks
function App() {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    const onSearchChange = (event) =>{
        setSearchField(event.target.value);
    }    
    
    //useEffect runs everytime the component rerender
    //this will cause an infinite loop
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users =>{setRobots(users)});
    //to avoid that we pass a second argument
    //this tells that when changes happen to the this argument then run use effect
    //in this cas we use an empty array which is the initial state
    //better to use initial state otherwise this will run everytime when a change happens to the argument
    },[]); 


    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase()
            .includes(searchField.toLowerCase());
    });

    return !robots.length?
         <h1 className="f1">Loading.....</h1> :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                        <SearchBox searchChange = {onSearchChange}/>
                             <Scroll>
                                <CardList robots = {filteredRobots}/>
                            </Scroll>   
                </div>
            );
            
}

export default App;