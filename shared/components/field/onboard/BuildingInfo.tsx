import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import TextInput, { InputType } from '../../Ui/TextInput';
import Button from '../../Ui/Button';

const BuildingInfoForm = () => {
    const [isBusy, setIsBusy] = useState(false);
    const {
      control,
      handleSubmit,
      setError,
      formState: { errors, isValid },
    } = useForm({
      mode: "onChange",
      defaultValues: {
        owner: "",
        title: "",
      },
    });
  
    return (
      <>
        <form>
          <div className="grid lg:grid-cols-4 gap-4">
            <div>
              <label className="mb-2 block mt-2">Title</label>
              <Controller
                name="owner"
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
                    <option value="Mr">MR</option>
                    <option value="Mrs">MRS</option>
                    <option value="Cheif">CHIEF</option>
                    <option value="Prof">PROF.</option>
                    <option value="Dr">DR.</option>
                    <option value="Pastor">PASTOR</option>
                  </select>
                )}
              />
            </div>
            <Controller
              name="title"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter title",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Others (title)"
                  placeholder="Smith"
                  error={errors.title?.message}
                  type={InputType.text}
                  {...field}
                />
              )}
            />
          </div>
          <div className="flex justify-end my-12">
              <div className="w-6/12 lg:w-3/12">
              <Button title='Submit'/>
              </div>
          </div>
        </form>
      </>
    );
}

export default BuildingInfoForm