import useModal from "@/hooks/useModal";
import { formatAsNgnMoney } from "@/shared/utils/format";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import ReusableModal from "../../helpers/ReusableModal";
import { toast } from "react-toastify";
import { useLazyDeleteProductQuery } from "@/services/api/shopSlice";
import { FaCamera, FaEdit } from "react-icons/fa";
import EditProduct from "./EditProduct";
import Paginate from "../../Ui/Paginate";
import EditImages from "./EditImages";

interface Props {
  data: any;
  refetch: () => void;
}
const ProductListing: FC<Props> = ({ data, refetch }) => {
  const [deleteProd] = useLazyDeleteProductQuery();
  const { Modal, setShowModal } = useModal();
  const { Modal: Edit, setShowModal: showEdit } = useModal();
  const { Modal: Images, setShowModal: showImages } = useModal();
  const [isBusy, setIsBusy] = useState(false);
  const [selectedItem, setSeletedItem] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 10,
      behavior: "smooth",
    });
  };
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(data?.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const openEdit = (item: any) => {
    setSeletedItem(item);
    showEdit(true);
  };
  const openImage = (item: any) => {
    setSeletedItem(item);
    showImages(true);
  };
  const openDelete = (item: any) => {
    setSeletedItem(item);
    setShowModal(true);
  };
  const deleteProduct = async (item: any) => {
    setIsBusy(true);
    const formData = new FormData();
    formData.append("product_id", item);
    await deleteProd(formData)
      .then((res: any) => {
        if (res.data.success) {
          toast.success(res.data.message);
          setIsBusy(false);
          refetch();
          setShowModal(false);
        } else {
          toast.error(res.data.message);
          setIsBusy(false);
        }
      })
      .catch((err) => {
        toast.error(err?.error?.data.message);
        setIsBusy(false);
      });
  };
  return (
    <>
      <div className="mt-8">
        {currentPosts.map((item: any, index: number) => (
          <div
            className="relative border lg:flex gap-x-3 p-3 rounded mt-4"
            key={index}
          >
            <div className="w-[100px] overflow-x-hidden pb-2">
              <div className="flex w-[300px] gap-x-1 scroll-pro overflow-x-auto ">
              {!!item.images.length &&
                item.images.map((item: any) => {
                  return (
                    <div className="w-16 h-16">
                      <Image
                      key={item.name}
                      src={item.name}
                      alt="image"
                      width={100}
                      height={100}
                      className="w-full h-full circle border-2 shadow-lg"
                    />
                    </div>
                  );
                })}
              </div>
              {!item.images.length && (
                <div>
                  <Image
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1688402669/pikaboo/pickaboo_logo_eatts5.png"
                    alt="image"
                    width={100}
                    height={100}
                    className="w-16 circle border-2 shadow-lg"
                  />
                </div>
              )}
            </div>
            <div className="lg:w-5/12">
              <p className="text-xl fw-500">{item.name}</p>
              <p className="fs-500">{item.description}</p>
            </div>
            <div className="lg:w-3/12 lg:block flex items-center lg:my-0 my-4 justify-between lg:self-center lg:block">
              <p className="text-xl fw-500">{formatAsNgnMoney(item.price)}</p>
              <p className="fs-500 fw-500">{item.stock} unit(s)</p>
            </div>
            <div className="lg:w-3/12 lg:self-center">
              <p className="fw-500">
                <span className="text-primary fw-500 fs-400 pr-2">
                  Category:
                </span>
                {item.category.name}
              </p>
              <p className="fw-500 mt-2">
                <span className="text-primary fw-500 fs-400 pr-2">Weight:</span>
                {item.weight}kg
              </p>
            </div>
            <div className="absolute flex gap-x-2 top-2 right-4">
              <FaEdit className="text-primary" onClick={() => openEdit(item)} />
              <FaCamera className="text-blue-300" onClick={() => openImage(item)}/>
              <MdDeleteForever
                className="text-xl text-red-600 cursor-pointer"
                onClick={() => openDelete(item.id)}
              />
            </div>
          </div>
        ))}
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={data?.length}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      </div>
      <Modal title="" noHead>
        <ReusableModal
          title="Are you sure you want to delete this product"
          closeModal={() => setShowModal(false)}
          cancelTitle="No, Cancel"
          actionTitle="Yes, Delete"
          action={() => deleteProduct(selectedItem)}
          isBusy={isBusy}
        />
      </Modal>
      <Edit title="Edit this product">
        <EditProduct
          close={() => showEdit(false)}
          refetch={refetch}
          item={selectedItem}
        />
      </Edit>
      <Images title="Edit Product Images">
        <EditImages
          close={() => showImages(false)}
          refetch={refetch}
          item={selectedItem}
        />
      </Images>
    </>
  );
};

export default ProductListing;
