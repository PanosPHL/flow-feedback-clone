import React from 'react';
import { MDBBox } from 'mdbreact';
import styles from '../css-modules/BrowseCats.module.css';
import { Link } from 'react-router-dom';

const CatCard = ({ cover, catId, name }) => {
    return (
        <Link to={`category/${catId}`}>
            <MDBBox>
                <img className={styles.cover} src={cover} alt={`${name} cover`}/>
                <span style={{ color: 'black', marginTop: '8px', display: 'block' }}>{name}</span>
            </MDBBox>
        </Link>
    )
}

export default CatCard;