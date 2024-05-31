import Cookies from "js-cookie";

/**
 * 设置 cookie
 * @param {string} name - cookie 名称
 * @param {string|object} value - cookie 值
 * @param {number} [days] - 过期时间(天数)
 * @param {string} [path] - cookie 路径
 */
function setCookie(name, value, days = 1, path = "/") {
	const options = { expires: days, path };
	Cookies.set(name, value, options);
}

/**
 * 获取 cookie
 * @param {string} name - cookie 名称
 * @returns {string|null} - cookie 值,如果不存在则返回 null
 */
function getCookie(name) {
	const value = Cookies.get(name);
	return value || null;
}

/**
 * 删除 cookie
 * @param {string} name - cookie 名称
 * @param {string} [path] - cookie 路径
 */
function deleteCookie(name, path = "/") {
	Cookies.remove(name, { path });
}

/**
 * 获取所有 cookies
 * @returns {object} - 所有 cookies 的键值对
 */
function getAllCookies() {
	return Cookies.get();
}

export { setCookie, getCookie, deleteCookie, getAllCookies };
