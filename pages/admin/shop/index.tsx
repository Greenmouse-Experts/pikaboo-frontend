import React from 'react'
import { AppPage } from '@/shared/components/layouts/Types'
import Button from '@/shared/components/Ui/Button'
import useModal from '@/hooks/useModal'
import CreateProduct from '@/shared/components/admin/shop/CreateProduct'
import { useGetProductQuery } from '@/services/api/shopSlice'
import { TfiLayoutListThumb } from 'react-icons/tfi'
import EmptyState from '@/shared/components/Ui/EmptyState'
import { CircleLoader } from '@/shared/components/Ui/Loading'
import ProductListing from '@/shared/components/admin/shop/ProductListing'


const ShopPage:AppPage = () => {
  const {Modal, setShowModal} = useModal()
  const {data, isLoading, refetch} = useGetProductQuery()
  return (
    <>
        <div>
        <div className="h-40 flex justify-between items-center dash-shade rounded-xl">
          <div className="lg:pl-6">
            <p className="text-2xl fw-600">Pikaboo Products</p>
            <p className="fs-400 w-8/12 mt-2">
              Create and oversee a diverse portfolio of products tailored for pikaboo users, ensuring a seamless sales process and exceptional user experience.
            </p>
          </div>
          <div className="lg:w-[300px]">
            <Button
              title="Add Product"
              altClassName="px-6 border py-2 fw-500 rounded"
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>
        <div className='mt-6 p-5 lg:py-12 dash-shade'>
          <div className="flex items-center gap-x-3 border-b pb-1">
          <TfiLayoutListThumb className="text-2xl" />
            <p className='fw-500'>Product Listing ({data?.data?.length})</p>
          </div>
          <div>
          {isLoading && (
              <div className="flex justify-center py-12">
                <CircleLoader size="100" />
              </div>
            )}
            {data && !data.data.length && (
              <div className="py-12">
                <EmptyState
                  imageClass="w-24 mx-auto"
                  message="No Product is created Yet"
                />
              </div>
            )}
            {
              data && !!data.data.length && <ProductListing refetch={refetch} data={data?.data}/>
            }
          </div>
        </div>
        </div>
        <Modal title='Create a New Product'>
          <CreateProduct close={() => setShowModal(false)} refetch={refetch}/>
        </Modal>
    </>
  )
}

export default ShopPage
ShopPage.Layout = 'Dashboard'