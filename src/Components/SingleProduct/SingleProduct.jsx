import PropTypes from 'prop-types';

const SingleProduct = ({ product, handleCart }) => {
    // console.log(product)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-5 pt-5 w-full h-52">
                    <img src={product.recipe_image} alt="img" className="rounded-xl " />
                </figure>
                <div className="card-body items-center px-5 space-y-5">
                    <h2 className="text-2xl font-bold mr-24 mt-5 lg:mt-10">{product.recipe_name}</h2>
                    <p>{product.short_description}</p>
                    <hr className="w-full border border-dotted mt-5 mb-5" />
                    <h2 className="text-xl mr-28 font-bold">Ingredients: 6</h2>

                    <td className="mr-20">
                        <li>{product.ingredients[0]}</li>
                        <li>{product.ingredients[1]}</li>
                        <li>{product.ingredients[2]}</li>
                        <li>{product.ingredients[3]}</li>
                    </td>
                    <hr className="w-full border border-dotted mt-5 mb-5" />
                    <div className="flex justify-between gap-16 ">
                        <p className="flex gap-2"><img className="w-5" src="https://i.ibb.co/bBkYDNk/clock.png" alt="" /> <span>{product.preparing_time}</span></p>
                        <p className="flex gap-2"><img className="w-5" src="https://i.ibb.co/wWsghwX/fire.png" alt="" /> <span>{product.calories}</span></p>
                    </div>

                    <div className="mt-5">
                        <button onClick={() => handleCart(product)} className="btn mr-24  w-48 mb-5 bg-green-500 p-2 border rounded-full text-xl font-bold">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleProduct.prototype={
    product:PropTypes.object.isRequired,
    handleCart:PropTypes.object.isRequired
}
export default SingleProduct;