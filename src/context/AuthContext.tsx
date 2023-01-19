import {createContext, FC, ReactNode, useReducer} from 'react';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUserName: (userName: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado

interface Props {
  children?: ReactNode | undefined;
}

export const AuthProvider: FC<Props> = ({children}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeUserName = (userName: string) => {
    dispatch({type: 'changeUserName', payload: userName});
  };

  return (
    <AuthContext.Provider
      value={{authState, signIn, logout, changeFavoriteIcon, changeUserName}}>
      {children}
    </AuthContext.Provider>
  );
};
