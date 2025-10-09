import React, { useState } from 'react';
import { useNavigation } from 'react-router';
import useApps from '../../Hooks/useApps';
import AppPage from '../AppPage/AppPage';
import Spinner from '../../Components/Spinner';

const Apps = () => {
  const { apps, loading } = useApps();
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const [searching, setSearching] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearching(true);

    
    setTimeout(() => {
      setSearching(false);
    }, 1000);
  };

  const term = search.trim().toLowerCase();

  const searchApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  return navigation.state === 'loading' || loading ? (
    <div className="flex justify-center items-center h-[60vh]">
      <Spinner />
    </div>
  ) : (
    <div className="w-11/12 mx-auto py-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our All Applications
        </h1>
        <p className="text-gray-500 lg:text-lg">
          Explore all apps on the market developed by us. We code for millions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10 mb-6 gap-4">
        <p className="text-xl md:text-2xl font-semibold text-gray-800">
          ({searchApps.length}) Apps Found
        </p>
        <div className="w-full md:w-1/3">
          <label className="relative block w-full">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={handleSearch}
              type="search"
              required
              placeholder="Search Apps"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </label>
        </div>
      </div>

      {searchApps.length === 0 ? (
        <div className="flex justify-center items-center mt-20">
          <h1 className="font-bold text-4xl md:text-5xl text-gray-400">
            No App Found
          </h1>
        </div>
      ) : searching ? (
        <div className="flex justify-center items-center mt-20">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7 mt-6">
          {searchApps.map((app) => (
            <AppPage key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
