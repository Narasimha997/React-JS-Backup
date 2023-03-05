import React from 'react'

function Nofragment() {
  return (
    <>
        <h1>Not using react Fragment </h1>
        <h1>Only an empty tag</h1>
        {/* Here,there is one limitation when we use empty tag we cannot spacify key attribute if any case you want to render any array of data in the jsx */}
    </>
  )
}

export default Nofragment