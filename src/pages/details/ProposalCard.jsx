/* eslint-disable react/prop-types */
import {BiTask} from 'react-icons/bi' ;



const ProposalCard = ({data}) => {
    return (
        <div className="shadow-xl rounded-xl w-full max-w-[515px] space-y-10 h-[216px] p-5">
            <div className="font-normal text-xl flex justify-between">
                <p>{data.taskComplexity}</p>
                <p className="font-bold">{data.price}</p>
            </div>
            <p className="font-normal text-xl flex items-center"><BiTask className='text-xl text-blue-400'></BiTask> {data.deliveryTime}</p>
            <div className="flex justify-between items-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-300">Request Proposal</button>
                <button className="border-2 border-blue-500 text-blue-500 font-bold px-4 py-2 rounded-lg hover:text-white hover:bg-blue-300">Chat with me</button>
            </div>
        </div>
    );
};

export default ProposalCard;