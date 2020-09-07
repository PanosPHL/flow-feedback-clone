import React from 'react';
import { MDBCard, MDBCardImage } from 'mdbreact';
import styles from '../css-modules/BrowseCats.module.css';
import { Link } from 'react-router-dom';

const CatCard = ({ cover, catId }) => {
    return (
        <Link to={`category/${catId}`}>
        <MDBCard className={styles.card + ' rounded'}>
            <MDBCardImage className='img-fluid' src={cover} />
        </MDBCard>
        </Link>
    )
}

export default CatCard;