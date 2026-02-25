import React from 'react'

function Header() {
    
    return (
        <header className="bg-[url('https://images.unsplash.com/photo-1493515322954-4fa727e97985?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
            bg-cover 
            bg-center 
            h-screen
            p-15">
            <div className="text-center grid grid-cols-2 gap-6 items-center h-full">
                <div className="bg-blue-200 p-6">
                Columna 1
                </div>

                <div className="bg-green-200 p-6">
                Columna 2
                </div>
            </div>
        </header>
    )
}

export default Header
