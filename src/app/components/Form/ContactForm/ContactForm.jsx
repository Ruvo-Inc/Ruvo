import React, { useState } from 'react';
import './style.css'
import Wrapper from '../../UI/Wrapper/Wrapper';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
const ContactForm = () => {
    const [formData, setFormData] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const onSubmitForm = ()=>{
        setLoading(true)
    }
    return (

        <>
            <form className='flex gap-[20px] w-full flex-col' onSubmit={onSubmitForm}>
                <Wrapper className='flex gap-[20px] w-full max-sm:flex-col'>
                    <Input name="firstName" required={true} type='text' placeholder='Jhon' label='First Name' value={formData?.firstName}
                        setData={handleChange} />
                    <Input name="lastName" required={true} type='text' placeholder='Duo' label='Last Name' value={formData?.lastName}
                        setData={handleChange} />
                </Wrapper>
                <Wrapper className='flex gap-[20px]  w-full  max-sm:flex-col'>
                    <Input name="email" required={true} type='text' placeholder='example@xyz.com' label='Email Address' value={formData?.email}
                        setData={handleChange} />
                    <Input name="organization" required={true} type='text' placeholder='Organization' label='Organization' value={formData?.organization}
                        setData={handleChange} />
                </Wrapper>
                <Textarea name="message" required={true} type='text' placeholder='Add a comment' label='Message' value={formData?.message || ''}
                        setData={handleChange} >

                </Textarea>
                <Wrapper className='flex mt-[15px] max-w-[204px]'>
                <Button btnType='solid' loading={loading}  loadingText='Submitting...' type="Submit" color='green' >
                Submit Inquiry
                </Button>
                </Wrapper>
            </form>
        </>
    );
}

export default ContactForm;
