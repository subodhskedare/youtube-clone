import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';
  
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },{
        path: "/watchPage",
        element: <WatchPage />,
      }
    ],  
  }
]);
 
function App() {
  return (
    <Provider store={store}>  
    <div className="">
      {/* <h1 className="text-6xl font-bold text-blue-600 ">Hello World</h1> */}

    {/**
     * 
     * HEAD
     * BODY
     *  SIDEBAR
     *    Menuitems
     *  MainContainer
     *    ButtonList  
     *    VideoContainer
     *      VideoCard
     *       
     */}

     <Head />
     <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
