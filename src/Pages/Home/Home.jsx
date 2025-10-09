import React from 'react';
import Banner from '../../Components/Banner';
import useApps from '../../Hooks/useApps';
import AppPage from '../AppPage/AppPage';
import { Link, useNavigation } from 'react-router';
import Spinner from '../../Components/Spinner';

const Home = () => {
  const { apps, loading } = useApps();
  const navigation = useNavigation();

  const trendingApps = apps.slice(0, 8);

  return navigation.state === "loading" || loading ? (
    <div className="flex justify-center items-center h-[60vh]">
      <Spinner />
    </div>
  ) : (
    <div>
      <Banner />

      <div className="my-10 text-center">
        <h1 className="font-bold text-5xl mb-5">Trending Apps</h1>
        <p className="text-xl text-slate-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {trendingApps.length === 0 ? (
        <div className="flex justify-center items-center my-16">
          <h2 className="text-3xl font-semibold text-gray-500">
            No Apps Found
          </h2>
        </div>
      ) : (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {trendingApps.map((app) => (
            <AppPage key={app.id} app={app} />
          ))}
        </div>
      )}

      <div className="w-11/12 mx-auto my-10 flex justify-center">
        <Link
          to="/apps"
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8"
        >
          Show All
        </Link>
      </div>

      
    </div>
  );
};

export default Home;
