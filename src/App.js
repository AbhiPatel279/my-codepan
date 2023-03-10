import React from 'react';
import "./practice-site/css/Dtlcommon.css"
import "./practice-site/css/Practice.css"
import DtlNavbar from './practice-site/layout/DtlNav';
import Sitefooter from './practice-site/layout/Footer';
import Homepage from './practice-site/layout/Homepage';
import AboutPage from './practice-site/layout/AboutPage';
import ContactUs from './practice-site/layout/ContactUs';
import Services from './practice-site/layout/Services';
import WordPressDev from './practice-site/layout/WordPressDev';
import ECommerceDev from './practice-site/layout/ECommerceDev';
import Error from './practice-site/layout/Error';
import PhpDev from './practice-site/layout/PhpDev';
import WebSiteMaintanance from './practice-site/layout/WebSite-Maintanance';
import WebConsultancy from './practice-site/layout/Web-Consultancy';
import JsDevlopment from './practice-site/layout/JsDevlopment';
import ProducrDetail from './redux-componet/ProducrDetail';
import ProductList from './redux-componet/ProductList';
import ProductComponet from './redux-componet/ProductComponet';
import {
    Routes,
    Route,
} from 'react-router-dom';


function App() {
    return (
        <>
            <DtlNavbar />
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/about-us' element={<AboutPage />}></Route>
                <Route path='/contact-us' element={<ContactUs />}></Route>
                <Route path='/services' element={<Services />}></Route>
                <Route path='/services/wordpress-development' element={<WordPressDev />}></Route>
                <Route path='/services/e-commerce-development' element={<ECommerceDev />}></Route>
                <Route path='/services/php-development' element={<PhpDev />}></Route>
                <Route path='/services/javascript-development' element={<JsDevlopment />}></Route>
                <Route path='/services/website-maintanance' element={<WebSiteMaintanance />}></Route>
                <Route path='/services/web-consultancy' element={<WebConsultancy />}></Route>
                <Route path='/Productdet' element={<ProductComponet />}></Route>
                <Route path='/Product' element={<ProductList />}></Route>
                <Route path='/Product/:productId' element={<ProducrDetail />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
            <Sitefooter />
        </>
    );
};
export default App;
