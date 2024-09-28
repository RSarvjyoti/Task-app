import { useDispatch } from 'react-redux';
import { addNotification } from '../redux/actions/notificationActions';

const useNotification = () => {
  const dispatch = useDispatch();

  const notify = (message) => {
    dispatch(addNotification(message));
  };

  return { notify };
};

export default useNotification;
