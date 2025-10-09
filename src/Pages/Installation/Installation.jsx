import React, { useEffect, useState } from 'react';
import InstallApps from './InstallApps';
import { toast, ToastContainer } from 'react-toastify';
import Spinner from '../../Components/Spinner';
import { Link } from 'react-router';

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sortApps, setSort] = useState('none');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const savedList = JSON.parse(localStorage.getItem('Installation'));
      if (savedList) setInstallation(savedList);
      setLoading(false);
    }, 200);
  }, []);

  // setInstallation({savedList})

  const sortItem = (() => {
    if (sortApps === 'price-desc') {
      return [...installation].sort((a, b) => b.downloads - a.downloads);
    } else if (sortApps === 'price-asc') {
      return [...installation].sort((a, b) => a.downloads - b.downloads);
    } else {
      return installation;
    }
  })();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Spinner />
      </div>
    );
  }

  const handleRemove = (id) => {
    const getAppData = JSON.parse(localStorage.getItem('Installation'));
    const removeApp = getAppData.find((app) => app.id === id);
    // console.log(removeApp);
    let updatedList = getAppData.filter((app) => app.id !== id);
    setInstallation(updatedList);
    localStorage.setItem('Installation', JSON.stringify(updatedList));
    toast.error(`${removeApp.title} has been uninstalled!`);
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center text-5xl font-bold">Your Installed Apps</h1>
      <p className=" md:text-lg mt-3 lg:text-xl text-[#627382] text-center">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex justify-between items-center mt-20">
        <div>
          <h3 className="font-bold text-2xl">
            {installation.length} Apps Found
          </h3>
        </div>

        {/* Sort btn */}
        <div>
          <label className="form-control w-full w-x-xs">
            <select
              value={sortApps}
              onChange={(e) => setSort(e.target.value)}
              className="select select-bordered"
            >
              <option value="none">Sort by Size</option>
              <option value="price-desc">High-&gt;Low</option>
              <option value="price-asc">Low-&gt;High</option>
            </select>
          </label>
        </div>
      </div>

      {/* Card Section */}
      <div className="">
        {sortItem.length === 0 ? (
          <div className="flex flex-col items-center justify-center my-35">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-500">No App Found</h1>
            <div className='py-5'>
              <Link to="/"><button className="btn mr-3.5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white transition-transform duration-300 hover:scale-105">Go Back!</button></Link>
              <Link to="/apps"><button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white transition-transform duration-300 hover:scale-105"> Browse apps</button></Link>
            </div>
          </div>
        ) : (
          sortItem.map((install) => (
            <InstallApps
              key={install.id}
              install={install}
              handleRemove={handleRemove}
            />
          ))
        )}
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Installation;
