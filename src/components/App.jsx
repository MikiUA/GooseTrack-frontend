import { Routes } from "react-router";

const Routes = () => <Routes>
  <Route path='/' element={<> Landing route </>} />
</Routes>

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
      <Routes />
    </div>
  );
};
