

const Banner = () => {
    return (
        <div className="lg:max-w-[1200px] mx-auto mt-16">
            <div className="banner-img ">
                <img className="w-full lg:h-[600px] lg:rounded-3xl bg-black bg-opacity-100" src="https://i.ibb.co/BBbBYVY/360-F-516780048-SR7-VEpxe1gm2-KYB5cb-LXiq-Y7d-VIVXF1j.jpg" alt="" />
            </div>
            <div className=" text-center absolute top-32 lg:top-80 lg:p-12 text-black mx-auto space-y-5">
                <h1 className=" text-2xl font-bold lg:text-7xl text-white ">Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className="lg:w-[700px] mx-auto text-white">We have all read about the current dilemma in the restaurant of business – the challenge of finding cooks fill shifts.   This is a cyclical problem driven by fluctuations in the economy paired with the continual American.</p>
                <div className="flex gap-5 justify-center">
                <button className="btn btn-ghost p-4 bg-green-400 rounded-2xl font-bold">Explore Now</button>
                <button className="btn btn-ghost p-4 border-2 border-white rounded-2xl text-white font-bold">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;