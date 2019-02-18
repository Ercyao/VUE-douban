let baseUrl = ''

export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {
  type = type.toUpperCase()
  url = url + baseUrl

  if (type === 'GET') { // 拼接参数
    let dataStr = ''
    Object.keys(data).forEach((key, index, array) => {
      dataStr = dataStr + key + '=' + data[key] + '&'
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }

  if (window.fetch && method === 'fetch') {
    let requestConfig = {
      credentials: 'include',
      method: type,
      headers: {
        'Accept': 'application/json', // 用户代理可处理的媒体类型
        'Content-Type': 'application/json' // 报文主体对象类型
      },
      mode: 'cors', // 跨域
      cache: 'force-cache'
    }

    if (type === 'POST') {
      Object.defineProperties(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }
    return fetch(url, requestConfig)
  }
}
