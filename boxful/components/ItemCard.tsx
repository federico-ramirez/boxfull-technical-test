"use client";

import { ExpandOutlined } from '@ant-design/icons'
import { Form, Input, InputNumber } from 'antd'
import React from 'react'

export default function () {
    const [form] = Form.useForm();

    return (
        <>
            <div className='rounded-lg border custom-green mb-4'>
                <Form form={form} layout="vertical" labelCol={{ className: 'text-gray-500 !text-gray-500' }} className='grid grid-cols-1 md:grid-cols-12 font-medium text-gray-500 p-2'>
                    <Form.Item label="Peso en libras" name="apellidos" className='p-2 md:col-span-2'>
                        <InputNumber className='w-full' step={0.1} placeholder='Peso' suffix="lb" size='large' />
                    </Form.Item>
                    <Form.Item label="Contenido" name="contenido" className='p-2 md:col-span-5'>
                        <Input placeholder='Contenido' size='large' />
                    </Form.Item>
                    <div className='md:grid md:grid-flow-col p-2 md:col-span-5'>
                        <Form.Item label="Largo" labelCol={{ className: "" }}>
                            <InputNumber addonBefore={<ExpandOutlined />} className='w-full' placeholder='Largo' suffix="cm" size='large' />
                        </Form.Item>
                        <Form.Item label="Alto" labelCol={{ className: "" }}>
                            <InputNumber className='w-full' placeholder='Alto' suffix="cm" size='large' />
                        </Form.Item>
                        <Form.Item label="Ancho" labelCol={{ className: "" }}>
                            <InputNumber className='w-full' placeholder='Ancho' suffix="cm" size='large' />
                        </Form.Item>
                    </div>
                </Form>
            </div>
            <div className='rounded-lg border custom-green mb-4'>
                <Form form={form} layout="vertical" labelCol={{ className: 'text-gray-500 !text-gray-500' }} className='grid grid-cols-1 md:grid-cols-12 font-medium text-gray-500 p-2'>
                    <Form.Item label="Peso en libras" name="apellidos" className='p-2 md:col-span-2'>
                        <InputNumber className='w-full' step={0.1} placeholder='Peso' suffix="lb" size='large' />
                    </Form.Item>
                    <Form.Item label="Contenido" name="contenido" className='p-2 md:col-span-5'>
                        <Input placeholder='Contenido' size='large' />
                    </Form.Item>
                    <div className='md:grid md:grid-flow-col p-2 md:col-span-5'>
                        <Form.Item label="Largo" labelCol={{ className: "" }}>
                            <InputNumber addonBefore={<ExpandOutlined />} className='w-full' placeholder='Largo' suffix="cm" size='large' />
                        </Form.Item>
                        <Form.Item label="Alto" labelCol={{ className: "" }}>
                            <InputNumber className='w-full' placeholder='Alto' suffix="cm" size='large' />
                        </Form.Item>
                        <Form.Item label="Ancho" labelCol={{ className: "" }}>
                            <InputNumber className='w-full' placeholder='Ancho' suffix="cm" size='large' />
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </>
    )
}
