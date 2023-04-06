import React from 'react'
import "./SideBar.css"
import { Button, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from '../sidebaroption/SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Duo, Person, Phone } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';

const SideBar = () => {
  const dispatch = useDispatch();

  return (
    <div className='sidebar'>
      <Button
      onClick={() => dispatch(openSendMessage())}
      className="sidebar_compose"
      startIcon={<AddIcon/>} >
        Compose
      </Button>

      <SidebarOption
      Icon={<InboxIcon />}
      title="Inbox"
      number={""}
      selected={true}
       />
       <SidebarOption
      Icon={<StarIcon />}
      title="Starred"
      number={""}
       />
       <SidebarOption
      Icon={<AccessTimeIcon />}
      title="Snoozed"
      number={""}
       />
       <SidebarOption
      Icon={<LabelImportantIcon />}
      title="Important"
      number={""}
       />
       <SidebarOption
      Icon={<NearMeIcon />}
      title="Sent"
      number={""}
       />
       <SidebarOption
      Icon={<NoteIcon />}
      title="Drafts"
      number={""}
       />
       <SidebarOption
      Icon={<ExpandMoreIcon />}
      title="More"
      number={""}
       />

      <div className="sidebar_footer">
        <div className="sidebarFooter_icon">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default SideBar
