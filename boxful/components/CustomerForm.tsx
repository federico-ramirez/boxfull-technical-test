"use client";

import { Button, DatePicker, DatePickerProps, Form, Input, Select } from 'antd'
import type { SelectProps } from 'antd';
import { ArrowRightOutlined, CalendarOutlined, CompassFilled } from '@ant-design/icons';
import React, { lazy, useState } from 'react'
import Flag from 'react-world-flags'

/**
 * 
        7682A0
 */

const countryOptions: SelectProps["options"] = [
    { label: <span><Flag code={'sv'} /></span>, value: "+503" },
    { label: <span><Flag code={'hn'} /></span>, value: "+504" },
];

const stateOptions: SelectProps["options"] = [
    { label: 'Ahuachapan', value: 'Ahuachapan', id: 1 },
    { label: 'Cabanas', value: 'Cabanas', id: 2 },
    { label: 'Chalatenango', value: 'Chalatenango', id: 3 },
    { label: 'Cuscatlan', value: 'Cuscatlan' },
    { label: 'La Libertad', value: 'La Libertad' },
    { label: 'La Paz', value: 'La Paz' },
    { label: 'La Union', value: 'La Union' },
    { label: 'Morazan', value: 'Morazan' },
    { label: 'San Miguel', value: 'San Miguel' },
    { label: 'San Salvador', value: 'San Salvador' },
    { label: 'San Vicente', value: 'San Vicente' },
    { label: 'Santa Ana', value: 'Santa Ana' },
    { label: 'Usulutan', value: 'Usulutan', for: 14 }
];

const cityOptions: SelectProps["options"] = [

];

export default function CustomerForm() {
    const [form] = Form.useForm();
    const [selectedCode, setSelectedCode] = useState("+503");
    const [selectedState, setSelectedState] = useState("San Salvador");
    const [selectedCity, setSelectedCity] = useState("");



    const calendarIcon = <CalendarOutlined />;
    const addressIcon = <CompassFilled />;

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <section className="bg-white border rounded-lg p-8 my-8">
            <Form form={form} layout="vertical" labelCol={{ className: 'text-gray-500 !text-gray-500' }} className='grid grid-cols-1 md:grid-cols-3 font-medium text-gray-500'>
                <Form.Item label="📍 Dirección de recolección" className='p-2 md:col-span-2' style={{ color: '#F4F5F9' }} name="direccion">
                    <Input id='direccion-recoleccion' placeholder='Dirección de recolección' size='large' />
                </Form.Item>
                <Form.Item label="📆 Fecha programada" className='p-2 md:col-span-1' style={{ color: '#7682A0' }} name="fecha-programada">
                    <DatePicker className='w-full'
                        placeholder='Fecha programada'
                        prefix={calendarIcon}
                        suffixIcon=""
                        format={{
                            format: 'DD/MM/YYYY',
                            type: 'mask',
                        }}
                        onChange={onChange}
                        size='large' />
                </Form.Item>
                <Form.Item label="Nombres" name="nombres" className='p-2' labelCol={{ className: "" }}>
                    <Input placeholder='Nombres' size='large' />
                </Form.Item>
                <Form.Item label="Apellidos" name="apellidos" className='p-2'>
                    <Input placeholder='Apellidos' size='large' />
                </Form.Item>
                <Form.Item label="Correo electrónico" name="correo" className='p-2'>
                    <Input type='email' placeholder='example@mail.com' size='large' />
                </Form.Item>
                <Form.Item label="Teléfono" className='p-2 md:col-span-1'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Select
                            style={{ width: 80 }}
                            size='large'
                            options={countryOptions}
                            value={selectedCode}
                            onChange={(value) => setSelectedCode(value)}
                        />
                        <Input
                            name="telefono"
                            style={{ flex: 1 }}
                            size='large'
                            placeholder="7711-2277"
                        />

                    </div>
                </Form.Item>
                <Form.Item label="Dirección del destinatario" className='p-2 md:col-span-2'>
                    <Input placeholder='Dirección del destinatario' size='large' addonBefore={addressIcon} />
                </Form.Item>
                <Form.Item label="Departamento" className='p-2'>
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
                <Form.Item label="Punto de referencia" className='p-2'>
                    <Input placeholder='Punto de referencia' size='large' />
                </Form.Item>
                <Form.Item label="Indicaciones" className='p-2 md:col-span-3'>
                    <Input placeholder='Indicaciones' size='large' />
                </Form.Item>
                <div className='md:col-start-3 md:grid md:justify-items-end p-2'>
                    <Button type="primary" size='large' className='w-full md:w-max md:h-16'>Siguiente <span className='ml-12'><ArrowRightOutlined /></span></Button>
                </div>
            </Form>
        </section>
    )
}