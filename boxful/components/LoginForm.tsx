"use client"

import { LoginOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import React from 'react'

const validateMessages = {
    required: '${label} es un campo requerido',
    types: {
        email: '${label} no es un correo válido',
    },
};

const onFinish = (values: any) => {
    console.log(values);
};


export default function LoginForm() {
    return (
        <section className="bg-white border rounded-lg px-4 py-8 md:p-8 my-8">
            <Form
                layout='vertical'
                name="login"
                validateMessages={validateMessages}
                onFinish={onFinish}
                className='grid grid-cols-1 font-medium text-gray-500'
            >
                <Form.Item name={['email']} label='📧 Correo electrónico' rules={[{ type: 'email' }]}>
                    <Input placeholder='example@mail.com' size='large' />
                </Form.Item>
                <Form.Item name={['password']} label='🔑 Contraseña'>
                    <Input type='password' placeholder='Contraseña' size='large' />
                </Form.Item>
                <div className='md:flex md:place-items-end'>
                    <Button color="primary" variant='solid' size='large' className='w-full md:w-max md:h-16 md:mx-auto'>Iniciar sesión <span className='ml-12'><LoginOutlined /></span></Button>
                </div>
            </Form>
        </section>
    )
}
