import JoinUsCard from "../../cardComponent/JoinUsCard";

const JoinUs = () => {

    const cardData = [
        {
            title: "commencement of business",
            subTitle: "Invested shareholders must confirm payment and office address",
            dueDate: "within 180 days",
            fees: "₹300 per month",
        },
        {
            title: "Auditor Appointment",
            subTitle: "Company informs new auditor and submits ADT.1 form to ROC.",
            dueDate: "Within 30 days ",
            fees: "₹300 per month",
        },
        {
            title: "DIN eKYC",
            subTitle: "Directors share personal information for identification & verification ",
            dueDate: "Every Year",
            fees: "₹5000 one time",
        },
        {
            title: "DPT-3",
            subTitle: "Companies report money taken from people to ROC; auditors confirm details.",
            dueDate: "Within 30 days ",
            fees: "₹300 per month",
        },
        {
            title: "MCA Form AOC-4",
            subTitle: "It's like an official report card for a company's documents",
            dueDate: "On or Before 30th November ",
            fees: "₹200 per day (No upper limit)*",
        },
        {
            title: "MCA Form MGT-7",
            subTitle: "Companies must annually report activities and finances to the registrar.",
            dueDate: "On or Before 31st December",
            fees: "₹200 per day(No upper limit)* ",
        },
    ]


    return (
        <div className="mt-[132px] md:px-3">
            <div>
                <h1 className="font-bold text-6xl text-center">Want to <span className='bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text'>Join</span> Us</h1>
                <p className="text-2xl font-normal text-center mt-4">To remain with us, it is essential that you diligently follow the steps provided</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:justify-center gap-8 mt-20">
                {
                    cardData.map((data, idx) => <JoinUsCard key={idx} cardData={data}></JoinUsCard>)
                }
            </div>
            <p className="text-center my-4">* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 every day until you file the form . There is no maximum penalty amount. So, if you don&apos;t file the form for a year, you will owe ₹73,000 per form</p>
        </div>
    );
};

export default JoinUs;