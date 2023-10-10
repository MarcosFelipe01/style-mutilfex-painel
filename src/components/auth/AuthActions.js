import { toastr } from "react-redux-toastr";
import axios from 'axios';
import consts from '../../consts';

export function login(values) {
    return submit(values, `${consts.OAPI_URL}/auth`)
}

function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    { type: 'USER_FETCHED', payload: resp.data }
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error))
            })
    }
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            dispatch({ type: 'TOKEN_VALIDATED', payload: 'Token po' })
        } else {
            dispatch({ type:'TOKEN_VALIDATED', payload: false })
        }
    }
}