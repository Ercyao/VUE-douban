let baseUrl = ''; 

export default async(url='', data={}, type='GET', method='fetch') => {
  type = type.toUpperCase;
  url = url + baseUrl;

  if(type == 'GET') { // 拼接参数
    let dataStr = '';
    Object.keys(data).forEach((key, index, array) => {
      dataStr = dataStr + key + '=' + data[key] + '&';
    })

    if(dataStr != '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
  }

  if(window.fetch && method == 'fetch') {
    let requestConfig = {
            credentials: 'include',
            method: type,
            headers: {
                'Accept': 'application/json', // 用户代理可处理的媒体类型
                'Content-Type': 'application/json' // 报文主体对象类型
            },
            mode: "cors", // 跨域
            cache: "force-cache"
    }

    if(type == 'POST') {
      Object.defineProperties(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }
    return fetch(url, requestConfig);
   }
 }

//  try {
//    const response = await fetch(url, requestConfig);
//    const responseJson = await response.json();
//    return responseJson;
//  } catch (error) {
//    throw new Error(error)
//  }
//} else {
//  // 如果浏览器不支持 fetch
//  return new Promise((resolve, reject) => {
//          let requestObj;
//          if (window.XMLHttpRequest) {
//              requestObj = new XMLHttpRequest();
//          } else {
//              requestObj = new ActiveXObject;
//          }
//
//          let sendData = '';
//          if (type == 'POST') {
//              sendData = JSON.stringify(data);
//          }
//
//          requestObj.open(type, url, true);
//          requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//          requestObj.send(sendData);
//
//          requestObj.onreadystatechange = () => {
//              if (requestObj.readyState == 4) {
//                  if (requestObj.status == 200) {
//                      let obj = requestObj.response
//                      if (typeof obj !== 'object') {
//                          obj = JSON.parse(obj);
//                      }
//                      resolve(obj)
//                  } else {
//                      reject(requestObj)
//                  }
//              }
//          }
//      })
//}
//}