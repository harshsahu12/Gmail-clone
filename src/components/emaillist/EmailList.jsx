    import React, { useState, useEffect } from 'react';
    import './EmailList.css';
    import {
      ArrowDropDown,
      CheckBoxOutlineBlank,
      ChevronLeft,
      ChevronRight,
      Inbox,
      KeyboardHide,
      LocalOffer,
      MoreVert,
      People,
      Redo,
      Settings,
    } from '@mui/icons-material';
    import { IconButton } from '@mui/material';
    import Section from '../section/Section';
    import EmailRow from '../emailrow/EmailRow';
    import { collection, getDocs } from 'firebase/firestore';
    import { db } from '../../firebase';
    
    const EmailList = () => {
      const [emails, setEmails] = useState([]);
    
      useEffect(() => {
        const fetchEmails = async () => {
          const querySnapshot = await getDocs(collection(db, 'emails'));
          const data = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
          setEmails(data);
        };
    
        fetchEmails();
      }, []);
    
      return (
        <div className='emaillist'>
          <div className='emaillist_setting'>
            <div className='emaillistsettings_left'>
              <IconButton>
                <CheckBoxOutlineBlank />
              </IconButton>
              <IconButton>
                <ArrowDropDown />
              </IconButton>
              <IconButton>
                <Redo />
              </IconButton>
              <IconButton>
                <MoreVert />
              </IconButton>
            </div>
            <div className='emaillistsettings_right'>
              <IconButton>
                <ChevronLeft />
              </IconButton>
              <IconButton>
                <ChevronRight />
              </IconButton>
              <IconButton>
                <KeyboardHide />
              </IconButton>
              <IconButton>
                <Settings />
              </IconButton>
            </div>
          </div>
          <div className='emaillist_section'>
            <Section Icon={<Inbox />} title="Primary" color="red" selected />
            <Section Icon={<People />} title="Social" color="#1a73e8" selected />
            <Section Icon={<LocalOffer />} title="Promotion" color="green" selected />
          </div>
    
          <div className="emaillist_list">
          {emails.map(({id, data: { to, subject, message, timestamp }}) => (
          <EmailRow
          key={id}
          id={id} 
          title={to}
          subject={subject}
          description={message}
          time={new Date(timestamp?.seconds * 1000).toUTCString()}
          /> 
          ))}

          <EmailRow
          title="harsh@gmail.com"
          subject="this is a test"
          description="how are you doing" 
          time="10pm"
          />
          <EmailRow
          title="harsh@gmail.com"
          subject="this is a test"
          description="how are you doing" 
          time="10pm"
          />
          <EmailRow
          title="harsh@gmail.com"
          subject="this is a test"
          description="how are you doing" 
          time="10pm"
          /><EmailRow
          title="harsh@gmail.com"
          subject="this is a test"
          description="how are you doing" 
          time="10pm"
          /><EmailRow
          title="harsh@gmail.com"
          subject="this is a test"
          description="how are you doing" 
          time="10pm"
          /><EmailRow
          title="harsh@gmail.com"
          subject="this is a test"
          description="how are you doing" 
          time="10pm"
          /><EmailRow
          title="harsh@gmail.com"
          subject="this is a test"
          description="how are you doing" 
          time="10pm"
          /><EmailRow
          title="harsh@gmail.com"
          subject="this is a test"
          description="how are you doing" 
          time="10pm"
          /><EmailRow
          title="harsh@gmail.com"
          subject="this is a test"
          description="how are you doing" 
          time="10pm"
          /><EmailRow
          title="harsh@gmail.com"
          subject="this is a test"
          description="how are you doing" 
          time="10pm"
          /><EmailRow
          title="harsh@gmail.com"
          subject="this is a test"
          description="how are you doing" 
          time="10pm"
          /><EmailRow
          title="harsh@gmail.com"
          subject="this is a test"
          description="how are you doing" 
          time="10pm"
          /><EmailRow
          title="harsh@gmail.com"
          subject="this is a test"
          description="how are you doing" 
          time="10pm"
          /><EmailRow
          title="harsh@gmail.com"
          subject="this is a test"
          description="how are you doing" 
          time="10pm"
          /><EmailRow
          title="harsh@gmail.com"
          subject="this is a test"
          description="how are you doing" 
          time="10pm"
          />
          </div>
        </div>
      );
    };
    
    export default EmailList;
    