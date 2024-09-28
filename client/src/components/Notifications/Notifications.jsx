import { useSelector } from 'react-redux';
import { Box, Text } from '@chakra-ui/react';

const Notifications = () => {
  const notifications = useSelector((state) => state.notifications);

  return (
    <Box>
      {notifications.map((notification, index) => (
        <Box key={index} borderWidth="1px" p={2} mb={2}>
          <Text>{notification.message}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Notifications;
