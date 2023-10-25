import {
  useLazyAddProductImageQuery,
  useLazyRemoveProductImageQuery,
} from "@/services/api/shopSlice";
import Image from "next/image";
import React, { FC, useState } from "react";
import { MdCancel } from "react-icons/md";
import { toast } from "react-toastify";

interface Props {
  item: any;
  close: () => void;
  refetch: () => void;
}
const EditImages: FC<Props> = ({ item, close, refetch }) => {
  const { images } = item;
  const [addImage] = useLazyAddProductImageQuery();
  const [img, setImg] = useState<any[]>(images);
  const [isBusy, setIsBusy] = useState(false);
  const [isDel, setIsDel] = useState(false);
  const [remove] = useLazyRemoveProductImageQuery();

  const handleImage = (e: any) => {
    const image = Array.from(e.target.files);
    if (image) {
      handleAdd(image);
    }
  };
  const handleAdd = (image: any) => {
    setIsBusy(true);
    const img = new FormData();
    for (let i = 0; i < image.length; i++) {
      img.append(`images[]`, image[i]);
    }
    img.append("product_id", item.id);
    addImage(img)
      .then((res: any) => {
        if (res.isSuccess) {
          toast.success(res.data.message);
          setIsBusy(false);
          refetch();
          close();
        } else {
          Object.entries<any>(res?.data?.errors).forEach(([key, value]) => {
            toast.error(value[0]);
          });
        }
      })
      .catch((err) => {});
  };
  const removeImage = (id: any) => {
    setIsDel(true);
    const payload = {
      product_image_id: id,
    };
    remove(payload)
      .then((res: any) => {
        if (res.isSuccess) {
          toast.success(res.data.message);
          setIsDel(false);
          refetch();
          close();
        } else {
          Object.entries<any>(res?.data?.errors).forEach(([key, value]) => {
            toast.error(value[0]);
          });
          setIsDel(false);
        }
      })
      .catch((err) => {});
  };
  return (
    <div className="min-h-[250px] max-h-[350px] overflow-y-auto">
      {!isBusy && (
        <div className="relative w-full">
          <p className="fw-600 text-end underline">Add New</p>
          <input
            type="file"
            accept="image/*"
            className="absolute top-0 right-0 w-24 opacity-0"
            multiple
            onChange={handleImage}
          />
        </div>
      )}
      <div className="grid grid-cols-2 gap-2 mt-1">
        {!!img.length &&
          img.map((item: any) => (
            <div className="max-h-[150px] shades p-1 relative">
              {!isDel && (
                <MdCancel
                  className="absolute cursor-pointer top-0 right-0 text-red-500 text-3xl hover:scale-x-110"
                  onClick={() => removeImage(item.id)}
                />
              )}
              <Image
                src={item.name}
                alt="product"
                width={120}
                height={120}
                className="w-full h-full"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default EditImages;
