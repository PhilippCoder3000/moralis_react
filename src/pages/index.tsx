import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Main = React.lazy(() => import("pages/send"));


export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<p>about</p>} />
      <Route path="/text" element={<p>text</p>} />
      <Route path="/hello" element={<p>hello</p>} />
    </Routes>
  );
}