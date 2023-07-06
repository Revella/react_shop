import React from 'react';
import { Navigate } from 'react-router-dom';
import ProductDetail from './ProductDetail';

const PrivateRouter = ({authenticate}) => {
  return authenticate == true ? <ProductDetail /> : <Navigate to='/login' />
}

export default PrivateRouter