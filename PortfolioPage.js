import React from 'react';
import './PortfolioPage.css';

function PortfolioPage() {
  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="portfolio-items">
        <div className="portfolio-item">
          <img src="https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2022-04/what-is-deep-learning.png" alt="Project 1" />
          <h3>Project 1</h3>
          <p>
          Deep learning is a machine learning technique that teaches computers to do what comes naturally to humans: learn by example.
           Deep learning is a key technology behind driverless cars, enabling them to recognize a stop sign, or to distinguish a pedestrian from a lamppost.
          </p>
        </div>
        <div className="portfolio-item">
          <img src="https://techblog.smc.it/static/c5256a11117134b1d5f3bd35c479db40/a41d1/ml.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>
          Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.
           IBM has a rich history with machine learning..
           
          </p>
        </div>
        <div className="portfolio-item">
          <img src="https://cdn-images-1.medium.com/max/1600/1*Iz7bCLrPTImnBDOOEyE3LA.png" alt="Project 3" />
          <h3>Project 3</h3>
          <p>
          Supervised learning, also known as supervised machine learning, is a subcategory of machine learning and artificial intelligence.
           It is defined by its use of labeled datasets to train algorithms that to classify data or predict outcomes accurately.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default PortfolioPage;
