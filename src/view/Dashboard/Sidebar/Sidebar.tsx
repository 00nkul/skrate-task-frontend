import React, { useState } from 'react'
import './Sidebar.css'
type Props = {
    shuffle:any
}

export default function Sidebar({shuffle }: Props) {
    const [activeClass, setActiveClass] = useState({
        home: true,
        shuffle: false
    })

    const handleClickHome = () => {
        setActiveClass({
            home: true,
            shuffle: false
        });
    }

    const handleClickShufle = () => {
        setActiveClass({
            home: false,
            shuffle: true
        });
        shuffle();
    }
    return (
        <>
            <div className="sidebar">
                <a href="#home" className={`${activeClass.home ? "active" : ''}`} onClick={handleClickHome}>Home</a>
                <a href="#news" className={`${activeClass.shuffle ? "active" : ''}`} onClick={handleClickShufle}>Shuffle</a>
            </div>
        </>
    )
}