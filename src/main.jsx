import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // Correct import
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/router.jsx';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(  // Use createRoot directly
  <StrictMode>
    <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </StrictMode>
);
