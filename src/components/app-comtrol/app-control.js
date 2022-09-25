import Search from '../app-search/app-search';
import Filter from '../app-filter/app-filter';

import './app-control.scss';

function Control() {
    return (
        <section className="control">
            <div className="control_wrapper">
                <Search />
                <Filter />
            </div>    
        </section>
    )
}

export default Control;