import React, {useState} from 'react'
import { useRouter } from 'next/router'
import TextInput, { InputType } from '@/shared/components/Ui/TextInput'
import { AppPage } from '@/shared/components/layouts/Types'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import { AiOutlineMail } from 'react-icons/ai'
import { MdLockOutline } from 'react-icons/md'
import Button from '@/shared/components/Ui/Button'
import { useLazyAdminLoginQuery } from '@/services/api/authSlice'
import { useAppDispatch } from '@/shared/redux/store'
import { saveDashInfo, saveUser } from '@/shared/redux/reducers/userSlice'
import { extractAdminCallBackRoute,  storeLocalToken } from '@/services/helpers'
import { toast } from 'react-toastify'
import { Url } from "next/dist/shared/lib/router/router";
import { PulseSpinner } from '@/shared/components/Ui/Loading'

const AdminLogin:AppPage = () => {
    const router = useRouter();
  const [isBusy, setIsBusy] = useState(false);
  const [login] = useLazyAdminLoginQuery()
  const dispatch = useAppDispatch()

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data:any) => {
    setIsBusy(true);
    await login(data)
      .then((res:any) => {
        if (res.data.success) {
          dispatch(saveDashInfo(res.data.data))
          dispatch(
            saveUser({
                token: res.data.token,
                firstname: res.data.data.first_name,
                lastname: res.data.data.last_name,
                id: res.data.data.id,
                email: res.data.data.email,
                phone: res.data.data.phone,
                user_type: res.data.data.account_type,
                admin_type: res.data.data.role,
                avatar: res.data.data.avatar
          }))
          storeLocalToken("token", res.data.token) 
          toast.success(res.data.message)
          router.push('/admin');
        }else {
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
        <div className="bg-primary min-h-screen font-primary">
        <div className="flex lg:pt-16 text-sm h-screen items-center justify-center">
          <div className="lg:w-4/12 rounded shadow bg-white w-11/12 p-6 pb-8">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687429795/pikaboo/Group_48061_m4vob9.png"
                alt="logo"
                width={300}
                height={100}
                className="w-36 lg:w-64 pr-6 mx-auto"
              />
            <div className="mt-8">
              <p className="fw-500 text-center lg:text-xl mb-12">
                Admin Login{" "}
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="fs-700">
                <div>
                  <Controller
                    name="email"
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
                        error={errors.email?.message}
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
                  <Button title={isBusy? <PulseSpinner size={13} color='white'/> : "Login"} disabled={!isValid} />
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