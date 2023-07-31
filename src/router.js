import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./pages/Layout"
import { ErrorPage } from "./pages/ErrorPage"
import { HomePage } from "./pages/HomePage"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
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
