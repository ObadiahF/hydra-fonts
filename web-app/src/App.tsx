import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./pages/error-page";
import { LoadingProvider, useLoading } from './components/top-loader/LoadingContext';
import HomePage from "./pages/HomePage";
import BrowsePage from "./pages/BrowsePage";
import FontLinkPage from "./pages/FontLinkPage";

const LoadingHandler = () => {
  const { startLoading, stopLoading } = useLoading();
  const location = useLocation();

  useEffect(() => {
    stopLoading();
  }, [location, startLoading, stopLoading]);

  return null;
};

function App() {
  return (
    <LoadingProvider>
      <Router>
        <LoadingHandler />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="fontlink/:id" element={<FontLinkPage />} />
          </Routes>
        </Layout>
      </Router>
    </LoadingProvider>
  );
}

export default App;
