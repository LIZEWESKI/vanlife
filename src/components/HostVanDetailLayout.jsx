import React ,{useState,useEffect} from 'react'
import { useParams,Link , NavLink ,Outlet} from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import HostVanDetail from './HostVanDetail';
import ClipLoader from "react-spinners/ClipLoader";
import './HostVanDetailLayout.css'
const HostVanDetailLayout = () => {
  const {id} = useParams()
  const [hostedVanDetail,setHostedVanDetail] = useState(null);
  useEffect(()=> {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setHostedVanDetail(data.vans[0]))
        .catch(error => console.error('Error:', error));  
  },[id])
  return (
    <main className='host-van-details__main'>
        <div className="link--wrapper">
          <FaArrowLeftLong style={{ color: '#858585', fontSize: '16px' }}/>
          <Link className='link--vans' to=".." relative='path'>Back to all vans</Link>
        </div>
        <div className="host-van-details__wrapper">
          {hostedVanDetail ? 
            <HostVanDetail hostedVanDetail={hostedVanDetail}/>
            : 
            <ClipLoader/>
          }
          <nav className='host-van-details__nav'>
            <ul>
              <li><NavLink to="." end className={({isActive})=> isActive ? 'link--selected' : null }>Details</NavLink></li>
              <li><NavLink to="pricing" className={({isActive})=> isActive ? 'link--selected' : null }>Pricing</NavLink></li>
              <li><NavLink to='photos' className={({isActive})=> isActive ? 'link--selected' : null }>Photos</NavLink></li>
            </ul>
          </nav>
          <Outlet context={{hostedVanDetail}}/>
        </div>
    </main>
  )
}

export default HostVanDetailLayout