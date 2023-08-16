import React from 'react'

const Header = () => {
  return (
    <div  className="fixed top-0 left-0 right-0 bg-white bg-opacity-60 backdrop-blur-md shadow z-10">
        <div className="max-w-4xl mx-auto">

            <nav>
                <h1>Logo</h1>
                <ul>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Card</a>
                </ul>
            </nav>

        </div>

    </div>
  )
}

export default Header