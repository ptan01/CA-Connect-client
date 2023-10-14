import { BiSolidSearch } from "react-icons/bi";
import { FaPeopleArrows } from "react-icons/fa";
import { RiFileList3Fill, RiGraduationCapFill } from "react-icons/ri";


const AllPlatform = () => {
    return (
        <div>
            <div>
                <h1 className="text-6xl font-bold"><span className="bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text">All-in-One platform</span><br /> that Makes Easier</h1>
                <p className="text-2xl">We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
                <div className="grid grid-cols-2 gap-16">
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
                <p>Hey, check out CA Connect services.</p>
            </div>
        </div>
    );
};

export default AllPlatform;