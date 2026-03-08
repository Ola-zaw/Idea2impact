import { createBrowserRouter, Navigate } from 'react-router';
import { LoginPage } from './pages/LoginPage';
import { MainLayout } from './layouts/MainLayout';
import { MissionPage } from './pages/MissionPage';
import { DiscoverPage } from './pages/DiscoverPage';
import { QuizPage } from './pages/QuizPage';
import { AccountPage } from './pages/AccountPage';
import { DetailsPage } from './pages/DetailsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'mission',
        element: <MissionPage />,
      },
      {
        path: 'discover',
        element: <DiscoverPage />,
      },
      {
        path: 'quiz',
        element: <QuizPage />,
      },
      {
        path: 'account',
        element: <AccountPage />,
      },
      {
        path: 'details/:id',
        element: <DetailsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);