import React from 'react'
import { image1 } from '../../assets/images'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Form, Formik } from 'formik';
import Input from '../CommonField/Input';

const Login = () => {
    return (
        <div className='h-[100vh] w-[100vw] bg-primary-accent py-14 px-24'>
            <div className='w-full h-full bg-white rounded-2xl shadow-lg flex items-center overflow-hidden'>
                <img className='h-full w-1/2 object-cover' src={image1} />
                <div className='px-8 flex-1'>
                    <div className="flex gap-4 items-center">
                        <KeyboardBackspaceIcon />
                        <div>
                            <h1 className='text-2xl tracking-wide'>Login</h1>
                            <p className='text-sm text-color2'>Login in to explore more</p>
                        </div>
                    </div>
                    <Formik
                        initialValues={{ email: '' }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {() => (
                            <Form className='mt-6 flex flex-col gap-3'>
                                <Input name="email" inputClass='w-full' label="Email *" />
                                <Input name="password" inputClass='w-full' label="Password *" />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Login