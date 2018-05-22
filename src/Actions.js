const __DO_NOT_USE__store = {
	__proto__: {
		__GET_STORE__: () => __DO_NOT_USE__store
	}
};

function RegisterAction(name, callback){
	__DO_NOT_USE__store[name] = callback;
}

export {
	RegisterAction,
	__DO_NOT_USE__store
}