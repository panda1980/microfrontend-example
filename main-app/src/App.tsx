import React from 'react';

const Header = React.lazy(() => import('header-app/Header'));
const Footer = React.lazy(() => import('footer-app/Footer'));
const Menu = React.lazy(() => import('menu-app/Menu'));

const App: React.FC = () => (
  <><div>{"This is the Code of Visveswaran Vaidyanathan panda1980"}</div><div>
    <React.Suspense fallback={<div>Loading Header...</div>}>
      <Header />
    </React.Suspense>
    <React.Suspense fallback={<div>Loading Menu...</div>}>
      <Menu />
    </React.Suspense>
    <main>
      <h2>This is the Main Section</h2>
    </main>
    <React.Suspense fallback={<div>Loading Footer...</div>}>
      <Footer />
    </React.Suspense>
  </div></>
);

export default App;
