import React from 'react'

function Names() {
    const names=["Rio","Japan","Paris","Japan"]
    const nameList=names.map((name,index) => <h2 key={index}>name={name}</h2>)
  return (
    <div>
        {nameList}
    </div>
  )
}

export default Names
// Even you have duplicate values it will render on the browser 
// The problem is using index as a key prop will cause some serious UI issues in certain scenarious.
// For more information watch the video in this same folder you can get an idea about the issues when we use index as a parameter.