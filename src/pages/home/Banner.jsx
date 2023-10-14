import img1 from '../../assets/Picture.png'
import img2 from '../../assets/Picture (1).png'
import img3 from '../../assets/Picture (2).png'


const Banner = () => {
    return (
        <div className='lg:flex justify-between items-center h-full min-h-[803px]'>
            <div>
                <div className='lg:leading-[80px]'>
                    <h1 className="text-6xl font-bold">Find <span className='bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text'>Partners</span> (CAs) <br /> available online</h1>
                    <p> <span className="font-semibold">CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
                </div>
                <div className="lg:flex md:flex ">
                    <input className="border w-full max-w-[484px] h-[73px] rounded-xl" type="text" name="" id="" />
                    <br />
                    <button className="bg-blue-500 text-white px-4 py-2 h-[73px] w-[186px] rounded-lg hover:bg-blue-700">Search</button>
                </div>
            </div>
            <div className='lg:flex md:flex gap-4 block'>
                <img className='lg:relative md:relative top-20' src={img1} alt="" />
                <img className='' src={img2} alt="" />
                <img className='lg:relative md:relative top-10' src={img3} alt="" />
            </div>
        </div>
    );
};

export default Banner;