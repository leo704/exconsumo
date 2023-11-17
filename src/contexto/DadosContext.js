import React, {createContext, useState} from 'react';
export const AuthContext = createContext({});
function AuthProvider({children}) {
  //   const [result, setResult] = useState([]);
  const result = [];
  const BD = ['Pergunta 1', 'Pergunta 2', 'Pergunta 3', 'pergunta 4'];

  return (
    //setResult ??
    <AuthContext.Provider value={[BD, result]}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
