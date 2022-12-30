import Link from "next/link"
import React, { useEffect, useState } from 'react'

function Header() {

    //Change nav color when scrolling
    const [color, setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeColor)
    }, []);
    
    
    return (
      
    <div className="w-full fixed top-0 left-0 z-50">
        <div className={color ? "backdrop-blur-xl ease-in-out duration-300" : "bg-none ease-in-out duration-300"}>
            <div className="bg-none py-5">
                <header className=" md:flex items-center justify-between p-5">
                    <div className="">
                        <Link href="/">
                            <img className="w-24 object-contain cursor-pointer" src="https://s3-alpha-sig.figma.com/img/1ff4/88a0/9170b65b55cf94a37bd7e028d40ec718?Expires=1673222400&Signature=jajFGQ4lc328vnxUb-2Nu8xNZLzvlqjXnusP~LiOrKh1o2WmKABy-TRLRYeO2q4RhT9z9Cc4h8rz5col~jrRy9dwuhQV5K2xP1KsKQUNl2d3kuPrQWoWO2MxQL7zx8Cw4n~fwcXhU3OQvX8pSzFivBJ7QmwOoHeaDVFgbU~6OIDEaafcAJMJ5YJkrd4LKJeaiaXAIHcbvCs7NJuSk~B2tzoPQvoozblEA5BQzt2JV2-kMQZcQxCWkx993b~80LoWM4KsU0~jbPQPA~gRTjX-5FsJfLKqH7rW-HvDHa3IV9Wwi~9-fR~XgxEEnoS~pRGqapfAmnXmjt69uDsjNr119Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                        </Link>
                    </div>

                    <div className="hidden md:flex md:items-center cursor-pointer space-x-5 text-white">
                        <h3 className="border-b-2">Início</h3>
                        <h3 className="border-b-2">Contato</h3>
                        <h3 className="border-b-2">Blog</h3>
                        <div className="flex items-center space-x-5 text-white">
                            <h3 className="border px-4 py-1 rounded-full border-white">Doe agora</h3>
                        </div>
                    </div>

                </header>
            </div>
        </div>
    </div>
  )
}

export default Header