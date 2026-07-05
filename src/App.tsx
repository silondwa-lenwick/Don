import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Course from "./pages/Course";
import Lesson from "./pages/Lesson";
import Coach from "./pages/Coach";
import Connect from "./pages/Connect";
import Progress from "./pages/Progress";
import About from "./pages/About";
import Review from "./pages/Review";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:courseId" element={<Course />} />
        <Route path="/learn/:courseId/:lessonId" element={<Lesson />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}
