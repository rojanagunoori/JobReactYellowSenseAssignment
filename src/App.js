import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobsPage from './components/pages/JobsPage.js';
import BookmarksPage from './components/pages/BookmarksPage.js';
import JobDetailsPage from './components/pages/JobDetailsPage.js';
import BottomNavBar from './components/BottomNavBar.js';
import Loader from './components/Loader.js';
import NotFoundPage from './components/pages/NotFoundPage.js';
import HomePage from './components/pages/HomePage.js';
import ErrorBoundary from './components/ErrorBoundary.js'; 

function App() {
  return (
    <Router>
       <ErrorBoundary>
      <div className="relative min-h-screen  pb-20"
      > 
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="/jobs/:jobId" element={<JobDetailsPage />} /> 
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
        <BottomNavBar />
      </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
