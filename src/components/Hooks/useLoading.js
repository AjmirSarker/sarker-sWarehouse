import React, { useEffect, useState } from 'react';

const useLoading = () => {
  const [products, setProducts] = useState(false);
  
  return [products];
};

export default useLoading ;
