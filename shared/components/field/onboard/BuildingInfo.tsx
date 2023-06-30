import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../Ui/TextInput";
import Button from "../../Ui/Button";
import { useAppSelector } from "@/shared/redux/store";

const BuildingInfoForm = () => {
  const zone = useAppSelector((state) => state.zone.zone)
  const form = useAppSelector((state) => state.onboard.form)
  const [isBusy, setIsBusy] = useState(false);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      building_type: "",
      building_no: "",
      house_number: "",
      street_name: "",
      area_name: "",
      area_name2: "",
      quarter: "",
      town: "",
      zone: "",
      state: "EDO STATE",
      tenant_house: "",
      self_con: "",
      mini_flat: "",
      duplex: "",
      duplex_2: "",
      mansion: "",
      one_bed: "",
      two_bed: "",
      three_bed: "",
      bungalow: "",
      bungalow_2: "",
      resident_store: "",
      commercial_store: "",
      market_store: "",
      sheds_market_store: "",
      purpose_building: "",
      images: ""
    },
  });

  const onSubmit = (data:any) => {
    console.log({...data,...form});
    
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-3 gap-4">
          <Controller
            name="building_no"
            control={control}
            rules={{
              required: {
                value: false,
                message: "Please enter title",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="No. / Plot"
                error={errors.building_no?.message}
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
                value: false,
                message: "Please enter title",
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
            name="area_name"
            control={control}
            rules={{
              required: {
                value: false,
                message: "Please enter value",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Area 1"
                error={errors.area_name?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
          <Controller
            name="area_name2"
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
                error={errors.area_name2?.message}
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
                label="Street Name"
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
                  {
                    zone && zone.map((item, index) => (
                      <option value={item.name} key={index}>
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
                <Controller
                  name="tenant_house"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      label="Tenant House"
                      error={errors.town?.message}
                      type={InputType.checkbox}
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="relative">
                <Controller
                  name="self_con"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      label="One Room Self-contained"
                      error={errors.self_con?.message}
                      type={InputType.checkbox}
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="relative">
                <Controller
                  name="mini_flat"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      label="A Mini Flat"
                      error={errors.mini_flat?.message}
                      type={InputType.checkbox}
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="relative">
                <Controller
                  name="duplex"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      label="Duplex"
                      error={errors.duplex?.message}
                      type={InputType.checkbox}
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="relative">
                <Controller
                  name="duplex_2"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      label="Duplex with Boys Quarter"
                      error={errors.duplex_2?.message}
                      type={InputType.checkbox}
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="relative">
                <Controller
                  name="mansion"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      label="Mansion"
                      error={errors.mansion?.message}
                      type={InputType.checkbox}
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
            <div>
            <p className='fw-500'>Flats:</p>
              <div className="relative">
                <Controller
                  name="one_bed"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      label="1-Bedroom"
                      error={errors.one_bed?.message}
                      type={InputType.checkbox}
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="relative">
                <Controller
                  name="two_bed"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      label="2-Bedroom"
                      error={errors.two_bed?.message}
                      type={InputType.checkbox}
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="relative">
                <Controller
                  name="three_bed"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      label="3-Bedroom"
                      error={errors.three_bed?.message}
                      type={InputType.checkbox}
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="relative">
                <Controller
                  name="bungalow"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      label="Bungalow"
                      error={errors.bungalow?.message}
                      type={InputType.checkbox}
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="relative">
                <Controller
                  name="bungalow_2"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      label="Bungalow with Boys Quarter"
                      error={errors.bungalow_2?.message}
                      type={InputType.checkbox}
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
            <div>
                <p className='fw-500'>Shops / Stores In:</p>
              <div className="relative">
                <Controller
                  name="resident_store"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      label="Residential Areas"
                      error={errors.resident_store?.message}
                      type={InputType.checkbox}
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="relative">
                <Controller
                  name="commercial_store"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      label="Commercial Areas"
                      error={errors.commercial_store?.message}
                      type={InputType.checkbox}
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="relative">
                <Controller
                  name="market_store"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      label="Market Areas"
                      error={errors.market_store?.message}
                      type={InputType.checkbox}
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="relative">
                <Controller
                  name="sheds_market_store"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      label="Sheds within the market"
                      error={errors.sheds_market_store?.message}
                      type={InputType.checkbox}
                      altClassName="block mt-2"
                      labelClassName="absolute left-6 top-0"
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
            <label className="mb-2 block mt-2">Purpose-built Facility</label>
            <Controller
              name="purpose_building"
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
            <label className="mt-3 block">Building Images</label>
          <Controller
            name="images"
            control={control}
            rules={{
              required: {
                value: false,
                message: "Please upload an image",
              },
            }}
            render={({ field }) => (
              <input type="file" multiple {...field} className="mt-[2px] border-gray-400 w-full border p-2 rounded"/>
            )}
          />
          {errors.images?.message}
          </div>
        </div>
        <div className="flex justify-end my-12">
          <div className="w-6/12 lg:w-3/12">
            <Button title="Submit" />
          </div>
        </div>
      </form>
    </>
  );
};

export default BuildingInfoForm;
