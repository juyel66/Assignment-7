

const CorrentCook = ({ item,index }) => {
    console.log(item)
    return (
        <div>
            {
                <div className="flex bg-gray-200 mt-5 rounded-xl items-center px-2">
                    <div className='flex gap-16 mt-5 mb-5 border w-full'>
                        <p>{index + 1}</p>
                        <p>{item.recipe_name}</p>
                        <p>{item.preparing_time}</p>
                        <p>{item.calories}</p>   
                    </div>
                </div>
            }

        </div>
    );
};

export default CorrentCook;