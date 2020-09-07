import React from 'react';
import { useSelector } from 'react-redux';
import CatCard from './CatCard';
import styles from '../css-modules/BrowseCats.module.css';

const BrowseCats = () => {
    const cats = useSelector(state => state.categories);

    return (
            <div style={{gridRow: '3 / 5', gridColumn: '2 / 6'}} className={styles.container}>
        <h2 className={styles.header + ' font-weight-bold'}>Categories</h2>
        <div className={styles.cardContainer}>
        {cats.length ?
        cats.map((cat, i) => {
            return (
                <CatCard key={`cat-${i + 1}`} cover={cat.cover} catId={cat.id}/>
            )
        }) :
    <> </> }
        </div>
        </div>
    )
}

export default BrowseCats;