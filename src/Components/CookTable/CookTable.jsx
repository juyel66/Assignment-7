

const CookTable = ({ item, handleWantCook, index}) => {
    console.log(item)
    return (
        <div>
            <div className="flex gap-10 mt-5   items-center">
                {
                    <div className="flex gap-10 bg-[#E0E0E0] rounded-xl">
                        <p className="mt-3">{index+1}</p>
                        <p className="w-16 ml-5">{item.recipe_name}</p>
                        <p className="ml-5">{item.preparing_time}</p>
                        <p className="ml-5">{item.calories}</p>
                        <div>
                            <button onClick={()=> handleWantCook(item)} className="btn w-24 bg-green-500 p-2 border rounded-full">Preparing</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default CookTable;