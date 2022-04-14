import React from 'react'
import Content from './Content/Content'
import TopPanel from '../TopPanel/TopPanel'

function Home() {
    return (
        <div>
            <TopPanel active="HOME"/>
            <Content />
        </div>
    )
}

export default Home