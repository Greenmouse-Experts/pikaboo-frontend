import React, {FC} from 'react'
import Button from '../components/Ui/Button'
import Image from 'next/image'

interface Props {
    close: () => void
    next: () => void
    message: string
}
const WarningModal:FC<Props> = ({close, message, next}) => {
  return (
    <div>
        <div>
            <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1696586978/pikaboo/info-removebg-preview_1_tkdodl.png' alt='info' width={200} height={200} className='mx-auto'/>
        </div>
        <div className="px-6">{message}</div>
      <div className="w-full mt-8 flex justify-between">
        <Button altClassName='py-2 px-3 lg:px-6 rounded  bg-red-600 text-white' title={'Close'} onClick={close} />
        <Button altClassName='py-2 px-3 lg:px-6 rounded bg-primary text-white' title={'Continue'} onClick={next} />
      </div>
    </div>
  )
}

export default WarningModal