import React, {ReactNode, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import {TOKEN_KEY} from "@/utils/CookiesKey";

interface AuthorGuardProps {
	children: ReactNode
}

export const TokenGuard: React.FC<AuthorGuardProps> = ({children}) => {
	const history = useNavigate();
	useEffect(() => {
		const token = Cookies.get(TOKEN_KEY);
		if (!token) {
			history("/login");
		}
	}, [history]);
	return (
		<>
			{children}
		</>
	);
};
