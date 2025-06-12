import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <h1>sidebar</h1>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>);
}
export default App;
