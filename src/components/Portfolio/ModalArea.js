import { Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import classes from './portfolio.module.css'


const ModalArea = (props) =>{
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    height:'auto',
    bgcolor: '#111',
    border: '2px solid #fff',
    borderRadius:'5px',
    boxShadow: 24,
    p: 4,
  };

    return(
        <Modal
        open={props.open}
        onClose={props.onClose}
        key={props.id}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={classes['box']}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textTransform:'uppercase', fontSize:'2rem', fontWeight:'600', display:'flex', justifyContent:'center'}}>
            {props.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mb:2, mt: 2, fontSize:'1.7rem',display:'flex', justifyContent:'center', alignText:'center' }}>
            {props.src}
          </Typography>
          <img className={classes['port-img1']} src={props.img} />
        </Box>
      </Modal>
    )
}
export default ModalArea;