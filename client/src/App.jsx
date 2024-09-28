import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import store from './redux/store';
import { AuthProvider } from './context/AuthContext';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignUpForm';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import TasksPage from './pages/TasksPage';
import TeamsPage from './pages/TeamsPage';
import ProtectedRoute from './components/Auth/ProtectedRoute';
// import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <AuthProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/tasks" element={<ProtectedRoute element={<TasksPage />} />} />
              <Route path="/teams" element={<ProtectedRoute element={<TeamsPage />} />} />
            </Routes>
          </Router>
        </AuthProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
