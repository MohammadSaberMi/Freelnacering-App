import { Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import Auth from './pages/Auth';
import CompletProfile from './pages/CompletProfile';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import OwnerDashbaord from './pages/OwnerDashbord';
import Project from './pages/Project';
import { DarkModeProvider } from './context/DarkModeContext';
import OwnerLayout from './features/owner/OwnerLayout';
import FreelancerDashboard from './pages/FreelancerDashboard';
import Proposals from './pages/Proposals';
import SubmittedProjects from './pages/SubmittedProjects';
import FreelancerLayout from './features/freelancer/FreelancerLayout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ProtectedRoute from './ui/ProtectedRoute';
function App() {
  const queryClient = new QueryClient();
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompletProfile />} />
          <Route
            path="/owner"
            element={
              <ProtectedRoute>
                <OwnerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashbaord />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
          <Route
            path="/freelancer"
            element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="projects" element={<SubmittedProjects />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;

//auth
//Task #1 - auth user Via OTP :one time password
// 1.form -> getOtp -> inpute +buttons ->phonenumber -> send OTP
//2.form -> checkOtp -> request -> ...??(otp ,phonenumber)

//request
//1. axios (useState,useEffect) ->
//2. useFetch (data,loading, error) ->
//3. react query => redux alternative (remote State ) ,fech(get) ,mutate(post)

//? fecher based driven folder structure
// projecte ->component ,hooks context
//proposale
//authentication
//category
//user
