import React from 'react'
import Folder from './Folder'

function FolderList({folders}) {
    return (
        <div>
           <ul>
               {folders.map((element) => {
                   return (
                       <li key={element.id}>
                           <Folder folder={element} />
                       </li>
                   )
               })}
           </ul>
        </div>
    )
}

export default FolderList
