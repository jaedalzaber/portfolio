import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Portfolio from './pages/home/Portfolio';
import AppDesign from './pages/home/webdesign/AppDesign';
import Curate from './pages/home/webdesign/Curate';
import Webdesign from './pages/home/webdesign/Webdesign';
import './style.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="webdesign/:index" element={<Webdesign index={0} />} />
			<Route path="appdesign/picarry" element={<AppDesign />} />
			<Route path="appdesign/curate" element={<Curate />} />
			<Route path="portfolio/:id" element={<Portfolio />} />
		</Routes>
	</BrowserRouter>
	// <Webdesign index={0}/>

	// <Portfolio title="Sunayra" subtitle="Branding" />
);

