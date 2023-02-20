import React from 'react'

function Names() {
    const names=["Rio","Japan","Paris","Japan"]
    const nameList=names.map(name => <h2 key={name}>name={name}</h2>)
  return (
    <div>
        {nameList}
    </div>
  )
}

export default Names
// It will throws an error in the console level as "key props should be an unique value"