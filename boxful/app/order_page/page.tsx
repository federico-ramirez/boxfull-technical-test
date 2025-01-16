import ItemCard from '@/components/ItemCard'
import OrderForm from '@/components/OrderForm'
import React from 'react'

export const metadata = {
  title: "Boxful | Detalle de la orden"
}

export default function OrderPage() {
  return (
    <div className="w-full min-h-screen">
      <main className="grid grid-flow-col m-auto bg-gray-custom gap-16 w-screen h-full sm:items-start">
        <section className='grid-cols-1 max-w-[1000px] mx-auto px-4 py-8'>
          <h1 className="text-left text-gray-700 font-bold text-xl">Crea una orden</h1>
          <p className="text-gray-500">Dale una ventaja competitiva a tu negocio con entregas
            <span className="font-semibold"> el mismo día</span> (Área metropolitana) y
            <span className="font-semibold">  el día siguiente </span>
            a nivel nacional.
          </p>
          <section className="bg-white border rounded-lg p-8 my-8">
            <OrderForm />
            <p className='text-sm py-4 text-gray-500 font-semibold'>Agrega tus bultos</p>
            <ItemCard />
            <div className='grid grid-cols-2'>
              
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}
