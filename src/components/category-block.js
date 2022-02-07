import ProductTile from "../components/product-tile";

const CategoryBlock = ({categoryTitle, data}) => {
    return (
        <div className="categories">
            <h3>{categoryTitle}</h3>
            <div className="category-blocks">
                {
                    data.offers.map((product, index) => {
                        return (
                            <ProductTile key={index} product={product} />
                        )
                    })
                }
            </div>
    </div>
    )
};

export default CategoryBlock;