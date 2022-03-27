import React from 'react';
import preloader from './../../../assets/images/spinning-circles.svg'

const Preloader = (props) => {
  return (
    <div>
      {props.isFetching ? <img srcSet={preloader} width={"128px"} alt={'preloader'}/> : null}
    </div>
  )
}

export default Preloader;
