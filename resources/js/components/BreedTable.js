import React, { useEffect, useState } from 'react'
import { Icon, Table } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { breedActions } from "../state/actions";
import { connect } from "react-redux";
import { SELECTORS} from '../state/store';
import ImageModal from './Modal';

const BreedTable = (props) => {

    const { allBreeds, listBreeds } = props
    const [triggerModal, setTriggerModal] = useState(false);
    const [breedName, setBreedName] = useState([]);

    useEffect(() => {
        listBreeds()
    },[]);

    const getBreedImages = (breedName) => {
        setBreedName(breedName)
        setTriggerModal(true)
    }

    const changeTriggerModel = () => {
        setTriggerModal(false)
    }

    return(
        <>
            <Table color='red' key='red'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Breed Name</Table.HeaderCell>
                        <Table.HeaderCell>View Images</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {
                    allBreeds && allBreeds.length > 0 && allBreeds.map( function(breed, i)  {
                        return (
                            <Table.Row key={breed.name}  onClick={() => { getBreedImages(breed.name)}}>
                                <Table.Cell>{i+1}</Table.Cell>
                                <Table.Cell>{breed.name}</Table.Cell>
                                <Table.Cell>
                                    <Button animated>
                                    <Button.Content visible>Images</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='images' />
                                    </Button.Content>
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })
                }
                </Table.Body>
            </Table>
            <ImageModal triggerModal={triggerModal} breedName={breedName} changeTriggerModel={changeTriggerModel}/>
        </>
    )

}

const mapStateToProps = (state) => ({

allBreeds: SELECTORS.allBreeds(state)
});

const mapDispatchToProps =  {
listBreeds: breedActions.listBreeds,
};

export default connect( mapStateToProps, mapDispatchToProps )(BreedTable);
