

const Navbar = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="navbar-container flex justify-between items-center">
                <div className="flex lg:gap-52 items-center">
                    <div>
                        <h1 className="text-lg lg:text-4xl  font-bold">Recipe Calories</h1>
                    </div>
                    <div className=" hidden lg:flex gap-10">
                        <p>Home</p>
                        <p>Recipes</p>
                        <p>About</p>
                        <p>Search</p>
                    </div>
                </div>
                <div className=" flex gap-2">
                        <div  className="border-2 item-center  rounded-2xl  lg:w-52 flex gap-2">
                            <img className="lg:w-16 lg:h-10 lg:mb-2 h-5 mt-5  relative" src="https://i.ibb.co/jZ65PYk/icons8-search-50-1.png" alt="" />
                            <input  className="rounded-xl outline-none lg:w-64 w-32" type="search" placeholder="search" />
                        </div>
                        <div>
                            <button className="border-2 rounded-full p-3 bg-green-500">
                                <img className="w-[30px]" src="https://i.ibb.co/z8LY21g/user.png" alt="" />
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Navbar;