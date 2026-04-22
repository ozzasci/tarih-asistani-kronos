import React from 'react';
import ChatBox from './ChatBox';
import Timeline from './Timeline';

const App: React.FC = () => {
  return (
    <div>
      <header>
        <h1>My Application</h1>
      </header>
      <main>
        <ChatBox />
        <Timeline />
      </main>
      <footer>
        <p>&copy; 2026 My Application</p>
      </footer>
    </div>
  );
};

export default App;