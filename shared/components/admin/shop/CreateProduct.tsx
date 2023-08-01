import React, { FC, useState } from "react";
import {
  useGetCategoriesQuery,
  useLazyAddProductImageQuery,
  useLazyCreateProductQuery,
} from "@/services/api/shopSlice";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import TextInput, { InputType } from "../../Ui/TextInput";
import Button from "../../Ui/Button";
import { PulseSpinner } from "../../Ui/Loading";

interface Props {
  close: () => void;
  refetch: () => void;
}
const CreateProduct: FC<Props> = ({ close, refetch }) => {
  const [isBusy, setIsBusy] = useState(false);
  const { data: cat } = useGetCategoriesQuery();
  const [create] = useLazyCreateProductQuery();
  const [addImage] = useLazyAddProductImageQuery();
  const [image, setImage] = useState<any[]>([]);

  const handleImage = (e: any) => {
    setImage(Array.from(e.target.files));
  };

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      category_id: "",
      price: "",
      weight: "",
      stock: "",
      description: "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsBusy(true);
    await create(data)
      .then((res: any) => {
        if (res.data.success) {
          // toast.success(res.data.message);
          const img = new FormData();
          for (let i = 0; i < image.length; i++) {
            img.append(`images`, image[i]);
          }
          img.append("product_id", res.data.data.id);
          addImage(img)
            .then((res) => {
              if (res.isSuccess) {
                toast.success(res.data.message);
            setIsBusy(false);
            refetch()
            close()
              }
            })
            .catch((err) => {});
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
      <div className="max-h-[500px] overflow-y-auto scroll-pro">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-3 gap-x-4">
          <Controller
            name="name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter product name",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Product Name"
                error={errors.name?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
          <Controller
            name="price"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter product price",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Product Price"
                error={errors.price?.message}
                type={InputType.number}
                {...field}
              />
            )}
          />
          <Controller
            name="stock"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter product count",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Product Stock Available"
                error={errors.price?.message}
                type={InputType.number}
                {...field}
              />
            )}
          />
          <Controller
            name="weight"
            control={control}
            rules={{
              required: {
                value: false,
                message: "Please enter product weight",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Product Weigth (kg)"
                error={errors.name?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-3">
            <label className="mb-2 block mt-2">Product Category</label>
            <Controller
              name="category_id"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please select category",
                },
              }}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full border border-gray-400 rounded h-[42px]"
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  {cat &&
                    cat.data.map((item: any) => (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              )}
            />
          </div>
        <div className="mt-3">
          <label>Product Image</label>
          <input
            type="file"
            multiple
            className="w-full border border-gray-400 rounded mt-1 p-2"
            onChange={handleImage}
          />
        </div>
        <div className="mt-3">
          <Controller
            name="description"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter product description",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Product Description"
                error={errors.name?.message}
                type={InputType.textarea}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-10">
          <Button
            title={
              isBusy ? (
                <PulseSpinner size={13} color="white" />
              ) : (
                "Create Product"
              )
            }
            disabled={!isValid && !image.length}
          />
        </div>
      </form>
      </div>
    </>
  );
};

export default CreateProduct;
