import { onMessageListener, requestForToken } from '@/shared/firebase/firebase';
import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import Button from '../Ui/Button';
interface Notify {
  title:string
  body:string
}
const Notification = () => {
  const [notification, setNotification] = useState<Notify>({title: '', body: ''});
  const notify = () =>  toast.info(<ToastDisplay/>);
  function ToastDisplay() {
    return (
      <div>
        <p><b>{notification?.title}</b></p>
        <p>{notification?.body}</p>
      </div>
    );
  };

  useEffect(() => {
    if (notification?.title ){
     notify()
    }
  }, [notification])

  requestForToken();

  onMessageListener()
    .then((payload:any) => {
        console.log(payload);
      setNotification({title: payload?.notification?.title, body: payload?.notification?.body});     
    })
    .catch((err) => console.log('failed: ', err));

  return (
    <>
       {/* <Button title="true" onClick={() => setNotification({title: "hello", body: "hey"})} /> */}
    </>
  )
}

export default Notification