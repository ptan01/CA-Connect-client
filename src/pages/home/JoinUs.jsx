import JoinUsCard from "../../cardComponent/JoinUsCard";

const JoinUs = () => {
    return (
        <div className="mt-[132px]">
            <div>
                <h1 className="font-bold text-6xl text-center">Want to <span className='bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text'>Join</span> Us</h1>
                <p className="text-2xl font-normal text-center mt-4">To remain with us, it is essential that you diligently follow the steps provided</p>
            </div>
            <JoinUsCard></JoinUsCard>
        </div>
    );
};

export default JoinUs;