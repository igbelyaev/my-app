import CatalogItem from '../app-catalog-item/app-catalog-item';

import './app-catalog.scss';

function Catalog({catalog}) {

    const items = catalog.map(item => {
        const {id, ...itemProps} = item;

        return (
            <CatalogItem {...itemProps} key={id}/>
        )
    });

    return (
        <section className="catalog">
            {items}
        </section>
    )
}

export default Catalog;