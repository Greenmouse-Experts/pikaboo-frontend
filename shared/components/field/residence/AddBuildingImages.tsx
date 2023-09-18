import React, { useState, useRef, FC } from "react";
import Webcam from "react-webcam";
import Button from "../../Ui/Button";
import Image from "next/image";
import { useLazyUpdateResisdenceInfoQuery } from "@/services/api/residenceSlice";
import { toast } from "react-toastify";
import { PulseSpinner } from "../../Ui/Loading";

interface Props {
    id: any
    close: () => void
    refetch: () => void
}
const AddBuildingImages:FC<Props> = ({id, close, refetch}) => {
  const webcamRef = useRef<any>(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [previewImage, setPreview] = useState<any>()
  const videoConstraints = {
    width: 1280,
    height: 1720,
    // facingMode: "user"
    facingMode: "environment",
  };
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef?.current.getScreenshot();
    setImgSrc(imageSrc);
    console.log(imageSrc);
    
  }, [webcamRef, setImgSrc]);
  const convertToBinary = (data:any) => {
    const base64WithoutPrefix = data.replace(/^data:[^;]+;base64,/, '');

    // Convert the Base64 string to binary data
    const binaryData = atob(base64WithoutPrefix);

    // Create a Uint8Array from the binary data
    const byteArray = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      byteArray[i] = binaryData.charCodeAt(i);
    }

    // Create a Blob from the Uint8Array
    const blob = new Blob([byteArray]);
    return blob;
  }
  const [update] = useLazyUpdateResisdenceInfoQuery()
  const [isBusy, setIsBusy] = useState(false)
  const onSubmit = async(data: any) => {
    setIsBusy(true)
    const image = convertToBinary(data)
    const formData = new FormData();
    formData.append('building_image', image);
    formData.append('user_id', id)
    await update(formData)
        .then((res: any) => {
          if (res.data.success) {
            toast.success(res.data.message);
            setIsBusy(false);
            refetch()
            close()
          } else {
            if(res?.data?.errors){
              Object.entries<any>(res?.data?.errors).forEach(([key, value]) => {
                toast.error(value[0]);
              });
            }else toast.error(res?.data.message)
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
      {!imgSrc && <div className="">
        <Webcam
          audio={false}
          ref={webcamRef}
          height={1280}
          screenshotFormat="image/jpeg"
          width={1680}
          videoConstraints={videoConstraints}
        />
        <div className="mt-3">
          <Button title={"Capture"} onClick={capture} />
        </div>
      </div>}
      {
        imgSrc && 
        <>
            <Image src={imgSrc} alt="captured" width={400} height={400} className="w-full"/>
            <div className="mt-3">
                <Button title={ isBusy ? <PulseSpinner size={13} color="white" /> :'Add Image'} onClick={() => onSubmit(imgSrc)}/>
            </div>
        </>
      }
    </>
  );
};

export default AddBuildingImages;
