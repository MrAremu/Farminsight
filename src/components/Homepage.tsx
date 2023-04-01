import React from 'react';

const HomePage: React.FC = () => {
return (
<div style={{ backgroundColor: '#008000', color: '#000000', padding: '20px' }}>
<h1>Welcome to My Blog</h1>
<p>Welcome to the Agriculture Business Blog, where we share insights, ideas and experiences to help agribusiness owners thrive in Nigeria's dynamic market.</p>
<p>Agriculture is the backbone of Nigeria's economy, employing millions of people and contributing significantly to the country's GDP. Yet, despite its importance, the sector faces many challenges, from climate change and low productivity to limited access to markets and finance.</p>
<p>That's why we created this blog: to provide a platform where agribusiness owners can learn from each other, exchange best practices, and access relevant information and resources to help them succeed.

Whether you're a farmer, processor, distributor, or service provider, this blog is for you. We'll cover a wide range of topics, from crop and livestock farming to marketing and distribution, from funding and investment to policy and regulations. We'll also feature interviews with successful agribusiness owners, case studies of innovative approaches, and updates on industry news and events.

Our goal is to build a community of agribusiness owners who are passionate about improving their businesses and contributing to the development of Nigeria's agriculture sector. We hope you'll join us on this journey and share your ideas and feedback along the way.

Thank you for visiting the Agriculture Business Blog. Stay tuned for our next post, where we'll explore the challenges and opportunities of farming in Nigeria.

</p>
      <h2 className="home-subtitle">Subscribe to My Blog</h2>
      <p>If you want to receive updates on my latest posts, enter your email below.</p>
      <div className="home-cta">
        <form>
          <input type="email" placeholder="Enter your email" />
          <button className="home-cta-button" type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};
export default HomePage;