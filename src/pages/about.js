import { Avatar, Button } from "antd"
import React from "react"
import { useHistory } from "react-router"


function About() {
    const history = useHistory ()
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: '20px'}}>
        <Avatar size={80} shape="circle" src="https://images.unsplash.com/photo-1633421878789-30435a5f7ea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80"/>
        <p>Nicolas faite</p>
        <Button href="https://instagram.com" type= 'primary' >Instagram</Button>
        

        </div>
    )
}

export default About