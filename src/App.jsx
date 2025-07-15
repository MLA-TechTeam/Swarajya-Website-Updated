import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import LoadingSkeleton from './components/LoadingSkeleton';
import BlogPost from './pages/BlogPost';

import { blogPosts } from './data/blogdata'; // ✅ Make sure this is defined

const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Events = lazy(() => import('./pages/Events'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Gallery = lazy(() => import('./pages/Gallery'));

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const isBlogPostPage = /^\/blogs\/\d+$/.test(location.pathname);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <>
      {!isBlogPostPage && <Header />}
      <main>
        <Suspense fallback={<LoadingSkeleton count={6} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogPost posts={blogPosts} />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
