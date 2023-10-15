import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import ProposalCard from "./ProposalCard";
import FeedbackCard from "./FeedbackCard";

const Details = () => {

    const id = useParams().id;

    const [charteredDetails, setCharteredDetails] = useState({})

    useEffect(() => {
        axios(`https://chartered-accountants-server-ptan01.vercel.app/charters-details/${id}`)
            .then(res => {
                setCharteredDetails(res.data)
            })
    }, [id])

    console.log(charteredDetails)

    const { name, intro, rating, reviewCount, image, about,testimonial } = charteredDetails

    return (
        <div className="lg:flex-row-reverse lg:flex">
            <div>
                {/* About Part of details */}
                <img className="rounded-xl" src={image} alt="" />
                <h1 className="text-4xl font-bold">About {name}</h1>
                <div className="flex justify-between gap-10">
                    <div className="px-5 py-5">
                        <p className="font-bold text-base text-[#999999]">From</p>
                        <p>{about.from}</p>
                    </div>
                    <div className="px-5 py-5">
                        <p className="font-bold text-base text-[#999999]">PARTNER SINCE</p>
                        <p>{about.partnerSince}</p>
                    </div>
                    <div className="px-5 py-5">
                        <p className="font-bold text-base text-[#999999]">AVERAGE RESPONSE TIME</p>
                        <p>{about.averageResponseTime}</p>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-base text-[#999999]">ABOUT</p>
                    <p className="font-normal text-xl">{about.description}</p>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h1 className="font-bold text-base text-[#999999]">SERVICES I OFFER</h1>
                        <ul className="list-disc font-normal text-xl    ">
                            {
                                about.services.map((service, idx) => <li key={idx}>{service}</li>)
                            }
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold text-base text-[#999999]">WHY ME?</h1>
                        <ul className="list-disc font-normal text-xl    ">
                            {
                                about.benefits.map((benefit, idx) => <li key={idx}>{benefit}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="space-y-7">
                <h1 className="font-bold text-4xl">{name}</h1>
                <p className="font-normal text-xl">{intro}</p>
                <p className="flex items-center gap-2"><FaStar className="text-blue-400"></FaStar>{rating} ({reviewCount})</p>
                <ProposalCard data={charteredDetails}></ProposalCard>
                <FeedbackCard testimonial={testimonial}></FeedbackCard>
            </div>

        </div>
    );
};

export default Details;