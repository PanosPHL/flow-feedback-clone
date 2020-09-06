import React, { useContext } from 'react';
import styles from '../css-modules/EditFlowPage.module.css';
import NoteCardContext from '../contexts/NoteCardContext';
import { timestampToStr } from '../utils/timestamps';
import { MDBCardText, MDBIcon } from 'mdbreact';

const NoteCardBodyContent = ({ timestamp }) => {
    const { handlers: { handleTrashClick, handleBtnClick }, noteContent} = useContext(NoteCardContext);

    return (
        <>
        <MDBCardText>
                        <span className={styles.textDiv}>
                            <span className={styles.noteTopRow}>
                        <span className={styles.cardTimestamp + ' font-weight-bold'}>{timestampToStr(timestamp)}</span>
                        <button onClick={handleTrashClick} type='button' className={styles.trashButton + ' btn btn-light btn-sm'}><MDBIcon icon='trash' /></button>
                            </span>
                        <span className={styles.cardContent}>{noteContent}</span>
                        </span>
                    </MDBCardText>
                    <div className={styles.buttonDiv}>
                    <button onClick={handleBtnClick} type='button' className={styles.editNote + ' btn btn-sm btn-blue-grey'}>Edit Note</button>
                    </div>
                    </>
    )
}

export default NoteCardBodyContent;