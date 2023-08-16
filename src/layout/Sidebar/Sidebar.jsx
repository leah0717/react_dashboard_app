import React, { memo, useContext, useEffect, useState } from 'react'

import './Sidebar.css'
import { SidebarContext } from '@/context/sidebarContext'
import { personsImgs } from '@/utils/images'
import { navigationLinks } from '@/data/data'
const Sidebar = memo(() => {
    const [activeLinkIdx] = useState(1);
    const [sidebarClass, setSidebarClass] = useState("")
    const { isSidebarOpen } = useContext(SidebarContext)
    
    useEffect(() => {
        if(isSidebarOpen) {
            setSidebarClass("sidebar-change");
        } else {
            setSidebarClass("");
        }
    }, [isSidebarOpen])
    return (
        <div className={`sidebar ${sidebarClass}`}>
            <div className="user-info">
                <div className="info-img img-fit-cover">
                    <img src={personsImgs.person_two} alt="profile" />
                </div>
                <span className="info-name">leah</span>
            </div>
            <nav className="navigation">
                <ul className="nav-list">
                    {
                        navigationLinks.map((navigationLink) => {
                            return (
                                <li className="nav-item" key={navigationLink.id}>
                                    <a href="#" className={`nav-link ${navigationLink.id === activeLinkIdx ? 'active' : null}`}>
                                        <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                                        <span className="nav-link-text">{navigationLink.title}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
})

export default Sidebar