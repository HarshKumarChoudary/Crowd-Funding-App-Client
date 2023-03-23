import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile, Disconnect, Archive, Withdraw } from './pages';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home status='1' title='All Ongoing Campaigns'/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/disconnect" element={<Disconnect />} />
        </Routes>
      </div>
    </div>
  )
}

export default App