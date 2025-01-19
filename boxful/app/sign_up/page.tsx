import SignUpForm from '@/components/SignUpForm'
import React from 'react'

export default function SignUpPage() {
    return (
        <div className="w-full min-h-fit h-full">
            <main className="grid grid-flow-col m-auto w-full h-full">
                <section className='grid-cols-1 max-w-[1000px] m-auto px-4 py-12'>
                    <h1 className="text-left text-gray-700 font-bold text-xl">Registrate</h1>
                    <p className="text-gray-500">Ingresa tus datos a continuación para poder emmpezar a sacarle todo el
                        provecho a lo que Boxful tiene para ti. 
                    </p>
                    <SignUpForm/>
                </section>
            </main>
        </div>
    )
}
