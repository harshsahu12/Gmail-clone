import React from 'react';
import './EmailRow.css';
import { IconButton } from '@mui/material';
import { CheckBoxOutlineBlank, LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../../features/mailSlice';

const EmailRow = ({ id, title, subject, description, time }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
      dispatch(
        selectMail({
          id,
          title,
          subject,
          description,
          time,
        })
      )
        navigate("/mail")
    }
  return (
    <div onClick={openMail} className='emailrow'>
      <div className='emailrow_option'>
        <IconButton>
          <CheckBoxOutlineBlank />
        </IconButton>
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className='emailrow_title'>{title}</h3>
      <div className='emailrow_message'>
        <h4>
          {subject}
          <span className='emailrow_description'>{description}</span>
        </h4>
      </div>
      <div className='emailrow_time'>{time}</div>
    </div>
  );
};

export default EmailRow;
