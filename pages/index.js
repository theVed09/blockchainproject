import React, { useContext, useEffect, useState } from 'react'

import { TrackingContext } from '@/conetxt/Tracking'
import Navbar from '@/Components/Navbar'
import Services from '@/Components/Services'
import Table from '@/Components/Table'
import Form from '@/Components/Form'
import Profile from '@/Components/Profile'
import CompleteShipment from '@/Components/CompleteShipment'
import GetShipment from '@/Components/GetShipment'
import StartShipment from '@/Components/StartShipment'
import Footer from '@/Components/Footer'

const Dashboard = () => {
  const {
    currentUser,
    createShipment,
    getAllShipment,completeShipment,getShipment,startShipment,getShipmentsCount
  }=useContext(TrackingContext)
  const [createShipmentModel,setCreateShipmentModel]=useState(false)
  const [openProfile,setOpenProfile]=useState(false)
  const [startModal,setStartModal]=useState(false)
  const [completeModal,setCompleteModal]=useState(false)
  const [getModel,setGetModel]=useState(false)
  //data state variable
  const [allShipmentsdata,setallShipmentsdata]=useState()
  useEffect(()=>{
    const getCampaignsData=getAllShipment()
    return async()=>{
      const allData=await getCampaignsData
      setallShipmentsdata(allData)
    }

  },[])



  return (


    <div>
        
        <Navbar/>
        <Services
        setOpenProfile={setOpenProfile}
        setCompleteModal={setCompleteModal}
        setGetModel={setGetModel}
        setStartModal={setStartModal}
        />
        <Table
        setCreateShipmentModel={setCreateShipmentModel}
        allShipmentsdata={allShipmentsdata}
        />
        <Form
        createShipmentModel={createShipmentModel}
        createShipment={createShipment}
        setCreateShipmentModel={setCreateShipmentModel}
        />
        <Profile

                currentUser={currentUser}
                openProfile={openProfile}
                setOpenProfile={setOpenProfile}
                getShipmentsCount={getShipmentsCount}


        />
        <CompleteShipment
        completeModal={completeModal}
        setCompleteModal={setCompleteModal}
        completeShipment={completeShipment}
        />
        <GetShipment
        getModel={getModel}
        setGetModel={setGetModel}
        getShipment={getShipment}
        />
        <StartShipment
        startModal={startModal}
        setStartModal={setStartModal}
        startShipment={startShipment}
        />
       { //<Footer/>
       }
        </div>
  )
}

export default Dashboard