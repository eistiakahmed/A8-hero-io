import React, { useState } from 'react';
import useApps from '../../Hooks/useApps';
import AppPage from '../AppPage/AppPage';
import Spinner from '../../Components/Spinner';

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState('');

  const term = search.trim().toLocaleLowerCase();

  const searchApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-bold ">Our All Applications</h1>
        <p className="lg:text-xl text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center mt-10 mb-4">
        <p className="text-2xl font-semibold">
          ({searchApps.length}) Apps Found
        </p>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
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
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="search Apps"
            />
          </label>
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : searchApps.length === 0 ? (
        <div className="flex justify-center items-center mt-[50px]">
          <h1 className="font-bold text-5xl">No App Found</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7 mt-5">
          {searchApps.map((app) => (
            <AppPage key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
