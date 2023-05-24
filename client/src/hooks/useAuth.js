import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectAccessToken } from '../redux/slices/authSlice';

export const useAuth = () => {
  const token = useSelector(selectAccessToken);

  return token !== null;
};
