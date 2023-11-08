import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.esm.min.js"
import "./styles/styles.scss"
import { router } from "./router"
import { FontSizeProvider } from "./context/FontSizeContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<FontSizeProvider>
			<RouterProvider router={router} />
		</FontSizeProvider>
	</React.StrictMode>
)
