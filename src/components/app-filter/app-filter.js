import { Component } from "react";

import './app-filter.scss';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: ''
        }
    }
    
    render() {
        return (
            <div className="filter">
                <div className="filter_descr">Or filter</div>
                <div className="filter_btn brazil">Brazil</div>
                <div className="filter_btn kenya">Kenya</div>
                <div className="filter_btn columbia">Columbia</div>
            </div>
        )
    }
}

export default Filter;