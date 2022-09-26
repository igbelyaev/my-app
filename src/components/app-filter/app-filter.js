import { Component } from "react";

import './app-filter.scss';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnData: [
                {name: 'Brazil', id: 1},
                {name: 'Kenya', id: 2},
                {name: 'Columbia', id: 3}
            ],
            origin: '',
            lastClick: 0
        }
    }

    onClickFilter = (e) => {
        let activeFilter = e.target.getAttribute('data-ogigin');
        
        if (this.state.origin == activeFilter) {
            activeFilter = '';
        }

        this.setState(() => ({
                origin: activeFilter,
                lastClick: +e.target.getAttribute('data-id')
            })
        )
    
        this.props.filterSelection(activeFilter);
    }
    
    render() {
        const {btnData, origin, lastClick} = this.state;
        
        const buttons = btnData.map(({name, id}) => {
            let active = '';    
            if (lastClick == id) {
                active = origin == '' ? '' : 'active';
            }
            

            return (
                <div 
                className={`filter_btn ${active}`} 
                data-ogigin={name} 
                onClick={this.onClickFilter}
                data-id={id}
                key={id}>{name}</div>
            )
        })



        return (
            <div className="filter">
                <div className="filter_descr">Or filter</div>
                {buttons}
            </div>
        )
    }
}

export default Filter;