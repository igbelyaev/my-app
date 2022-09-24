import { Component } from 'react';
import Header from './components/app-header/app-header';

import './App.scss';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Header />
                <header className="App-header">
                    <div> Hello, world </div>
                    
                    <div> Hello, world </div>
                </header>
            </div>
        );
     }  
  
}

export default App;
