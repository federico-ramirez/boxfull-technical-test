import LoginForm from '@/components/LoginForm'
import React from 'react'

export default function LoginPage() {
    return (
        <div className="w-full min-h-fit h-full my-28 md:my-44 lg:my-28">
            <main className="grid grid-flow-col m-auto w-full h-full">
                <section className='grid-cols-1 max-w-[1000px] m-auto px-4 py-12'>
                    <h1 className="text-left text-gray-700 font-bold text-xl">Inicio de sesión</h1>
                    <p className="text-gray-500">Ingresa tus credenciales para sacarle todo el 
                        provecho a lo que Boxful tiene para ti.
                    </p>
                    <LoginForm />
                </section>
            </main>
        </div>
    )
}
