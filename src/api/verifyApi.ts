import {get} from "@/config/request";
import {VerifyImg} from "@/types/verifyType";
import {BaseResponse} from "@/types/baseType";

export const getVerifyImgApi = () => get<BaseResponse<VerifyImg>>("/verifyCode/imgCode");
