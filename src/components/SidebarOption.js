import React from 'react'
import './SidebarOption.css';
const SidebarOption = ({ title, Icon, onOpen, pid }) => {

    return (
        <div className='sidebar-option' onClick={() => onOpen(pid)}>
            {Icon && <Icon className='sidebar-option__icon' />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption