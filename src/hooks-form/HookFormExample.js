import React from 'react';
import { useForm } from 'react-hook-form';

const HookFormExample = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const saveData= (data) => {
        console.log ("Data: ", data)
    }
    return (
        <div className='container col-10'>
            <form className='form-control my-4' onSubmit={handleSubmit(saveData)}>
                <div className='form-floating my-3'>
                    <input 
                    type='text'
                    className='form-control'
                    id='firstName'
                    placeholder='Enter first name'
                    {...register('firstName', {required: true})}
                    />
                    <label for='firstName'>Enter FirstName</label>
                    {errors.firstName && <span className='text-danger'>FirstName is required</span>}
                </div>
                <div className='form-floating'>
                    <input
                    type='text'
                    className='form-control'
                    id='lastName'
                    placeholder='Enter LastName'
                    {...register('lastName',{required: true} )}
                    />
                    <label for='lastName'>Enter LastName</label>
                    {errors.lastName && <span className='text-danger'>Last Name is required</span>}
                </div>
                <div className='card-footer'>
                    <button type='submit' className='btn btn-primary mb-2'>Submit</button>
                </div>
            </form>           
        </div>
    );
};

export default HookFormExample;