import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EdubucksAI from './pages/EdubucksAI';
import BookADemo from './pages/BookADemo';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import SinavBasvuru from './pages/SinavBasvuru';
import ExamApplication from './pages/ExamApplication';
import EventApplication from './pages/EventApplication';
import SeminerVeEtkinlikler from './pages/SeminerVeEtkinlikler';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/edubucks-ai" element={<EdubucksAI />} />
        <Route path="/book-a-demo" element={<BookADemo />} />
        <Route path="/sinav-basvuru" element={<SinavBasvuru />} />
        <Route path="/exam-application/:examId" element={<ExamApplication />} />
        <Route path="/event-application/:eventType/:eventId" element={<EventApplication />} />
        <Route path="/seminer-ve-etkinlikler" element={<SeminerVeEtkinlikler />} />
      </Routes>
    </Router>
  );
}

export default App;
