import React from 'react';

const MainContent = () => {
  return (
    <main>
      <article>
        {/* Headline */}
        <h1>Discover the best AI tools with Supertools.</h1>
        {/* Description */}
        <p>The most useful AI tools — organized and categorized in one spot.</p>
        {/* Email Subscription Form */}
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </article>
    </main>
  );
};

export default MainContent;
