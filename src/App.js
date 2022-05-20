import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { NotFound } from "./pages/NotFound";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";
import { AddCar } from "./pages/AddCar";
import { AvailableCar } from "./pages/AvailableCar";
import { User } from "./pages/User";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header/>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/addCar" element={<AddCar />} />
					<Route path="/carList" element={<AvailableCar />} />
					<Route path="/user" element={<User />} />
					<Route path="/notfound" element={<NotFound />} />
					<Route path="*" element={<Navigate to="/notfound" />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
