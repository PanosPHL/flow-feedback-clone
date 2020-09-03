import React from 'react';
import styles from '../css-modules/FetchFlow.module.css';

const FlowFormTopRow = () => {
    return (
        <div className={styles.topRow + ' border-bottom header border-light'}>
            <h3 className='font-weight-bold'>Create Flow</h3>
            <h5>Self analyze your videos or share with friends</h5>
        </div>
    );
}

export default FlowFormTopRow;