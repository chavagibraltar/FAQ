import React from 'react';
import { createRoot } from 'react-dom/client';
import FAQ from './FAQ.jsx';

const container = document.getElementById('react-app');
const root = createRoot(container);
root.render(<FAQ />);