import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key={"home"} catagory={"top-headline"} />} />
          <Route exact path="/buisness" element={<News key={"buisness"} catagory={"buisness"} />} />
          <Route exact path="/entertaiment" element={<News key={"entertaiment"} catagory={"entertaiment"} />} />
          <Route exact path="/general" element={<News key={"general"} catagory={"general"} />} />
          <Route exact path="/health" element={<News key={"health"} catagory={"health"} />} />
          <Route exact path="/science" element={<News key={"science"} catagory={"science"} />} />
          <Route exact path="/sport" element={<News key={"sport"} catagory={"sport"} />} />
          <Route exact path="/technology" element={<News key={"technology"} catagory={"technology"} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
