function useTokenStorage (){
	const storageItem = window.sessionStorage.getItem("USER_TOKEN_SESSION");
	const userTokenInfo = JSON.parse(storageItem);

	return {userTokenInfo};
}

export { useTokenStorage };