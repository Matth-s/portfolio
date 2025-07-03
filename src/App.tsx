import { RouterProvider } from 'react-router';
import router from './router';
import AnimationProvider from './components/AnimationProvider';

const App = () => {
  return (
    <AnimationProvider>
      <RouterProvider router={router} />
    </AnimationProvider>
  );
};

export default App;
