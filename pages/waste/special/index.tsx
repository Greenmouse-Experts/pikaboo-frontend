import { useGetSpecialQuery } from '@/services/api/wasteSlice'
import EmptyState from '@/shared/components/Ui/EmptyState'
import { CircleLoader } from '@/shared/components/Ui/Loading'
import { AppPage } from '@/shared/components/layouts/Types'
import WasteSpecialRequestTable from '@/shared/components/waste/special/WasteSpecialTable'
import React from 'react'
import { MdFormatListBulletedAdd } from 'react-icons/md'

const WasteManagerSpecialRequests: AppPage = () => {
    const {data, isLoading, refetch} = useGetSpecialQuery()
  return (
    <>
        <div>
        <div>
        <div className="h-40 bg-waste bg-cover bg-center flex justify-between items-center dash-shade rounded-xl">
          <div className="pl-12 text-white">
            <p className="text-2xl fw-600">Special Requests</p>
            <p className="fs-400 mt-2">
              Special requests for pickup from residents.
            </p>
          </div>
        </div>
        <div className="mt-5 lg:mt-12 dash-shade p-4 lg:p-8 rounded-xl">
          <div className="flex items-center gap-x-2">
            <MdFormatListBulletedAdd className="text-2xl text-primary" />
            <p className="fw-500">Residents Special Requests</p>
          </div>
          <div className="mt-5">
            {isLoading && (
              <div className="flex justify-center py-12">
                <CircleLoader size="100" />
              </div>
            )}
            {data && !data?.data?.length && (
              <div className="py-12">
                <EmptyState
                  imageClass="w-24 mx-auto"
                  message="No Product is created Yet"
                />
              </div>
            )}
            {data && !!data?.data?.length && (
              <WasteSpecialRequestTable refetch={refetch} data={data?.data} />
            )}
          </div>
        </div>
      </div>
        </div>
    </>
  )
}

export default WasteManagerSpecialRequests
WasteManagerSpecialRequests.Layout = 'Dashboard'