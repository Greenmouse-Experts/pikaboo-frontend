import React from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { useGetOrdersQuery } from "@/services/api/shopSlice";
import OrdersTable from "@/shared/components/admin/shop/OrdersTable";

const ProductOrders: AppPage = () => {
  const {data, isLoading, refetch} = useGetOrdersQuery()
  return (
    <>
      <div>
        <div className="h-40 flex justify-between items-center dash-shade rounded-xl">
          <div className="lg:pl-12">
            <p className="text-2xl fw-600">Product Orders</p>
            <p className="fs-400 w-8/12 mt-2">
              Manage product orders made by pikaboo residents.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded mt-6">
          {data && <OrdersTable data={data?.data?.data} refetch={refetch}/>}
        </div>
      </div>
    </>
  );
};

export default ProductOrders;
ProductOrders.Layout = "Dashboard";
