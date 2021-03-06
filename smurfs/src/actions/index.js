import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const ADDING_SMURF = 'ADDING_SMURF';

const URL = 'http://localhost:3333/smurfs';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => {
  const getSmurfs = axios.get (URL);
  return dispatch => { 
    dispatch({type: FETCHING_SMURFS });
    getSmurfs
      .then(response => {
        dispatch({type: SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: 'Error Fetching Smurfs' });
      });
  };
};

export const createSmurf = smurf => {
  const addSmurf = axios.post(URL, smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    addSmurf
      .then(response => {
        console.log(response.data);
        dispatch({type: SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: 'Error Adding smurf' });
      });
  };
};
