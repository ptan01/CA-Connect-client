import img1 from '../../assets/Picture.png'
import img2 from '../../assets/Picture (1).png'
import img3 from '../../assets/Picture (2).png'
import { useRef, useState } from 'react';
import axios from 'axios';
import CharteredCard from '../../cardComponent/CharteredCard';
import Swal from 'sweetalert2';


const Banner = () => {

    const inputRef = useRef(null)
    const [charteredData, setCharteredData] = useState([])

    const handleSearch = () => {
        const inputValue = inputRef.current.value;
        if (inputValue.length <= 0) {
            console.log("please input a value")
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Input Field Is Empty Plese Write Something',
                showConfirmButton: false,
                timer: 1500
            })
            return
        }
        console.log(inputValue)
        axios(`https://chartered-accountants-server-ptan01.vercel.app/search-charters/${inputValue}`)
            .then(res => {
                setCharteredData(res.data)
                if(res.data <= 0){
                    Swal.fire('NO file Matched !')
                }
            })
    }
    
  

    return (
        <>
            <div className='lg:flex justify-between items-center h-full min-h-[803px] md:px-3'>
                <div>
                    <div className='lg:leading-[80px]'>
                        <h1 className="text-6xl font-bold">Find <span className='bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text'>Partners</span> (CAs) <br /> available online</h1>
                        <p> <span className="font-semibold">CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
                    </div>
                    <div className="lg:flex md:flex ">
                        <input className="border text-xl p-5 text-blue-500 w-full max-w-[484px] h-[73px] rounded-xl" type="text" ref={inputRef} name="search" id="" placeholder='please Search Charter Name' />
                        <br />
                        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 h-[73px] w-[186px] rounded-lg hover:bg-blue-700">Search</button>
                    </div>
                </div>
                <div className='lg:flex md:flex gap-4 block'>
                    <img className='lg:relative md:relative top-20' src={img1} alt="" />
                    <img className='' src={img2} alt="" />
                    <img className='lg:relative md:relative top-10' src={img3} alt="" />
                </div>
            </div>
            <div className="lg:flex justify-start items-center">
               
                {
                    charteredData.map(chartere => <CharteredCard key={chartere._id} data={chartere} />)
                }
            </div>
        </>
    );
};

export default Banner;