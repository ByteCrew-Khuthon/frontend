import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@stackflow/plugin-basic-ui/index.css';
import './index.css';
import App from './App.tsx';
import '@/app/fcm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>,
);
