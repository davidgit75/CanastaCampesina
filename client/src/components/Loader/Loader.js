import React from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import CircularProgress from 'react-md/lib/Progress/CircularProgress'

const Loader = () => {
  return (
    <CircularProgress
      id='loader'
      key='loaderkey'
      centered
      scale={1.7}
    />
  )
}

export default Loader
