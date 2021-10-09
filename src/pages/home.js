import { Carousel } from "antd"
import React from "react"

function Home() {
    return (
        <>
        <Carousel autoplay>
            <div>
                <img style={{height: 500, width: '100%'}} src="https://images.unsplash.com/photo-1633510044266-8d7b1ee9f501?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80" alt="informasi"/>
            </div>
            <div>
            <img style={{height: 500, width: '100%'}} src="https://images.unsplash.com/photo-1633432695394-71dfae0194e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80" alt="informasi"/>
            </div>
        </Carousel>
    
        </>
    )
}

export default Home