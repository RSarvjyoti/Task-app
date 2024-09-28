import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../../redux/actions/taskActions';
import { Box, Button, Input, Textarea } from '@chakra-ui/react';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(createTask({ title, description }));
  };

  return (
    <Box>
      <Input
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={handleSubmit} colorScheme="blue">
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
