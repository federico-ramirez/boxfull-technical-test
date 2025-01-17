"use client";

import { Button, DatePickerProps, Form, Input, InputNumber } from 'antd'
import { ExpandOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react'

export default function OrderForm() {
    const [form] = Form.useForm();


    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <>
            <p className='text-sm py-4 text-gray-500 font-semibold'>Agrega tus bultos</p>
            <div className='bg-gray-custom border-2 border-dashed rounded-lg'>
                <Form form={form} layout="vertical" labelCol={{ className: 'text-gray-500 !text-gray-500' }} className='grid grid-cols-1 md:grid-cols-12 font-medium text-gray-500 p-2'>
                    <div className='md:grid md:grid-flow-col p-2 md:col-span-5'>
                        <Form.Item label="Largo" labelCol={{ className: "" }}>
                            <InputNumber addonBefore={<ExpandOutlined />} step={0.1} className='w-full' placeholder='Largo' suffix="cm" size='large' />
                        </Form.Item>
                        <Form.Item label="Alto" labelCol={{ className: "" }}>
                            <InputNumber step={0.1} className='w-full' placeholder='Alto' suffix="cm" size='large' />
                        </Form.Item>
                        <Form.Item label="Ancho" labelCol={{ className: "" }}>
                            <InputNumber step={0.1} className='w-full' placeholder='Ancho' suffix="cm" size='large' />
                        </Form.Item>
                    </div>
                    <Form.Item label="Peso en libras" name="apellidos" className='p-2 md:col-span-2'>
                        <InputNumber className='w-full' step={0.1} placeholder='Peso' suffix="lb" size='large' />
                    </Form.Item>
                    <Form.Item label="Contenido" name="contenido" className='p-2 md:col-span-5'>
                        <Input placeholder='Contenido' size='large' />
                    </Form.Item>
                    <div className='md:col-span-3 md:col-start-10 md:grid md:justify-items-end p-2'>
                        <Button color='default' variant='filled' size='large' className='w-full md:w-max md:h-16'>Agregar <span className='ml-12'><PlusOutlined /></span></Button>
                    </div>
                </Form>
            </div>
        </>
    )
}