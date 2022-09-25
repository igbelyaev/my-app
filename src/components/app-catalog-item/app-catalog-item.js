
import './app-catalog-item.scss';

function CatalogItem({sort, country, weigth, price, pic}) {
    return (
        <section className="sort">
            <img src={pic} alt="sort pic" />
            <div className="sort_descr">
                <span className="sort_name">{sort}</span>
                <span className="sort_weigth">{weigth}</span>
            </div>
            <div className="sort_country">{country}</div>
            <div className="sort_price">{price + "$"}</div>
        </section>
    )
}

export default CatalogItem;