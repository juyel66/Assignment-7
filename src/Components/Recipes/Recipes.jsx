import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useState } from "react";
import SingleProduct from '../SingleProduct/SingleProduct'
import CookSection from "../CookSection/CookSection";
import CurrnetlyCooking from "../CurrentlyCooking/CurrnetlyCooking";


const Recipes = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [cook, setCook] = useState([]);

    const handleWantCook = (itemClick) => {
        // console.log( "click btn"itemClick)
        const count = document.getElementById('wantToCookCount')
        const newCart = cart.filter(item => item.recipe_id != itemClick.recipe_id);
        setCart(newCart)
        count.innerText = parseInt(count.innerText)-1;
        const cartCount=document.getElementById('count')
        cartCount.innerText = parseInt(cartCount.innerText)+1;
        const totalTime=document.getElementById('total')
        const time = parseInt(itemClick.preparing_time)
        totalTime.innerText = parseInt(totalTime.innerText)+time;
        const newCookingCart = [...cook, itemClick]
        const caloriesCount = document.getElementById('calories');
        const calories = parseInt(itemClick.calories);
        caloriesCount.innerText = parseInt(caloriesCount.innerText)+calories;

        setCook(newCookingCart)

    }

    useEffect(() => {
        // fetch('data.json')
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    // const handleCart = (p) => {
    //     const newCart = [...cart,p]
    //     setCart(newCart)
    // }

    const handleCart = (p) => {
        const count = document.getElementById('wantToCookCount')
        console.log(count)
        const isExist = cart.find(item => item.recipe_id == p.recipe_id);

        if (!isExist) {

            const newCart = [...cart, p]
            setCart(newCart)
            count.innerText = parseInt(count.innerText) + 1;
        }
        else {
            toast("Cart Already exist!")
        }
    }

    // console.log(cart)
    return (
        <div className="lg:max-w-[1200px] mx-auto mt-10">


            <div className="text-center">
                <h1 className="text-4xl font-bold">Our Populer Recipes</h1>
                <p className="lg:w-[700px] mx-auto">Could classic chicken and rice be one of the most beloved comfort dinners to ever hit the plate? We think so. And to blow your mind even more, this version is made in just one skillet. Here we use bone-in, skin on chicken thighs which cook up in exactly same time as the rice to</p>
            </div>
            <div className="main-container mt-10 flex flex-col lg:flex-row gap-10 ">
                <div className="card-section border-2 border-dotted rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:w-3/5 ">
                    {product.map(pd => <SingleProduct key={product.id} product={pd} handleCart={handleCart}></SingleProduct>)}

                </div>


                <div className="cart-section border-2 rounded-xl border-dotted lg:w-[40%]">

                    <div className="cook-section">
                        <h2 className="text-2xl font-semibold text-center">Want to cook: <span id="wantToCookCount">0</span></h2>
                        <hr className="w-64 border border-dotted mt-5 mb-5 mx-auto" />
                        <div className=" ml-16 flex gap-10 w-10">
                            <p className='font-bold'>Name</p>
                            <p className="ml-5 font-bold">Time</p>
                            <p className="ml-5 font-bold">Calories</p>
                        </div>
                        <CookSection cart={cart} handleWantCook={handleWantCook} ></CookSection>


                        {/* <div className="flex gap-10 mt-5  bg-gray-200 items-center">
                            <p className="w-16 ml-5">Chicken Stir Fry</p>
                            <p>20 minutes</p>
                            <p>600 calories</p>
                            <div>
                                <button className="btn w-24 bg-green-500 p-2 border rounded-full">Preparing</button>
                            </div>
                        </div> */}
                    </div>

                    <div className="preparing-section mt-5">
                        <h2 className="text-2xl font-semibold text-center">Currently cooking: <span id='count'>0</span></h2>
                        <hr className="w-64 border border-dotted mt-5 mb-5 mx-auto" />
                        <div className="ml-5 mr-10 font-bold flex gap-20 w-16">
                            <p className='ml-12'>Name</p>
                            <p className="ml-5">Time</p>
                            <p>Calories</p>
                        </div>
                        {/* <div className="flex gap-16 mt-5 bg-gray-200 border w-full p-2">
                            <div className="flex gap-2">
                                <p>1.</p>
                                <p>vegitable chiken</p>
                            </div>
                            <p>20 minutes</p>
                            <p>600 calories</p>
                        </div> */}

                        <CurrnetlyCooking cook={cook}></CurrnetlyCooking>
                    </div>

                    <div className="total-count font-bold w-64 ml-32 flex flex-1 gap-10 mt-10">
                        <p>Total Time = <br /> <span id='total'>0</span> minutes</p>
                        <p>Total Calories = <br /> <span id='calories'>0</span> calories</p>
                        

                    </div>
                </div>

            </div>
              <ToastContainer></ToastContainer>
        </div>
    );
};

export default Recipes;