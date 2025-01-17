import ItemCard from '@/components/ItemCard'
import OrderForm from '@/components/OrderForm'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Button } from 'antd'
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
              <div className='pr-2'>
                <Button color='default' variant='filled' size='large' className='w-full border-2 border-gray-200 md:w-40 md:h-16 text-right font-semibold text-gray-500 mr-2'><span className='mr-8'><ArrowLeftOutlined /></span> Regresar</Button>
              </div>
              <div className='pl-2 md:pl-4'>
                <Button color='primary' variant='solid' size='large' className='w-full md:w-64 md:h-16 font-semibold md:-right-16 lg:-right-44'>Enviar <span><ArrowRightOutlined /></span></Button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}
