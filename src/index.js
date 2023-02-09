import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import AboutPage from './practice-site/AboutPage';
import ContactUs from './practice-site/ContactUs';
import Services from './practice-site/Services';
import WordPressDev from './practice-site/WordPressDev';
import ECommerceDev from './practice-site/ECommerceDev';
import Error from './practice-site/Error';
import PhpDev from './practice-site/PhpDev';
import WebSiteMaintanance from './practice-site/WebSite-Maintanance';
import WebConsultancy from './practice-site/Web-Consultancy';
import JsDevlopment from './practice-site/JsDevlopment';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/about-us",
      element: <AboutPage />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/services",
      element: <Services />,
      // children: [
      //   {
      //     path: "wordpress-development",
      //     element: <WordPressDev />,
      //   },
      //   {
      //     path: "e-commerce-development",
      //     element: <ECommerceDev />,
      //   },
      //   {
      //     path: "php-development",
      //     element: <PhpDev />,
      //   },
      //   {
      //     path: "website-maintanance",
      //     element: <WebSiteMaintanance />,
      //   },
      //   {
      //     path: "web-consultancy",
      //     element: <WebConsultancy />,
      //   },
      // ]
    },
    {
      path: "/services/wordpress-development",
      element: <WordPressDev />,
    },
    {
      path: "/services/e-commerce-development",
      element: <ECommerceDev />,
    },
    {
      path: "/services/php-development",
      element: <PhpDev />,
    },
    {
      path: "/services/javascript-development",
      element: <JsDevlopment />,
    },
    {
      path: "/services/website-maintanance",
      element: <WebSiteMaintanance />,
    },
    {
      path: "/services/web-consultancy",
      element: <WebConsultancy />,
    },
    {
      path: "*",
      element: <Error />
    }
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


