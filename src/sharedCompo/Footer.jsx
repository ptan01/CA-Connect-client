import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';


const Footer = () => {


    return (
        <footer className=" mt-20 bg-gradient-to-r from-[#0076CE] to-[#9400D3]">
            <div className=" pt-10 lg:flex justify-evenly items-center text-white">
                <div className="p-5">
                    <h2 className="font-bold text-3xl">CA Connect</h2>
                    <p className="w-[300px]">Indias first platform dedicated to simplifying partner search</p>
                </div>
                <div className="overflow-x-auto ">
                    <div className="min-w-[600px] w-full"> {/* Set a minimum width for the table */}
                        <table className="table-auto border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">COMPANY</th>
                                    <th className="px-4 py-2">SOLUTIONS</th>
                                    <th className="px-4 py-2">RESOURCES</th>
                                    <th className="px-4 py-2">SUPPORT</th>
                                    <th className="px-4 py-2">LEGAL</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr>
                                    <td className="text-center px-4 py-2">About</td>
                                    <td className="text-center px-4 py-2">Search</td>
                                    <td className="text-center px-4 py-2">Blogs</td>
                                    <td className="text-center px-4 py-2">Help</td>
                                    <td className="text-center px-4 py-2">Privacy</td>
                                </tr>
                                <tr>
                                    <td className="text-center px-4 py-2">Pricing</td>
                                    <td className="text-center px-4 py-2">Connect</td>
                                    <td className="text-center px-4 py-2">Forms</td>
                                    <td className="text-center px-4 py-2">Contact Us</td>
                                    <td className="text-center px-4 py-2">Terms</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <hr className='border border-white my-8' />
                <div className='md:flex justify-around mb-5'>
                    <p className="text-white">Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra  </p>
                    <div className='flex gap-4'>
                        <BsFacebook className='text-white text-2xl'></BsFacebook>
                        <BsInstagram className='text-white text-2xl'></BsInstagram>
                        <BsLinkedin className='text-white text-2xl'></BsLinkedin>
                        <BsWhatsapp className='text-white text-2xl'></BsWhatsapp>
                    </div>
                </div>
                <div className='bg-black'>
                    <p className='text-white py-4 text-center'>Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;