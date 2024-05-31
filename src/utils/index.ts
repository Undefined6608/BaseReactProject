import md5 from "js-md5";

const privateKey = import.meta.env.VITE_PASSWORD_PRIVATE_KEY;

/**
 * 密码加密
 * @param password 原始密码
 * @returns 加密后的密码
 */
export const passwordEncryption = (password: string): string => {
	return md5(password + privateKey);
};
