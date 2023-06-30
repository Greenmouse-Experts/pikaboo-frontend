import React, {FC, useState} from 'react'
import Button from '@/shared/components/Ui/Button'
import { resetUser } from '@/shared/redux/reducers/userSlice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useLazyLogoutQuery } from '@/services/api/authSlice';
import { FadeSpinner } from '../Ui/Loading';

interface Props {
    CloseModal: () => void;
  }

const LogoutModalUsers:FC<Props> = ({CloseModal}) => {
    const [isBusy, setIsBusy] = useState<boolean>()
    const [ logout ] = useLazyLogoutQuery() 
    const router = useRouter()
    const dispatch = useDispatch();

    const logoutUser = async() => {
        setIsBusy(true)
        await logout()
            .then((res:any) => {
                if(res.data.success){
                    dispatch(resetUser())
                    toast.success(res.data.message)
                    router.push('/auth/login')
                }
            })
            .catch(() => {})
        setIsBusy(false)
    }
  return (
    <div>
        <p className='fw-500'>Are you sure you want to log out</p>
        <div className='flex justify-between mt-10'>
            <Button title='Cancel' onClick={CloseModal} altClassName='px-6 py-2 border rounded text-primary'/>
            <Button title={isBusy ? <FadeSpinner size={4} color="white"/> : "Logout"} altClassName='px-6 w-24 py-2 btn-like' onClick={logoutUser}/>
        </div>
    </div>
  )
}

export default LogoutModalUsers