import React from 'react';
import { useSelector } from 'react-redux';
import CatCard from './CatCard';
import styles from '../css-modules/BrowseCats.module.css';

const BrowseCats = () => {
    const categories = useSelector(state => Object.values(state.entities.categories));

    return (
            <div style={{gridRow: '3 / 5', gridColumn: '2 / 6'}} className={styles.container}>
        <h2 className={styles.header + ' font-weight-bold'}>Categories</h2>
        <div className={styles.cardContainer}>
        {categories.length ?
        categories.map((category, i) => {
            return (
                <CatCard key={`cat-${i + 1}`} cover={category.cover} catId={category.id} name={category.name}/>
            )
        }) :
    <> </> }
        </div>
        </div>
    )
}

export default BrowseCats;