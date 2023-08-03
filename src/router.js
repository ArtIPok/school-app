import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./pages/Layout/Layout"
import { ErrorPage } from "./pages/ErrorPage/ErrorPage"
import { HomePage } from "./pages/HomePage/HomePage"
import { FooterComponent } from "./components/Footer/FooterComponent"

export const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Layout />
				<FooterComponent />
			</>
		),
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <HomePage />,
				errorElement: <ErrorPage />,
			},
		],
	},
])
