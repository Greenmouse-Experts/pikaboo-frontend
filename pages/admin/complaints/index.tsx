import { useGetFeedsQuery } from '@/services/api/routineSlice'
import Tabs from '@/shared/components/Ui/Tabs'
import UsersFeeds from '@/shared/components/admin/complaints/feeds'
import { AppPage } from '@/shared/components/layouts/Types'
import React from 'react'

const ComplaintsPage:AppPage = () => {
  const {data, isLoading} = useGetFeedsQuery()
  const tab = [
    {
      title: <p>Home Residence</p>,
      content: data && <UsersFeeds data={data?.data.filter((where:any) => where.user.account_type === "Home Residence")}/>
    },
    {
      title: <p>Service Personnel</p>,
      content: data && <UsersFeeds data={data?.data.filter((where:any) => where.user.account_type === "Service Personnel")}/>
    },
    {
      title: <p>Waste Manager</p>,
      content: data && <UsersFeeds data={data?.data.filter((where:any) => where.user.account_type === "Waste Manager")}/>
    },
    {
      title: <p>Field Operator</p>,
      content: data && <UsersFeeds data={data?.data.filter((where:any) => where.user.account_type === "Field Operator")}/>
    }
  ]
  return (
    <div>
      <div className="h-40 bg-field flex items-center dash-shade rounded-xl">
          <div className="pl-12 text-white">
            <p className="text-2xl fw-600">Users Feedback</p>
            <p className="fs-400 w-8/12 mt-2">
              PikaBoo users submits feddback on the operational system of the app.
            </p>
          </div>
        </div>
        
        <div className='mt-6 px-3'>
          <Tabs tabs={tab} />
          </div>
    </div>
  )
}

export default ComplaintsPage
ComplaintsPage.Layout = 'Dashboard'