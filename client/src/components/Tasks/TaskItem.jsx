import { Box, Button, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/actions/taskActions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={2}>
      <Text fontSize="lg" fontWeight="bold">
        {task.title}
      </Text>
      <Text>{task.description}</Text>
      <Button colorScheme="red" onClick={handleDelete}>
        Delete
      </Button>
    </Box>
  );
};

export default TaskItem;
