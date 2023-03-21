import { Route, Routes } from 'react-router-dom';
import AboutAutorPage from '../../pages/AboutAutorPage';
import ArticlesPage from '../../pages/ArticlesPage';
import CompaniesPage from '../../pages/CompaniesPage';
import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Footer from '../Footer';
import Nav from '../Nav';

function App() {
	return (
		<div>
			<Nav/>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/about' element={<AboutAutorPage />} />
				<Route path='/companies' element={<CompaniesPage />} />
				<Route path='/articles' element={<ArticlesPage />} />
				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
			<Footer/>
		</div>
	);
}

export default App;
