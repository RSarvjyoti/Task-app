import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Select } from '@chakra-ui/react';
import { filterTasks } from '../../redux/actions/taskActions';

const TaskFilter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(filterTasks(filter));
  };

  return (
    <Box>
      <Select
        placeholder="Filter by Status"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </Select>
      <Button onClick={handleFilter} colorScheme="blue">
        Filter
      </Button>
    </Box>
  );
};

export default TaskFilter;
