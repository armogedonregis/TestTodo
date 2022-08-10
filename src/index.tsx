import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import { TodoProvider } from './components/todoContext';
import './styles/globals.css';
import "@fontsource/abhaya-libre";
import "@fontsource/actor";


const queryClient = new QueryClient();

const container = document.getElementById('root');
const root = createRoot(container as Element);
root.render(
    <QueryClientProvider client={queryClient}>
        <TodoProvider>
            <App />
        </TodoProvider>
    </QueryClientProvider>
);