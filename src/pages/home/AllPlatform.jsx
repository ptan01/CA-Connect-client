import { BiSolidSearch } from "react-icons/bi";
import { FaPeopleArrows } from "react-icons/fa";
import { RiFileList3Fill, RiGraduationCapFill } from "react-icons/ri";
import mimg from "../../assets/Pexels Photo by Charlotte May.png"
import wimg from "../../assets/Pexels Photo by MART PRODUCTION.png"

const AllPlatform = () => {
    return (
        <div className="lg:flex justify-center items-center gap-4 container mt-20">
            <div className="lg:w-1/2">

                <h1 className="text-6xl font-bold leading-[95px]"><span className="bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text">All-in-One platform</span><br /> that Makes Easier</h1>
                <p className="text-2xl my-8">We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>

                <div className="grid md:grid-cols-2 gap-16">
                    <div className="flex gap-2">
                        <p><BiSolidSearch className="text-6xl text-blue-400"></BiSolidSearch></p>
                        <p className="w-[205px] font-normal text-xl"><span className="font-semibold">SEARCH</span> for vital company information </p>
                    </div>
                    <div className="flex gap-2">
                        <p><FaPeopleArrows className="text-6xl text-blue-400"></FaPeopleArrows></p>
                        <p className="w-[205px] font-normal text-xl"><span className="font-semibold">CONNECT</span>with the resources to meet your business needs</p>
                    </div>
                    <div className="flex gap-2">
                        <p><RiFileList3Fill className="text-6xl text-blue-400"></RiFileList3Fill></p>
                        <p className="w-[205px] font-normal text-xl"><span className="font-semibold">RESEARCH</span>and generate reports that drive growth </p>
                    </div>
                    <div className="flex gap-2">
                        <p><RiGraduationCapFill className="text-6xl text-blue-400"></RiGraduationCapFill></p>
                        <p className="w-[205px] font-normal text-xl"><span className="font-semibold">ACADEMY</span>to give you the skills for success in your career</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between">
                    <div className="lg:relative top-14 left-10">
                        <p className="bg-pink-200 w-full max-w-[271px] rounded-s-lg !rounded-se-lg">Hey, check out CA Connect services.</p>
                        <p className="bg-pink-200 w-full max-w-[310px] rounded-s-lg !rounded-se-lg my-3">I learned from their videos, got my first job.</p>
                        <p className="bg-pink-200 w-full max-w-[331px] rounded-s-lg !rounded-se-lg">You won&apos;t be disappointed with their services.</p>
                    </div>
                    <img src={mimg} alt="" />
                </div>
                <div className="flex justify-between">
                    <img src={wimg} alt="" />
                    <div className="lg:relative top-14 left-10">
                        <p className="bg-sky-200 w-full max-w-[355px] rounded-e-lg !rounded-ss-lg">I got a perfect analysis report from them too</p>
                        <p className="bg-sky-200 w-full max-w-[130px] rounded-e-lg !rounded-ss-lg my-3">Oh, that&apos;s great.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPlatform;