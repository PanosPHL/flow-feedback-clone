import React, { useContext } from 'react';
import { MDBCardImage, MDBCardBody, MDBCardText, MDBCardTitle, MDBIcon } from 'mdbreact';
import { timestampToStr } from '../utils/timestamps';
import FlowCardContext from '../contexts/FlowCardContext';
import styles from '../css-modules/BrowseFlows.module.css';

const FlowCardContent = ({ thumbnail, name, myFlow, owner, date, duration }) => {
    const { handlers: { handleTrashClick } } = useContext(FlowCardContext);

    const findSlice = (str) => {
        if (!str.includes(' ')) {
            return 50;
        }

        let num = 50;
        let letterRegex = /[A-Za-z]/;

        while (num >= 0) {
            if (letterRegex.test(str[num]) && str[num + 1] === ' ') {
                return num + 1;
            }
            num--;
        }

        return 0;
    }

    const getTime = (createdAt) => {
        let diff = Math.floor(((Date.now() - new Date(createdAt).getTime()) / 1000) / (3600 * 60));

        if (!diff) {
            return `Today`;
        } else if (diff === 1) {
            return 'Yesterday';
        } else {
            return `${diff} days ago`;
        }
    }

    return (
        <>
            <MDBCardImage className={styles.cardImage + ' img-fluid'} src={thumbnail} waves />
            <MDBCardBody>
                <div className={styles.duration}>{timestampToStr(duration)}</div>
                <MDBCardTitle style={{ minHeight: '42px', fontWeight: 'bold', fontSize: '18px', color: '#636363' }}>{name.length > 50 ? name.slice(0, findSlice(name)) + '...' : name}</MDBCardTitle>
                <MDBCardText>
                    <span className={styles.innerText}>
                        <span>{owner}</span>
                        <span className={styles.dateAndTrashContainer}>
                            { getTime(date) }
                            {
                                myFlow ? <button type='button' className={styles.trashButton + ' btn btn-sm btn-light'} onClick={handleTrashClick}><MDBIcon icon='trash' /></button> : <span className={styles.hidden}></span>
                            }
                        </span>
                    </span>
                </MDBCardText>
            </MDBCardBody>
        </>
    )
}

export default FlowCardContent;