import styled from 'styled-components'
import {Close} from '@material-ui/icons'
import React,{useState} from 'react';


const Container = styled.div`
        height:30px;
        background-color: teal;
        color:white;
        display:flex;
        align-items:center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
`

const Announcement = () => {
    const [ShowAnnouncement, setShowAnnouncement] = useState(true);
  return (
    ShowAnnouncement ? <Container>
    Almost before we knew it, we had left the ground.
    <Close onClick={()=> setShowAnnouncement(false)} style={{cursor:"pointer"}} />
    </Container>:<></>
  )
}

export default Announcement