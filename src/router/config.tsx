import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LandingPage = lazy(() => import('../pages/landing/page'));
const LoginPage = lazy(() => import('../pages/auth/login/page'));
const RegisterPage = lazy(() => import('../pages/auth/register/page'));
const ForgotPasswordPage = lazy(() => import('../pages/auth/forgot-password/page'));
const DashboardLayout = lazy(() => import('../pages/dashboard/layout'));
const OverviewPage = lazy(() => import('../pages/dashboard/overview/page'));
const AnalyticsPage = lazy(() => import('../pages/dashboard/analytics/page'));
const CustomersPage = lazy(() => import('../pages/dashboard/customers/page'));
const BillingPage = lazy(() => import('../pages/dashboard/billing/page'));
const SettingsPage = lazy(() => import('../pages/dashboard/settings/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <OverviewPage />
      },
      {
        path: 'analytics',
        element: <AnalyticsPage />
      },
      {
        path: 'customers',
        element: <CustomersPage />
      },
      {
        path: 'billing',
        element: <BillingPage />
      },
      {
        path: 'settings',
        element: <SettingsPage />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;