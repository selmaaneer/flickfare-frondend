import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './store/store';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootLayout from './routes/RootLayout';
import ErrorPage from './ErrorPage';
import MoviePage from './routes/MoviesPage';
import HomePage, {loader as homeLoader} from './routes/HomePage';
import SingleMoviePage, {loader as singleMovieLoader} from './routes/SingleMoviePage';
import SelectShowPage, {loader as selectShowLoader} from './routes/SelectShowPage';
import SelectSeats, {loader as selectSeatsLoader} from './routes/SelectSeats';
import { Provider } from 'react-redux';
import BookingSummary from './routes/BookingSummary';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
        loader: homeLoader
  
      },
      {
        path: '/movies',
        element: <MoviePage/>
      },
      {
        path: '/movies/:movieId',
        element: <SingleMoviePage/>,
        loader: singleMovieLoader

      },
      {
        path: '/select-show/:movieId',
        element: <SelectShowPage/>,
        loader : selectShowLoader

      },
      {
        path: '/select-seats/:showId',
        element: <SelectSeats/>,
        loader: selectSeatsLoader
      },
      {
        path: '/booking-summary',
        element: <BookingSummary/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
