import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import User from './components/user';
import Users from './components/users';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />}>

          <Route path="users" element={<Users />}>
            <Route path=":id" element={<User />} />
          </Route>

          <Route path="tasks" element={<h1>Tasks</h1>} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>



      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


