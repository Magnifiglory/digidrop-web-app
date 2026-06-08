import React from 'react'
import DashboardClient from '../../_components/dashboard/dashboard-client'
import { getProfile } from '@/app/data/profile/profile';



const Dashboard = async () => {
  const profile = await getProfile();
  return (
    <DashboardClient profile={profile} />
  )
}

export default Dashboard