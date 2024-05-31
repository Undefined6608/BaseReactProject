import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "@/views/Home/Home";
import {Login} from "@/views/Login/Login";
import {TokenGuard} from "@/router/Guard/TokenGuard";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/login"} element={<Login/>}/>
				<Route path={"/"} element={<TokenGuard><Home/></TokenGuard>}/>
			</Routes>
		</BrowserRouter>
	);
};
