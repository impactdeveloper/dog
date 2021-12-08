import React from 'react'
import { Button, Modal} from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import { breedActions } from "../state/actions";
import { connect } from "react-redux";
import { SELECTORS} from '../state/store';
import CONFIG from '../config';
import Gallery from 'react-grid-gallery';

function ImageModal(props) {
    const [open, setOpen] = useState(false)
    const { triggerModal, breedName, changeTriggerModel, listbreedImages, breedImages } = props
    const IMAGES = []
    const [images, setImages] = useState([])

    useEffect(() => {
        if(triggerModal){
            listbreedImages(breedName)
            setOpen(triggerModal)
            changeTriggerModel()
        }
    },[triggerModal]);

    useEffect(() => {
        if(breedImages.length > 0 && breedImages != IMAGES ){
            breedImages.forEach(function (item, index) {
                let imageData = {
                    src: CONFIG.IMAGE_PATH + item,
                    thumbnail: CONFIG.IMAGE_PATH + item,
                    thumbnailWidth: 320,
                    thumbnailHeight: 212
                }
                IMAGES.push(imageData)
            });
            setImages(IMAGES)
        }
    },[breedImages]);

    const closeModel = () => {
        setImages([])
        setOpen(false)
    }
    return (
        <Modal
            size="fullscreen"
            onClose={() => setOpen(false)}
            open={open}
        >
            <Modal.Header>{breedName} <Button onClick={closeModel} style={{float : "right"}}>Go Back</Button></Modal.Header>
            <Modal.Content>
            <Gallery images={images} rowHeight={225} maxColumns={5}/>
            </Modal.Content>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    breedImages: SELECTORS.breedImages(state)
});

const mapDispatchToProps =  {
listbreedImages: breedActions.listbreedImages
};

export default connect( mapStateToProps, mapDispatchToProps )(ImageModal);
