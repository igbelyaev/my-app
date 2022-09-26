import { Component } from 'react';

import './app-search.scss';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    

    render() {
        return (
            <div className="search">
                <div className="search_caption">Looking for</div>
                <input 
                    className="search_input" 
                    type="text" 
                    placeholder='start typing here...'
                    value={this.state.name}/>
            </div>
            
        )
    }
}

export default Search

