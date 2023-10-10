import { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../App';
import Auth from '../components/auth/Auth';
import { validateToken } from '../components/auth/AuthActions';

class AuthOrApp extends Component {
    componentWillMount() {
        if (this.props.auth.user){
            this.props.validateToken(this.props.auth.user.token)
        }
    }
    render(){
        const {user, validToken} = this.props.auth
        if(user && validToken) {
            //axios.defaults.header.common['authorization'] = user.token
            return true//<App />
        }else if (!user && !validToken) {
             return true//<Auth />
        } else {
            return false
        }
    }
}

const mapStatetoProps = state => ({auth: state.auth})
const mapDispatchtoProps = dispatch => bindActionCreators({validateToken}, dispatch)
export default connect(mapStatetoProps, mapDispatchtoProps)(AuthOrApp)