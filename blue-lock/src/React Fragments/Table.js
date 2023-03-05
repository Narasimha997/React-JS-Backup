import React from 'react'
import Tablerow from './Tablerow'

function Table() {
  return (
    <React.Fragment>
        <table>
        <thead>
            <tr>
                <Tablerow/>
            </tr>
            </thead>
        </table>
    </React.Fragment>
  )
}

export default Table