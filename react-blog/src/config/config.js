const env = process.env.NODE_ENV

let REQ_CONF = null

if (env === 'dev') {
	REQ_CONF = {
		address_getHomeList: '/api/getHomeList.json',
		address_getBlogByID: '/api/detailList.json'
	}
}

if (env === 'prod') {
	REQ_CONF = {
		address_getHomeList: 'http://localhost:3001/api/blog/getAllList',
		address_getBlogByID: 'http://localhost:3001/api/blog/getBlogByID'
	}
}

export default REQ_CONF