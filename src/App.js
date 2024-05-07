import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeacherSpace from "./components/TeacherSpace";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Login from "./components/Login";
import SeeCourse from "./components/SeeCourse";
import SignUp from "./components/SignUp";
import AddCourse from "./components/AddCourse";
import DeleteCourse from "./components/DeleteCourse";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/teacher' element={<TeacherSpace/>}/>
          <Route path='/seeCourse' element={<SeeCourse/>}/>
          <Route path='/Add' element={<AddCourse/>}/>
          <Route path='/Delete' element={<DeleteCourse/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
