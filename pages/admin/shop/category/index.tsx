import React from 'react'
import { AppPage } from '@/shared/components/layouts/Types'


const ShopCategory:AppPage = () => {
  return (
    <>
        <div>
        <div className="h-40 flex items-center dash-shade rounded-xl">
          <div className="pl-12">
            <p className="text-2xl fw-600">Product Categories</p>
            <p className="fs-400 w-8/12 mt-2">
              Create categories to group your products being showcased on pikaboo store.
            </p>
          </div>
        </div>
        </div>
    </>
  )
}

export default ShopCategory
ShopCategory.Layout = 'Dashboard'