import * as fromActions from './auth.actions';

export interface AuthState {
  email: string;
  password: string;
  remember: boolean;
  username: string;
  token: string;
  loading: boolean;
}

export const initAuthState: AuthState = {
    email: '',
    password: '',
    remember: false,
    username: '',
    token: '',
    loading: false
}

export function authReducer(state = initAuthState, action: fromActions.AuthUnions): AuthState {
    const cloneState = Object.assign({}, state);

    switch (action.type) {
        case fromActions.AuthActionType.LOGIN:
            cloneState.loading = true;
            return cloneState;
        case fromActions.AuthActionType.LOGIN_SUCCESS:
            cloneState.loading = false;
            cloneState.email = action.payload.email;
            cloneState.remember = action.payload.remember;
            cloneState.username = action.payload.username;
            cloneState.token = action.payload.token;
            cloneState.password = action.payload.password;
            localStorage.setItem('token', cloneState.token);
            localStorage.setItem('remember', JSON.stringify(cloneState.remember));
            if (cloneState.remember) {
                localStorage.setItem('email', cloneState.email);
                localStorage.setItem('password', cloneState.password);
            } else {
                localStorage.removeItem('email');
                localStorage.removeItem('password');
            }
            return cloneState;
        case fromActions.AuthActionType.LOGIN_FAILURE:            
            return initAuthState;
        case fromActions.AuthActionType.REGISTER_SUCCESS:
            cloneState.loading = false;
            cloneState.email = action.payload.email;
            cloneState.remember = action.payload.remember;
            cloneState.username = action.payload.username;
            cloneState.token = action.payload.token;
            cloneState.password = action.payload.password;
            localStorage.setItem('token', cloneState.token);
            localStorage.setItem('remember', JSON.stringify(cloneState.remember));
            if (cloneState.remember) {
                localStorage.setItem('email', cloneState.email);
                localStorage.setItem('password', cloneState.password);
            } else {
                localStorage.removeItem('email');
                localStorage.removeItem('password');
            }
            return cloneState;
        case fromActions.AuthActionType.REGISTER_FAILURE:            
            return initAuthState;
        case fromActions.AuthActionType.LOGOUT:
            return initAuthState;
        default:
            return cloneState;
    }
}