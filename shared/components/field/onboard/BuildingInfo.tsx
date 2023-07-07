import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../Ui/TextInput";
import Button from "../../Ui/Button";
import { useAppDispatch, useAppSelector } from "@/shared/redux/store";
import { useLazyCreateResidenceQuery } from "@/services/api/onboardSlice";
import { toast } from "react-toastify";
import { useGetZonesQuery } from "@/services/api/routineSlice";
import { ZonesList } from "@/shared/utils/types";
import { PulseSpinner } from "../../Ui/Loading";
import { resetForm } from "@/shared/redux/reducers/onboardSlice";

const BuildingInfoForm = () => {
  const {data:zone, isLoading} = useGetZonesQuery()
  const form = useAppSelector((state) => state.onboard.form)
  const [facilityType, setFacilityType] = useState<string[]>([])
  const [flatType, setFlatType] = useState<string[]>([])
  const [shopType, setShopType] = useState<string[]>([])
  const [image, setImage] = useState<any>()
  const [isBusy, setIsBusy] = useState(false);
  const [create] = useLazyCreateResidenceQuery()
  const dispatch = useAppDispatch()
  const handleFacility = (e:any) => {
    let facility = [...facilityType]
   if(e.target.checked){
    facility = [...facilityType, e.target.value]
   }else{
    facility.splice(facilityType.indexOf(e.target.value), 1);
   }
   setFacilityType(facility)
  }
  const handleFlat = (e:any) => {
    let flat = [...flatType]
   if(e.target.checked){
    flat = [...flatType, e.target.value]
   }else{
    flat.splice(flatType.indexOf(e.target.value), 1);
   }
   setFlatType(flat)
    console.log(flatType);
  }
  const handleFileUpload = (e:any) => {
      setImage(e.target.files[0])
  }
  const handleShop = (e:any) => {
    let shop = [...shopType]
   if(e.target.checked){
    shop = [...shopType, e.target.value]
   }else{
    shop.splice(shopType.indexOf(e.target.value), 1);
   }
   setShopType(shop)
    console.log(shopType);
  }
  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      building_type: "",
      plot_no: "",
      house_number: "",
      street_name: "",
      area1: "",
      area2: "",
      quarter: "",
      town: "",
      zone_id: "",
      state: "EDO",
      purpose_built_facility: "",
      building_image: ""
    },
  });

  const onSubmit = async(data:any) => {
    setIsBusy(true)
    const payload = {
      ...form,
      ...data,
      facility_type: facilityType,
      shop_store_in: shopType,
      flats: flatType,
    }
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value as any);
    });
    formData.append("building_image", image);
    await create(formData)
      .then((res:any) => {
        if (res.data.success) {
          toast.success(res.data.message)
          reset()
          dispatch(resetForm())
          setIsBusy(false);
        }else {
          Object.entries<any>(res?.data?.errors).forEach(([key, value]) => {
            toast.error(value[0]);
          });
          setIsBusy(false);
        }
      })
      .catch((err) => {
        toast.error(err?.error?.data.message);
        setIsBusy(false);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-3 gap-4">
          <Controller
            name="plot_no"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter value",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="No. / Plot"
                error={errors.plot_no?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
          <Controller
            name="house_number"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter value",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="House Number (Given by Government)"
                error={errors.house_number?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
          <Controller
            name="street_name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter a value",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Street Name"
                error={errors.street_name?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-4 grid lg:grid-cols-3 gap-4">
          <Controller
            name="area1"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter value",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Area 1"
                error={errors.area1?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
          <Controller
            name="area2"
            control={control}
            rules={{
              required: {
                value: false,
                message: "Please enter value",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Area 2"
                error={errors.area2?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
          <Controller
            name="quarter"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter a value",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Quarter"
                error={errors.quarter?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <Controller
            name="town"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter a value",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Town"
                error={errors.town?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
          <Controller
            name="state"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter a value",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="State"
                error={errors.state?.message}
                type={InputType.text}
                readOnly
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block mt-2">Building Type</label>
            <Controller
              name="building_type"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please select an option",
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
                  <option value="bungalow">
                    BUNDALOW - GROUND FLOOR HOUSE
                  </option>
                  <option value="two-floors">2-FLOORS</option>
                  <option value="three-floors">3-FLOORS</option>
                  <option value="more-floors">MORE THAN 3 FLOORS</option>
                </select>
              )}
            />
          </div>
          <div>
            <label className="mb-2 block mt-2">Zone</label>
            <Controller
              name="zone_id"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please select an option",
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
                  {
                    zone && zone.data.map((item:ZonesList) => (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    ))
                  }
                </select>
              )}
            />
          </div>
        </div>
        <div className="mt-4">
          <p>Facility Type</p>
          <div className="grid md:grid-cols-3">
            <div>
              <div className="relative">
                <TextInput
                      label="Tenant House"
                      name="facility"
                      id="facility"
                      error={errors.town?.message}
                      type={InputType.checkbox}
                      onChange={(e:any) => handleFacility(e)}
                      value="Tenant House"
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                    />
              </div>
              <div className="relative">
                <TextInput
                      label="One Room Self-contained"
                      name="facility"
                      id="facility"
                      error={errors.town?.message}
                      type={InputType.checkbox}
                      onChange={(e:any) => handleFacility(e)}
                      value="One Room Self-contained"
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                    />
              </div>
              <div className="relative">
                <TextInput
                      label="A Mini Flat"
                      name="facility"
                      id="facility"
                      error={errors.town?.message}
                      type={InputType.checkbox}
                      onChange={(e:any) => handleFacility(e)}
                      value="A Mini Flat"
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                    />
              </div>
              <div className="relative">
                <TextInput
                      label="Duplex"
                      name="facility"
                      id="facility"
                      error={errors.town?.message}
                      type={InputType.checkbox}
                      onChange={(e:any) => handleFacility(e)}
                      value="Duplex"
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                    />
              </div>
              <div className="relative">
                <TextInput
                      label="Duplex with Boys Quarter"
                      name="facility"
                      id="facility"
                      error={errors.town?.message}
                      type={InputType.checkbox}
                      onChange={(e:any) => handleFacility(e)}
                      value="Duplex with Boys Quarter"
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                    />
              </div>
              <div className="relative">
                <TextInput
                      label="Mansion"
                      name="facility"
                      id="facility"
                      error={errors.town?.message}
                      type={InputType.checkbox}
                      onChange={(e:any) => handleFacility(e)}
                      value="Mansion"
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                    />
              </div>
            </div>
            <div>
            <p className='fw-500'>Flats:</p>
              <div className="relative">
                <TextInput
                      label="1-Bedroom"
                      name="flat"
                      id="flat"
                      error={errors.town?.message}
                      type={InputType.checkbox}
                      onChange={(e:any) => handleFlat(e)}
                      value="1-Bedroom"
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                    />
              </div>
              <div className="relative">
                <TextInput
                      label="2-Bedroom"
                      name="flat"
                      id="flat"
                      error={errors.town?.message}
                      type={InputType.checkbox}
                      onChange={(e:any) => handleFlat(e)}
                      value="2-Bedroom"
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                    />
              </div>
              <div className="relative">
                <TextInput
                      label="3-Bedroom"
                      name="flat"
                      id="flat"
                      error={errors.town?.message}
                      type={InputType.checkbox}
                      onChange={(e:any) => handleFlat(e)}
                      value="3-Bedroom"
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                    />
              </div>
              <div className="relative">
                <TextInput
                      label="Bungalow"
                      name="flat"
                      id="flat"
                      error={errors.town?.message}
                      type={InputType.checkbox}
                      onChange={(e:any) => handleFlat(e)}
                      value="Bungalow"
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                    />
              </div>
              <div className="relative">
                <TextInput
                      label="Bungalow with Boys Quarter"
                      name="flat"
                      id="flat"
                      error={errors.town?.message}
                      type={InputType.checkbox}
                      onChange={(e:any) => handleFlat(e)}
                      value="Bungalow with Boys Quarter"
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                    />
              </div>
            </div>
            <div>
                <p className='fw-500'>Shops / Stores In:</p>
              <div className="relative">
                <TextInput
                      label="Residential Areas"
                      name="shop"
                      id="shop"
                      error={errors.town?.message}
                      type={InputType.checkbox}
                      onChange={(e:any) => handleShop(e)}
                      value="Residential Areas"
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                    />
              </div>
              <div className="relative">
                 <TextInput
                      label="Commercial Areas"
                      name="shop"
                      id="shop"
                      error={errors.town?.message}
                      type={InputType.checkbox}
                      onChange={(e:any) => handleShop(e)}
                      value="Commercial Areas"
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                    />
              </div>
              <div className="relative">
                <TextInput
                      label="Market Areas"
                      name="shop"
                      id="shop"
                      error={errors.town?.message}
                      type={InputType.checkbox}
                      onChange={(e:any) => handleShop(e)}
                      value="Market Areas"
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                    />
              </div>
              <div className="relative">
                <TextInput
                      label="Sheds within the market"
                      name="shop"
                      id="shop"
                      error={errors.town?.message}
                      type={InputType.checkbox}
                      onChange={(e:any) => handleShop(e)}
                      value="Sheds within the market"
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                    />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
            <label className="mb-2 block mt-2">Purpose-built Facility</label>
            <Controller
              name="purpose_built_facility"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please select an option",
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
                  <option value="Residence">
                    Residence
                  </option>
                  <option value="Hotel">Hotel</option>
                  <option value="Petrol Station">Petrol Station</option>
                  <option value="Hospital">Hospital</option>
                  <option value="Educational">Educational</option>
                </select>
              )}
            />
          </div>
          <div>
            <label className="mt-3 block">Building building_Image</label>
          <input type="file" multiple className="mt-[2px] border-gray-400 w-full border p-2 rounded" onChange={(e:any) => handleFileUpload(e)}/>
          </div>
        </div>
        <div className="flex justify-end my-12">
          <div className="w-6/12 lg:w-3/12">
          <Button title={isBusy ? <PulseSpinner size={13} color="white" />: "Submit"} disabled={!isValid} />
          </div>
        </div>
      </form>
    </>
  );
};

export default BuildingInfoForm;
