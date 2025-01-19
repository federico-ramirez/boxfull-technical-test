"use client"

import { SignatureOutlined } from '@ant-design/icons';
import { Button, Checkbox, CheckboxProps, Form, Input, Select, SelectProps } from 'antd'
import React, { useState } from 'react'

const validateMessages = {
    required: '${label} es un campo requerido',
    types: {
        email: '${label} no es un correo válido',
    },
};

const onFinish = (values: any) => {
    console.log(values);
};

const genderOptions: SelectProps["options"] = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Femenino', value: 'Femenino' },
    { label: 'Otro', value: 'Otro' }
];

const stateOptions: SelectProps["options"] = [
    { label: 'Ahuachapán', value: 'Ahuachapán', id: 1 },
    { label: 'Cabañas', value: 'Cabañas', id: 2 },
    { label: 'Chalatenango', value: 'Chalatenango', id: 3 },
    { label: 'Cuscatlán', value: 'Cuscatlán' },
    { label: 'La Libertad', value: 'La Libertad' },
    { label: 'La Paz', value: 'La Paz' },
    { label: 'La Unión', value: 'La Unión' },
    { label: 'Morazán', value: 'Morazán' },
    { label: 'San Miguel', value: 'San Miguel' },
    { label: 'San Salvador', value: 'San Salvador' },
    { label: 'San Vicente', value: 'San Vicente' },
    { label: 'Santa Ana', value: 'Santa Ana' },
    { label: 'Usulután', value: 'Usulután', for: 14 }
];

const cityOptions: SelectProps["options"] = [

];

const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

export default function SignUpForm() {
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedState, setSelectedState] = useState('San Salvador');
    const [selectedCity, setSelectedCity] = useState('');

    return (
        <section className="bg-white border rounded-lg px-4 py-8 md:p-8 my-8">
            <Form
                layout='vertical'
                name="login"
                validateMessages={validateMessages}
                onFinish={onFinish}
                className='grid grid-cols-1 md:grid-cols-2 font-medium text-gray-500'
            >
                <Form.Item name={['firstName']} label='Nombres' rules={[{ required: true }]} className='p-2 col-span-2 md:col-span-1'>
                    <Input placeholder='Nombres' size='large' />
                </Form.Item>
                <Form.Item name={['lastName']} label='Apellidos' rules={[{ required: true }]} className='p-2 col-span-2 md:col-span-1'>
                    <Input placeholder='Apellidos' size='large' />
                </Form.Item>
                <Form.Item name={['gender']} label='Género' rules={[{ required: true }]} className='p-2 col-span-2 md:col-span-1'>
                    <Select
                        placeholder='Género'
                        options={genderOptions}
                        value={selectedGender}
                        onChange={(value) => setSelectedGender(value)}
                        size='large' />
                </Form.Item>
                <Form.Item name={['phoneNumber']} label='📱 Número de teléfono' rules={[{ required: true }]} className='p-2 col-span-2 md:col-span-1'>
                    <Input placeholder='Número de teléfono' size='large' />
                </Form.Item>
                <Form.Item label="Departamento" className='p-2 col-span-2 md:col-span-1'>
                    <Select
                        placeholder='Departamento'
                        options={stateOptions}
                        value={selectedState}
                        onChange={(value) => setSelectedState(value)}
                        size='large' />
                </Form.Item>
                <Form.Item label="Municipio" className='p-2'>
                    <Select
                        placeholder='Municipio'
                        options={cityOptions}
                        value={selectedCity}
                        onChange={(value) => setSelectedCity(value)}
                        size='large' />
                </Form.Item>
                <Form.Item name={['email']} label='📧 Correo electrónico' rules={[{ type: 'email', required: true }]}
                    className='p-2 col-span-2'>
                    <Input placeholder='example@mail.com' size='large' />
                </Form.Item>
                <Form.Item name={['password']} label='🔑 Contraseña' rules={[{ min: 8, required: true }]} className='p-2 col-span-2 md:col-span-1'>
                    <Input type='password' placeholder='Contraseña' size='large' />
                </Form.Item>
                <Form.Item name={['confirmPassword']} label='🔑 Confirmar contraseña' rules={[{ min: 8, required: true }]} className='p-2'>
                    <Input type='password' placeholder='Contraseña' size='large' />
                </Form.Item>
                <Form.Item className='col-span-2 md:mx-auto'>
                    <Checkbox onChange={onChange}>
                        Al registrarte, aceptas los <span className='text-blue-600 underline'>términos y condiciones</span> de <span className='text-orange-600'>Boxful</span>
                    </Checkbox>
                </Form.Item>
                <Form.Item className='p-2 col-span-2 md:mx-auto'>
                    <Button color="primary" variant='solid' size='large' className='w-full md:w-max md:h-16 md:mx-auto'>Registrarme <span className='ml-12'><SignatureOutlined /></span></Button>
                </Form.Item>
            </Form>
        </section>
    )
}
