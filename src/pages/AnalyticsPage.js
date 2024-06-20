import React from 'react';
import Analytics from '../components/Analytics';

function AnalyticsPage({ data }) {
  return (
    <div className="analytics-page">
      <Analytics data={data} />
    </div>
  );
}

export default AnalyticsPage;
