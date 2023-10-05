import React, {useState} from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import MyResidentTable from "@/shared/components/field/residence/MyResisdenceTable";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { useLazyCreateResidenceQuery } from "@/services/api/onboardSlice";
import { toast } from "react-toastify";
import { CircleLoader, PulseSpinner } from "@/shared/components/Ui/Loading";
import useModal from "@/hooks/useModal";
import ReusableModal from "@/shared/components/helpers/ReusableModal";
import { useRouter } from "next/router";
import { useGetMyZoneUsersQuery } from "@/services/api/routineSlice";
import EmptyState from "@/shared/components/Ui/EmptyState";

const ResidentsPage: AppPage = () => {
  const [isBusy, setIsBusy] = useState(false)
  const {data, isLoading} = useGetMyZoneUsersQuery()
  const route = useRouter()
  const {Modal, setShowModal} = useModal()
  const [profile, setProfile] = useState<any>()
  const [create] = useLazyCreateResidenceQuery()
  const createOneResidence = async() => {
    setIsBusy(true)
    const formData = new FormData();
    await create(formData)
    .then((res:any) => {
      if (res.data.success) {
        toast.success(res.data.message)
        setProfile(res.data.data)
        setShowModal(true)
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
  const gotoProfile = () => {
    route.push(`/field/residents/details?sort=${profile.id}`)
  }
  return (
    <>
      <div>
        <div className="h-40 bg-waste bg-center flex items-center dash-shade rounded-xl">
          <div className="pl-12 text-white">
            <p className="text-2xl fw-600">Home Residents</p>
            <p className="fs-400 lg:w-10/12 mt-2">
              Here are the list of home residence you have onboarded on the app.
            </p>
          </div>
        </div>
        <div className="mt-5 lg:mt-12 dash-shade p-4 lg:p-8 rounded-xl">
         <div className="flex items-center borber-b-2 justify-between">
         <div className="flex  gap-x-2">
            <MdFormatListBulletedAdd className="text-2xl text-primary" />
            <p className="fw-500">Home Residents</p>
          </div>
          <div>
            {isBusy && <PulseSpinner size={13} color="#009a06" />}
            {!isBusy && <p className="fw-600 text-primary underline cursor-pointer" onClick={createOneResidence}>Add New Home Residence</p>}
          </div>
         </div>
          <div className="mt-5">
          {isLoading && (
              <div className="flex justify-center py-12">
                <CircleLoader size="100" />
              </div>
            )}
            {
              data && !data?.data?.length && <EmptyState
              imageClass="w-24 mx-auto"
              message="No Created Resisdence Yet"
            />
            }
            {data && <MyResidentTable data={data}/>}
          </div>
        </div>
      </div>
      <Modal title="" noHead>
      <ReusableModal
          title="A home residence account has been created succesfully, do you want to edit this account"
          cancelTitle="No, cancel"
          actionTitle="Yes, Continue"
          closeModal={() => setShowModal(false)}
          action={gotoProfile}
          isBusy={isBusy}
        />
      </Modal>
    </>
  );
};

export default ResidentsPage;
ResidentsPage.Layout = "Dashboard";
