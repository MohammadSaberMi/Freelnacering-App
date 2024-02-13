
import {Routes,Route } from "react-router-dom";
import Auth from "./pages/auth";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {Toaster} from "react-hot-toast"
function App() {
 const queryClient= new QueryClient();
  return (
<QueryClientProvider client={queryClient}>
  <Toaster/>
<div className="contianer xl:max-w-screen-xl">
  <Routes >
     <Route path="/auth" element={<Auth/>}/>
  </Routes>
  </div>
</QueryClientProvider>
    );
}

export default App


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
