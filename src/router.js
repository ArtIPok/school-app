import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./pages/Layout/Layout"
import { ErrorPage } from "./pages/ErrorPage/ErrorPage"
import { HomePage } from "./pages/HomePage/HomePage"
import { FooterComponent } from "./components/Footer/FooterComponent"
import { LabPage } from "./pages/LabPage/LabPage"
import { October } from "./components/Lab/October"
import { September } from "./components/Lab/September"

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
			{
				path: "/laboratorium",
				element: <LabPage />,
				errorElement: <ErrorPage />,
				children: [
					{
						path: "september",
						element: <September />,
						errorElement: <ErrorPage />,
					},
					{
						path: "october",
						element: <October />,
						errorElement: <ErrorPage />,
					},
				],
			},
		],
	},
])
