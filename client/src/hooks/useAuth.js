import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentToken } from '../redux/slices/authSlice';

export const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  return token !== null;
};
