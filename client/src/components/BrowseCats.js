import React, { useEffect, useState } from 'react';
import CatCard from './CatCard';
import styles from '../css-modules/BrowseCats.module.css';

const BrowseCats = () => {
    const [cats, setCats] = useState({ cats: [] });

    useEffect(() => {
        const fetchCats = async () => {
            const res = await fetch('/api/categories');

            res.data = await res.json();

            if (res.ok) {
                setCats({ cats: res.data.categories });
            }
        }

        fetchCats();
    }, [])

    return (
            <div style={{gridRow: '3 / 5', gridColumn: '2 / 6'}} className={styles.container}>
        <h2 className={styles.header + ' font-weight-bold'}>Categories</h2>
        <div className={styles.cardContainer}>
        {cats.cats.length ?
        cats.cats.map((cat, i) => {
            return (
                <CatCard key={`cat-${i + 1}`} cover={cat.cover} catId={cat.id} name={cat.name}/>
            )
        }) :
    <> </> }
        </div>
        </div>
    )
}

export default BrowseCats;