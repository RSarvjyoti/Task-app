import { Box } from '@chakra-ui/react';
import TaskForm from '../components/Tasks/TaskForm';
import TaskList from '../components/Tasks/TaskList';
import TaskFilter from '../components/Filters/TaskFilter';

const TasksPage = () => {
  return (
    <Box>
       <TaskForm />
      <TaskFilter />
      <TaskList /> 
      hiiii
    </Box>
  );
};

export default TasksPage;
