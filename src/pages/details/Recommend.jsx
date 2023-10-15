import imge from "../../assets/Rectangle 376.png"
import { FaStar } from "react-icons/fa";


const Recommend = () => {

    const array = [1, 2, 3];

    return (
        <div className="mt-20">
            <h1 className="my-5 text-4xl font-bold">Recommended for you</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-between">
                {
                    array.map((item) => <div key={item} className=" mx-auto shadow-xl rounded-xl p-5 space-y-3 w-[405px] ">
                        <img src={imge} alt="" />
                        <div className="flex text-xl font-bold justify-between  ">
                            <p>Michael Jackson</p>
                            <p>₹4,370</p>
                        </div>
                        <p>I will do business evaluation and corporate services</p>
                        <p className="flex font-normal text-base items-center"><FaStar></FaStar>4.8 (89)</p>
                        <button className="bg-blue-500 text-white px-4 w-full py-2 rounded-lg hover:bg-blue-700">Register</button>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Recommend;