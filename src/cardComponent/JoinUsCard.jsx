
const JoinUsCard = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-[405px] border-2">
            <div className="text-white relative bottom-9 -left-9 w-[46px] p-2 h-[46px] bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-2xl font-bold rounded-lg">
                1<sup>st</sup>
            </div>
            <h2 className="text-xl font-bold text-center">Commencemet of bussiness</h2>
            <p className="text-center">Invested shareholders must confirm payment and office address</p>
            <div className="bg-[#F4F4F4] w-full max-w-[341px] mx-auto rounded-lg p-4 flex justify-between">
                <div>
                    <p className="text-blue-500 font-bold text-lg">Due date</p>
                    <p>Within 30 Days</p>
                </div>
                <div>
                    <p className="text-orange-600 font-bold text-lg">Penalty fees</p>
                    <p>$300 per month</p>
                </div>
            </div>
        </div>
    );
};

export default JoinUsCard;