import React from 'react'
import "./SendMail.css"
import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';
import { db } from '../../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const SendMail = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
      addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    });

    dispatch(closeSendMessage())
  } 
  return (
    <div className='SendMail'>
      <div className="sendMail_header">
        <h3>New Message</h3>
        <Close onClick={() => dispatch(closeSendMessage())} className='sendMail_close' />
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} >
        <input placeholder='To' type="email" {...register("to", { required: true })}/>
        {errors.to && <p className='sendMail_error'>This field is required</p>}
        <input placeholder='From' type="text" {...register("subject", { required: true })} />
        {errors.subject && <p className='sendMail_error'>This field is required</p>}
        <input className='sendmail_message' placeholder='Message..' {...register("message", { required: true })} />
        {errors.message && <p className='sendMail_error'>This field is required</p>}

        <div className="sendMail_option">
            <Button type="submit" onClick={handleSubmit(onSubmit)}>Send</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
