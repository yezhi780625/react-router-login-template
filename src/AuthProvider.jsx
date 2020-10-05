import React, {
  createContext,
  memo,
  useCallback,
  useContext,
  useState
} from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const signIn = useCallback(() => {
    setIsLogin(true);
  }, []);
  const signOut = useCallback(() => {
    setIsLogin(false);
  }, []);

  return (
    <AuthContext.Provider {...props} value={{ isLogin, signIn, signOut }} />
  );
};

export const useAuth = () => useContext(AuthContext);

export default memo(AuthProvider);
