/* eslint-disable react/prop-types */

const JoinUsCard = ({ cardData }) => {

    const { title, subTitle, dueDate, fees } = cardData;

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-[405px] border-2 lg:mx-auto">
            <div className="text-white relative bottom-9 -left-9 w-[46px] p-2 h-[46px] bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-2xl font-bold rounded-lg">
                1<sup>st</sup>
            </div>
            <h2 className="text-xl font-bold text-center mb-3">{title}</h2>
            <p className="text-center mb-3">{subTitle}</p>
            <div className="bg-[#F4F4F4] w-full max-w-[341px] mx-auto rounded-lg p-4 flex justify-between">
                <div>
                    <p className="text-blue-500 font-bold text-lg">Due date</p>
                    <p>{dueDate}</p>
                </div>
                <div>
                    <p className="text-orange-600 font-bold text-lg">Penalty fees</p>
                    <p>{fees}</p>
                </div>
            </div>
        </div>
    );
};

export default JoinUsCard;