import { Component } from 'react';

import './app-search.scss';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    onChange = (e) => {
        const search = e.target.value;

        this.setState(() => ({name: search}));

        this.props.searchFilter(search);
    }

    onFocus = (e) => {
        e.target.placeholder = '';
    }

    onBlur = (e) => {
        if (e.target.value == '') {
            e.target.placeholder = 'start typing here...';
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
                    value={this.state.name}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}/>
            </div>
            
        )
    }
}

export default Search

