import React from 'react';
import Banner from '../../Components/Banner';
import useApps from '../../Hooks/useApps';
import AppPage from '../AppPage/AppPage';
import { Link } from 'react-router';
// import { formatNumber } from '../../FormatNumber/FormatNumber';

const Home = () => {
  
  const {apps} = useApps()

  const trendingApps = apps.slice(0,8)
  // console.log(trendingApps)

  return (
    <div>
       <Banner />
        <div className='my-10'>
          <h1 className='font-bold text-5xl text-center mb-5'>Trending Apps</h1>
          <p className='text-xl text-center text-slate-500'>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7'> 
        {
          trendingApps.map(app => <AppPage key={app.id} app={app}/>)
        }
        </div>

       <div className='w-11/12 mx-auto my-10  flex justify-center'>
         <Link to="/apps" className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8'>Show All</Link>
       </div>
    </div>
  );
};

export default Home;