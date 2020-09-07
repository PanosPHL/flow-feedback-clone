import React from 'react';
import { MDBCard, MDBCardImage } from 'mdbreact';
import styles from '../css-modules/BrowseCats.module.css';
import { Link } from 'react-router-dom';

const CatCard = ({ cover, catId, name }) => {
    return (
        <Link to={`category/${catId}`}>
        <MDBCard className={styles.card + ' rounded'}>
            <MDBCardImage className='img-fluid' src={cover} />
        </MDBCard>
        <span style={{color: 'black', marginTop: '8px', display: 'block'}}>{name}</span>
        </Link>
    )
}

export default CatCard;