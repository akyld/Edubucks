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
import Layout from './components/admin/Layout';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminLogin from './pages/admin/Login';
import AdminEtkinlikler from './pages/admin/Etkinlikler';
import AdminSinavListele from './pages/admin/SinavListele';
import AdminSinavEkle from './pages/admin/SinavEkle';
import AdminSinavBasvuranlar from './pages/admin/SinavBasvuranlar';
import AdminSinavBasvurulari from './pages/admin/SinavBasvurulari';
import AdminHemenBasvurular from './pages/admin/HemenBasvurular';
import AdminOdemeler from './pages/admin/Odemeler';
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
        
        {/* Admin Panel Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<AdminEtkinlikler />} />
          <Route path="etkinlikler" element={<AdminEtkinlikler />} />
          <Route path="sinavlar" element={<AdminSinavListele />} />
          <Route path="sinavlar/ekle" element={<AdminSinavEkle />} />
          <Route path="sinavlar/:sinavId/basvuranlar" element={<AdminSinavBasvuranlar />} />
          <Route path="basvurular/sinav" element={<AdminSinavBasvurulari />} />
          <Route path="basvurular/hemen" element={<AdminHemenBasvurular />} />
          <Route path="odemeler" element={<AdminOdemeler />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
