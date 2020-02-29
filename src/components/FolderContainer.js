import React, { useEffect, useState } from 'react'
import FolderList from './FolderList'
import { useSelector, useDispatch } from 'react-redux'
import { addFolder} from '../redux/action/folderActions'

function FolderContainer({isActive}) {
    const foldersState = useSelector(state => state.folders);
    const folderArr = foldersState.folders;
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        if (value === '') {
            setFolders(folderArr);
        }
        else {
            setFolders(folderArr.filter((element) => {
                return element.name.search(value) !== -1;
            }));
        }
    }, [value, folderArr]);

    return (
        <div className={`folder-container ${isActive && "active"}`}>
            <div className="search-container">
                <i className="fas fa-search"></i><input type="text" placeholder="search" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <button className="new-folder-btn" type="button" 
                onClick={()=> {
                    setValue('');
                    dispatch(addFolder("new folder", foldersState.nextId ));
                }
            } >new folder</button>
            <FolderList folders={folders} />
        </div>
    )
}

export default FolderContainer
