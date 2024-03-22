import CookTable from "../CookTable/CookTable";


const CookSection = ({ cart, handleWantCook }) => {
    // console.log(handleWantCook)
    // console.log(cart)
    return (
        <div>

            {
                cart.map((item,index) => <CookTable index={index} handleWantCook={handleWantCook} key={item.recipe_id} item={item}></CookTable>)
            }
        </div>
    );
};

export default CookSection;