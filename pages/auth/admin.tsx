import React, {useState} from 'react'
import { useRouter } from 'next/router'
import TextInput, { InputType } from '@/shared/components/Ui/TextInput'
import { AppPage } from '@/shared/components/layouts/Types'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import { AiOutlineMail } from 'react-icons/ai'
import { MdLockOutline } from 'react-icons/md'
import Button from '@/shared/components/Ui/Button'
import Link from 'next/link'

const AdminLogin:AppPage = () => {
    const router = useRouter();
  const [isBusy, setIsBusy] = useState(false);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      user: "",
      password: "",
    },
  });

  return (
    <>
        <div className="bg-primary min-h-screen font-primary">
        <div className="flex lg:pt-16 text-sm h-screen items-center justify-center">
          <div className="lg:w-4/12 rounded shadow bg-white w-11/12 p-6 pb-8">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686648026/pikaboo/Group_26_2_cq9sv4.png"
                alt="logo"
                width={300}
                height={300}
                className="w-36 lg:w-56 pr-6 mx-auto"
              />
            <div className="mt-8">
              <p className="fw-500 text-center lg:text-xl mb-12">
                Login to your account{" "}
              </p>
              <form  className="fs-700">
                <div>
                  <Controller
                    name="user"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Please enter your email",
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        placeholder="Email"
                        icon={
                          <AiOutlineMail className="text-2xl text-primary mx-2" />
                        }
                        error={errors.user?.message}
                        type={InputType.email}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="mt-6">
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 5,
                        message: "Password is too short",
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        placeholder="Password"
                        icon={
                          <MdLockOutline className="text-xl lg:text-2xl text-primary mx-2" />
                        }
                        error={errors.password?.message}
                        type={InputType.password}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="mt-12">
                  {/* <Button title="Login" disabled={!isValid} /> */}
                  <Link href='/admin' className="btn-like block text-center py-3 text-xl">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLogin
AdminLogin.Layout = 'Login'