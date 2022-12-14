import Search from '../app-search/app-search';
import Filter from '../app-filter/app-filter';

import './app-control.scss';

function Control({filterSelection, searchFilter}) {
    return (
        <section className="control">
            <div className="control_wrapper">
                <Search searchFilter={searchFilter}/>
                <Filter filterSelection={filterSelection}/>
            </div>    
        </section>
    )
}

export default Control;