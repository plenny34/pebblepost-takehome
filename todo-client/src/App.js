import { TodoList } from './components/TodoList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      networkMode: 'offlineFirst',
    },
  },
});


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col items-center h-screen bg-eggshell">
        <h1 className="text-9xl font-thin text-rose-400 my-8">todos</h1>
        <TodoList />
      </div>
    </QueryClientProvider>
  );
}
