import React from 'react'

function Names() {
    const names=["Rio","Japan","Paris"]
    const nameList=names.map(name => <h2 key={name}>name={name}</h2>)
  return (
    <div>
        {nameList}
    </div>
  )
}

export default Names