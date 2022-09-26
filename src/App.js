import { Component } from 'react';
import Header from './components/app-header/app-header';
import About from './components/app-about/app-about';
import Control from './components/app-comtrol/app-control';
import Catalog from './components/app-catalog/app-catalog';
import Footer from './components/app-footer/app-footer';

import './App.scss';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catalog : [
                {sort: 'AROMISTICO Coffee', weigth: '1 kg', country: 'Brazil', price: 6.99, pic: './img/71qBQnpQFYL.png', id: 1},
                {sort: 'AROMISTICO Coffee', weigth: '1 kg', country: 'Kenya', price: 6.99, pic: './img/71qBQnpQFYL.png', id: 2},
                {sort: 'AROMISTICO Coffee', weigth: '1 kg', country: 'Columbia', price: 6.99, pic: './img/71qBQnpQFYL.png', id: 3},
                {sort: 'AROMO Coffee', weigth: '1 kg', country: 'Brazil', price: 5.99, pic: './img/71qBQnpQFYL.png', id: 4},
                {sort: 'Brasilian Sun', weigth: '1 kg', country: 'Brazil', price: 7.99, pic: './img/71qBQnpQFYL.png', id: 5},
                {sort: 'Cacao Coffee', weigth: '1 kg', country: 'Brazil', price: 4.99, pic: './img/71qBQnpQFYL.png', id: 6}
            ],
            filter: '',
            value: ''
        }
    }

    filterSelection = (active) => {
        this.setState(() => {return ({filter: active})});
    }

    searchFilter = (value) => {
        this.setState(() => {return ({value: value})});
    }

    catalogRendering = (filter, value, catalog) => {
        let arr = [];
        
        if (filter === '') {
            arr = catalog.filter(item => item.sort.indexOf(value) > -1);
        } else {
            arr = catalog.filter(item => item.country == filter && item.sort.indexOf(value) > -1);
        }

        return arr;
    }

    render() {
        const {catalog, filter, value} = this.state;
        let visibleCatalog = this.catalogRendering(filter, value, catalog);
        
        return (
            <div className="App">
                <Header />
                <About />
                <Control 
                    filterSelection={this.filterSelection}
                    searchFilter={this.searchFilter}/>
                <Catalog catalog={visibleCatalog}/>
                <Footer />
            </div>
        );
     }  
  
}

export default App;
