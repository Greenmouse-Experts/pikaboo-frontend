import React, {FC} from 'react'

interface Props {
    height?: number;
    width?: number;
  }

const Loading: React.FC<Props> = ({ width, height }) => {
  return (
    <div>Loading</div>
  )
}

export default Loading