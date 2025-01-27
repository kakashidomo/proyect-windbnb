import React from 'react'
import Nav from './components/Nav'
import CardGrid from './components/CardGrid';


export default function App() {
    
    return (
        <>

            <Nav />
            <div className='flex items-center justify-between mx-2'>
                <h1 className='font-bold text-2xl text-gray-900'>
                    Stays in Finland
                </h1>
                <h2 className='font-medium text-sm text-gray-500'>
                    12+ Estancias
                </h2>
            </div>
            
            <CardGrid/>

        </>
    )
}


{/* <div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 fill-red-600 text-white"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>

                        </span>
                        <span>

                        </span>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
 */}
/* componentes 
bara de navegacion contiene logo del lado izquiero y del lado derecho tiene 2 inputs y un button 
los elementos/etiquetas deben desplegar en el primer caso dos 

 */





