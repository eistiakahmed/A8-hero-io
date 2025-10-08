import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import downloadImg from '../../assets/icon-downloads.png';
import ratingImg from '../../assets/icon-ratings.png';
import reviewImg from '../../assets/icon-review.png';
import { formatNumber } from '../../FormatNumber/FormatNumber';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import Spinner from '../../Components/Spinner';
import { toast, ToastContainer } from 'react-toastify';
import AppDetailsError from '../Error/AppDetailsError';

const AppsDetails = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const { id } = useParams();
  const { apps, loading, error } = useApps();

  const appsFilter = apps.find((app) => app.id === Number(id));

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem('Installation'));
    const isInstalled = existingList.some((a) => a.id === Number(id));
    setToggleBtn(isInstalled);
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <AppDetailsError />;
  if (!appsFilter) return <AppDetailsError />;

  const {
    image,
    title,
    companyName,
    ratingAvg,
    downloads,
    reviews,
    size,
    ratings,
    description,
  } = appsFilter;

  const handleAddToInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem('Installation')) || [];
    const isDuplicated = existingList.some((a) => a.id === appsFilter.id);
    if (isDuplicated) return toast.warning('Already Added');

    const updatedList = [...existingList, appsFilter];
    localStorage.setItem('Installation', JSON.stringify(updatedList));
    toast.success(`${title} Installed Successfully!`);
    setToggleBtn(true);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="md:w-[400px]">
          <img
            src={image}
            alt={title}
            className="w-[220px] h-[220px] md:w-[280px] md:h-[280px] lg:w-[316px] lg:h-[316px] rounded-3xl object-cover"
          />
        </div>

        <div className="w-full text-center md:text-left">
          <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
          <p className="text-slate-500 mt-1">
            Developed by{' '}
            <span className="text-blue-600 font-medium">{companyName}</span>
          </p>

          <div className=" border-b border-slate-300 my-4"></div>

          <div className="flex md:flex-row  flex-col gap-6 mt-6">
            <div className="flex flex-col items-center md:items-start">
              <img src={downloadImg} alt="" className="w-8 h-8" />
              <p className="text-slate-600 mt-2 text-sm md:text-base">
                Downloads
              </p>
              <h3 className="font-extrabold text-3xl md:text-4xl">
                {formatNumber(downloads)}
              </h3>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <img src={ratingImg} alt="" className="w-8 h-8" />
              <p className="text-slate-600 mt-2 text-sm md:text-base">
                Average Ratings
              </p>
              <h3 className="font-extrabold text-3xl lg:text-4xl">
                {ratingAvg}
              </h3>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <img src={reviewImg} alt="" className="w-8 h-8" />
              <p className="text-slate-600 mt-2 text-sm md:text-base">
                Total Reviews
              </p>
              <h3 className="font-extrabold text-3xl lg:text-4xl">
                {formatNumber(reviews)}
              </h3>
            </div>
          </div>

          {/* Install btn */}
          <div className="flex justify-center md:justify-start">
            <button
              onClick={handleAddToInstallation}
              disabled={toggleBtn}
              className={`mt-8 px-6 py-2 rounded-2xl transition-all text-white ${
                toggleBtn ? 'bg-green-400' : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {toggleBtn ? 'Installed' : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-300 my-4"></div>

      <div className="">
        <h1 className="font-semibold text-2xl my-3">Rating</h1>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={ratings}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Bar dataKey="count" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="border-b border-slate-300 my-4"></div>
      <h1 className="text-2xl font-bold my-2.5">Description</h1>
      <p className="text-slate-600">{description}</p>

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

export default AppsDetails;
