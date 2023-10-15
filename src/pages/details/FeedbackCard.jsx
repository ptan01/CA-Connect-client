/* eslint-disable react/prop-types */

const FeedbackCard = ({testimonial}) => {
    return (
        <div className="shadow-xl rounded-lg p-5 w-full max-w-[515px]">
            <h1 className="text-4xl font-bold">What people say</h1>
            <p className="font-normal text-xl">{testimonial?.author}</p>
            <p className="font-normal text-xl">{testimonial?.text}</p>

        </div>
    );
};

export default FeedbackCard;