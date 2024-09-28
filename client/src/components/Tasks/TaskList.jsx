import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { Box } from '@chakra-ui/react';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <Box>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Box>
  );
};

export default TaskList;
