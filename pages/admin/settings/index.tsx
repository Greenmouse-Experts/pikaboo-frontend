import React, {useState} from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import Button from "@/shared/components/Ui/Button";
import { store, useAppDispatch, useAppSelector } from "@/shared/redux/store";
import Initials from "@/shared/utils/initials";
import { BsFillCameraFill,  BsTelephonePlusFill } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { useLazyUpdateAdminPhotoQuery } from "@/services/api/authSlice";
import { toast } from "react-toastify";
import { saveUser } from "@/shared/redux/reducers/userSlice";
import useModal from "@/hooks/useModal";
import UpdateProfileForm from "@/shared/components/auth/UpdateProfileForm";
import ChangeAdminPassword from "@/shared/components/auth/ChangePasswordForm";

const AdminSettingsPage: AppPage = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch()
  const {Modal:UpdateProfile, setShowModal:setShowUpdateProfile} = useModal()
  const {Modal:ChangePassword, setShowModal:setShowChangePassword} = useModal()

  const [preview, setPreview] = useState<string>();
  const [isBusy, setIsBusy] = useState(false);
  const [upload] = useLazyUpdateAdminPhotoQuery();

  const changeProfileImage = async (e:any) => {
    setIsBusy(true)
    e.preventDefault();
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);
    const formData = new FormData();
    formData.append("avatar", e.target.files[0]);
    await upload(formData)
      .then((res) => {
        if (res.data.success) {
          dispatch(saveUser({
            ...store.getState().user.user,
            avatar: res.data.data.avatar
          }))
          toast.success(res.data.message)
          setIsBusy(false);
        }

        if (res.isError) {
          toast.error(res.data.msg);
          setIsBusy(false);
        }
      })
      .catch((err) => {
        toast.error("Ecountered error");
        setIsBusy(false);
      });
  };

  return (
    <>
      <div>
        <div className="lg:w-9/12 xl:w-8/10 rounded-lg dash-shade p-6 mx-auto">
          <div>
            <p className="fw-600 text-xl border-b">Super Admin Settings</p>
          </div>
          <div className="mt-6 grid lg:grid-cols-4 gap-x-6">
            <div>
              <div className="relative z-0 w-[160px] h-[160px]">
                {user.avatar && (
                  <Image
                    src={preview? preview : user.avatar}
                    alt="profile"
                    width={160}
                    height={160}
                    className="circle border w-full h-full mx-auto"
                  />
                )}
                {!user.avatar && !preview && (
                  <Initials
                    fname={user.firstname}
                    lname={user.lastname}
                    size={160}
                    text="65px"
                  />
                )}
                <p className="w-8 h-8 circle grid place-content-center bg-white absolute overflow-hidden z-10 bottom-[1px] right-[15px] border cursor-pointer">
                  {
                    isBusy? "" : <BsFillCameraFill className="text-primary relative" />
                  }
                  <input type="file" onChange={(e) => changeProfileImage(e)} className="w-full h-full absolute z-10 opacity-0 cursor-pointer"/>
                </p>
              </div>
              <div className="">
                <p className="fw-600 mt-4 text-center text-primary">Pikaboo</p>
                <p className="fw-600 mt-1 text-center">{`${user.firstname} ${user.lastname}`}</p>
              </div>
            </div>
            <div className="col-span-3 mt-9 pl-6">
              <div className="grid gap-6">
                <div className="flex items-center gap-x-2">
                  <div className="w-16 h-16 grid place-content-center shadow-lg">
                    <FaUserShield className="text-2xl text-gray-400" />
                  </div>
                  <div className="w-full">
                    <p className="fs-400 text-primary">First Name:</p>
                    <p className="border-b mt-3 fw-500">{user.firstname}</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="w-16 h-16 grid place-content-center shadow-lg">
                    <FaUserShield className="text-2xl text-gray-400" />
                  </div>
                  <div className="w-full">
                    <p className="fs-400 text-primary">Last Name:</p>
                    <p className="border-b mt-3 fw-500">{user.lastname}</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="w-16 h-16 grid place-content-center shadow-lg">
                    <MdMarkEmailRead className="text-2xl text-gray-400" />
                  </div>
                  <div className="w-full">
                    <p className="fs-400 text-primary">Email:</p>
                    <p className="border-b mt-3 fw-500">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="w-16 h-16 grid place-content-center shadow-lg">
                    <BsTelephonePlusFill className="text-2xl text-gray-400" />
                  </div>
                  <div className="w-full">
                    <p className="fs-400 text-primary">Phone:</p>
                    <p className="border-b mt-3 fw-500">{user.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-x-6 mt-12">
            <Button
              title="Edit Profile"
              onClick={() => setShowUpdateProfile(true)}
              altClassName="px-6 py-2 border border-green-600 text-primary fw-500 rounded-lg"
            />
            <Button
              title="Change Password"
              onClick={() => setShowChangePassword(true)}
              altClassName="px-6 py-2 border border-green-600 bg-primary text-white fw-500 rounded-lg"
            />
          </div>
        </div>
      </div>
      <UpdateProfile title="Update Profile">
        <UpdateProfileForm close={() => setShowUpdateProfile(false)}/>
      </UpdateProfile>
      <ChangePassword title="Change Password">
          <ChangeAdminPassword close={() => setShowChangePassword(false)}/>
      </ChangePassword>
    </>
  );
};

export default AdminSettingsPage;
AdminSettingsPage.Layout = "Dashboard";
