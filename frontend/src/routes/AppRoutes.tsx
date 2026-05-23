import { Route, Routes } from 'react-router-dom'

import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'

import BookDetailsPage from '../pages/BookDetailsPage'
import FavoritesPage from '../pages/FavoritesPage'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import ProfilePage from '../pages/ProfilePage'
import ReaderPage from '../pages/ReaderPage'
import Register from '../pages/Register'
import SearchPage from '../pages/SearchPage'

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path='/' element={<Home />} />
				<Route path='/search' element={<SearchPage />} />
				<Route path='/favorites' element={<FavoritesPage />} />
				<Route path='/book/:id' element={<BookDetailsPage />} />
				<Route path='/reader/:id' element={<ReaderPage />} />
				<Route path='/profile' element={<ProfilePage />} />
			</Route>

			<Route element={<AuthLayout />}>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Route>

			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default AppRoutes
