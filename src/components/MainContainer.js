import React from 'react'
import ButtonList from './ButtonList';
import VidoeContainer from './VidoeContainer';

const MainContainer = () => {
  const buttons = ["All", "Gaming", "Songs", "Live", "Cricket", "News", "Movies", "TV", "Technology", "Sports"];
  return (
    <div className=''>
      <div className='flex'>
        {buttons.map((button) => (
          <ButtonList key={button} name={button} />
        ))}
        </div>
        <VidoeContainer/>
    </div>
  )
}

export default MainContainer