import { Card } from "antd"
import Item from "antd/lib/list/Item"
import React from "react"
const products = [{ id: 1, name: "coin", img: "https://images.unsplash.com/photo-1633176640669-44bd6adaa662?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80" },
{ id: 2, name: "power outlet", img: "https://images.unsplash.com/photo-1633157546994-2f3b7f077931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80" },
{ id: 3, name: "chair", img: "https://images.unsplash.com/photo-1633153010796-6cf54b5daebb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80" }]

function Shop() {
    return (
        <>
            {products.map((item, index) => (
                <Card cover={<img src={item.img} />}
                    style={{ width: 240, height: 240, }}>


                    <p>{item.name}</p>
                </Card>

            ))
            }
        

        </>
    )
}

export default Shop