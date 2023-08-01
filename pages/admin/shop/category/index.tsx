import React from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import Button from "@/shared/components/Ui/Button";
import CategoryTable from "@/shared/components/admin/shop/CategoryTable";
import { useGetCategoriesQuery } from "@/services/api/shopSlice";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { CircleLoader } from "@/shared/components/Ui/Loading";
import EmptyState from "@/shared/components/Ui/EmptyState";
import useModal from "@/hooks/useModal";
import AddCategory from "@/shared/components/admin/shop/AddCategory";

const ShopCategory: AppPage = () => {
  const {Modal, setShowModal} = useModal()
  const { data, isLoading, refetch } = useGetCategoriesQuery();
  return (
    <>
      <div>
        <div className="h-40 flex justify-between items-center dash-shade rounded-xl">
          <div className="lg:pl-12">
            <p className="text-2xl fw-600">Product Categories</p>
            <p className="fs-400 w-8/12 mt-2">
              Create categories to group your products being showcased on
              pikaboo store.
            </p>
          </div>
          <div className="lg:pr-8">
            <Button
              title="Add Category"
              altClassName="px-6 border py-2 fw-500 rounded"
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>
        <div className="mt-6 p-5 lg:py-10 dash-shade">
          <div className="flex items-center gap-x-3">
            <TfiLayoutListThumb className="text-2xl" />
            <p className="fw-500">Product Categories Listing</p>
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
                  message="No Product Category Yet"
                />
              </div>
            )}
            {data && !!data.data.length && <CategoryTable refetch={refetch} data={data.data} />}
          </div>
        </div>
      </div>
      <Modal title="Add Category">
        <AddCategory refetch={refetch} close={() => setShowModal(false)}/>
      </Modal>
    </>
  );
};

export default ShopCategory;
ShopCategory.Layout = "Dashboard";
