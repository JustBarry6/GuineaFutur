import React from 'react';
import '../assets/styles/components/Articles.css';

function Articles() {
  const articles = [
    { title: 'Understanding Blockchain', link: '#' },
    { title: 'The Future of Governance', link: '#' },
    { title: 'Sustainable Development', link: '#' },
  ];

  return (
    <div className="articles">
      {articles.map((article, index) => (
        <div key={index} className="card">
          <a href={article.link}>{article.title}</a>
        </div>
      ))}
    </div>
  );
}

export default Articles;
