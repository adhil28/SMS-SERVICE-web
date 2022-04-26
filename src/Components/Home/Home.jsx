import React, { useEffect } from 'react'
import Content from './Content/Content'
import TopPanel from '../TopPanel/TopPanel'

function Home() {
    useEffect(() => {
        document.getElementById('body').style.backgroundColor = '#ffffff'
    }, [])
    return (
        <div>
            <TopPanel active="HOME"/>
            <Content />
        </div>
    )
}

export default Home