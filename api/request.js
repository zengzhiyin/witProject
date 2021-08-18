const request = (config, flag) => {
		var baseurl = 'https://itservice.chint-eletech.com:8888/'
		config.url = baseurl + config.url;
	if (uni.getStorageSync('Authorization') !== null) {
		config.header = {
			Authorization: uni.getStorageSync('Authorization')
		}
	}
	if (!config.data) {
		config.data = {};
	}
	
	let promise = new Promise(function(resolve, reject) {
		console.log('请求开始', new Date().getTime(), config.url)
		uni.request(config).then(responses => {
		console.log('请求结束', new Date().getTime(), responses)
			// 异常
			if (responses[0]) {
				reject({
					message: "网络超时"
				});
			} else {
				let response = responses[1].data; // 如果返回的结果是data.data的，嫌麻烦可以用这个，return res,这样只返回一个data
				resolve(response);
			}
		}).catch(error => {
			console.log('请求失败', config.url,resolve,reject)
			reject(error);
		})
	})
	return promise;
};

export default request;
