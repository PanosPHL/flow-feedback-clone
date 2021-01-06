import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDBIcon } from 'mdbreact';
import { toggleTitleForm } from '../store/ui/flow';
import { updateFlowName } from '../store/flows';
import { setErrors, clearErrors } from '../store/errors';
import Errors from './Errors';
import PlayerContext from '../contexts/PlayerContext';
import styles from '../css-modules/FlowTitleAndForm.module.css';

const FlowTitleAndForm = ({ flowName, id }) => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const { myFlow } = useContext(PlayerContext);
  const { titleForm, newNoteForm, editNoteForm } = useSelector(
    (state) => state.ui.flow
  );
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setName(flowName);
  }, [flowName]);

  useEffect(() => {
    dispatch(clearErrors());
  }, [dispatch, titleForm, name]);

  const handleEditClick = () => {
    if (!newNoteForm && !editNoteForm) {
      dispatch(toggleTitleForm());
    }
  };

  const handleCancelClick = () => {
    dispatch(toggleTitleForm());
    setName(flowName);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const res = await dispatch(updateFlowName(id, name));

    if (res.ok) {
      dispatch(toggleTitleForm());
      setName(res.data.flow.name);
      setSubmitted(true);
      return;
    }

    dispatch(setErrors(res.data.error.errors));
  };

  return (
    <>
      <div className={styles.container}>
        {titleForm ? (
          <form className={styles.formContainer} onSubmit={handleFormSubmit}>
            <input
              type="text"
              onChange={handleNameChange}
              className={styles.input + ' form-control form-control-lg'}
              value={name}
            />
            <div>
              <button
                type="submit"
                className={styles.formButton + ' btn btn-amber'}
                style={{
                  marginRight: '12px',
                }}
              >
                <MDBIcon icon="paper-plane" />
              </button>
              <button
                onClick={handleCancelClick}
                type="button"
                className={styles.formButton + ' btn btn-blue-grey'}
              >
                <MDBIcon icon="times" />
              </button>
            </div>
            {errors.length ? (
              <Errors
                className={styles.errorList}
                containerClass={styles.errorContainer}
                errors={errors}
              />
            ) : (
              <> </>
            )}
          </form>
        ) : (
          <>
            <h4 className={styles.textalign + ' font-weight-normal'}>
              {submitted ? name : flowName}
            </h4>
            {myFlow ? (
              <button
                onClick={handleEditClick}
                type="button"
                className={styles.titleButton + ' btn btn-amber'}
              >
                <MDBIcon icon="edit"></MDBIcon>
              </button>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </>
  );
};

FlowTitleAndForm.defaultProps = {
  flowName: '',
};

export default FlowTitleAndForm;
