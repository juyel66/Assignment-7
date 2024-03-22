import CorrentCook from "../CookSection/CorrentCook/CorrentCook";


const CurrnetlyCooking = ({cook}) => {
    // console.log(cook)
    return (
        <div>
            {
                cook.map((item,index)=><CorrentCook key={index} item={item} index={index} ></CorrentCook>)
            }
            
        </div>
    );
};

export default CurrnetlyCooking;