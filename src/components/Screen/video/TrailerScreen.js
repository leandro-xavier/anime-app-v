import React, { useEffect } from 'react';
import {Modal, Button} from 'react-bootstrap'
//import {Player} from 'video-react';
import ReactPlayer from 'react-player/youtube';

export const TrailerScreen = (props) => {

    useEffect(() => {
        <ReactPlayer/>
    }, []);

    return (
        <>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"><h4>{props.title}   {props.chapter}</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReactPlayer url={props.video} config={{youtube: { playerVars: { showinfo: 1 }}}}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} className="btn-danger">Close</Button>
                </Modal.Footer>
            </Modal> 
        </>
  );
}

     