import React, {useContext} from 'react';
import { AuthContext } from "../contexts/auth";
import ActivityIndicator from 'react-activity-indicator';
import AuthViews from '../views/auth.views';
import LogadoViews from './logado.views';

function Views() {
  const {signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator number={3} duration={200} activeColor="#0070bf" borderWidth={2} borderRadius="50%" diameter={25} />
      </div>
    );
  }

  return (

    signed ? <LogadoViews/> : <AuthViews/>
 
  );  
}

export default Views;