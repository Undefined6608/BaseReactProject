import React, {useEffect, useState} from "react";
import {getVerifyImgApi} from "@/api/verifyApi";

export const Login: React.FC = () => {

	const [img, setImg] = useState<string>();

	const getVerifyImg = async () => {
		const res = await getVerifyImgApi();
		if (res.code === 200) {
			setImg(res.data.img);
		}
	};

	useEffect(() => {
		getVerifyImg();
	}, []);

	return (
		<>
			<img className={"cursor-pointer"} src={img} alt={"img"} onClick={getVerifyImg}/>
		</>
	);

};
