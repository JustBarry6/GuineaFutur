import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AnalyticsPage from './pages/AnalyticsPage';
import EducationPage from './pages/EducationPage';
import CollaborationPage from './pages/CollaborationPage';
import ProposalList from './components/ProposalList';
import ProposalDetails from './components/ProposalDetails';
import AboutPage from './pages/AboutPage';

import './assets/styles/App.css';

function App() {
  const [data, setData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Proposals Submitted',
        data: [12, 19, 3, 5, 2, 3, 9],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Proposals Approved',
        data: [2, 3, 2, 1, 2, 1, 4],
        fill: false,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
      },
    ],
  });

  const updateData = (newSubmitted, newApproved) => {
    const updatedData = { ...data };
    const lastIndex = updatedData.datasets[0].data.length - 1;
    updatedData.datasets[0].data[lastIndex] += newSubmitted;
    updatedData.datasets[1].data[lastIndex] += newApproved;
    setData(updatedData);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home data={data} updateData={updateData} />} />
            <Route path="/proposals" element={<ProposalList />} />
            <Route path="/proposal/:id" element={<ProposalDetails />} />
            <Route path="/analytics" element={<AnalyticsPage data={data} />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/collaboration" element={<CollaborationPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
