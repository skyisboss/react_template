/**
 * 判断是否是空对象
 * @param obj 传入的对象数据
 * @returns boolean
 */
export const isEmptyObject = (obj: object) => {
  return obj ? Object.keys(obj).length === 0 : !obj
}

/**
 * 获取当前url参数
 * @param search query的key
 * @returns object
 */
export const getUrlParams = (search: string) => {
  try {
    const url = search
    const urlParams = {}
    const paramPos = url.lastIndexOf('?')
    if (paramPos !== -1) {
      const anchorPos = url.lastIndexOf('#')
      // let paramAry = (url.substr(url.indexOf("?") + 1)).split('&')
      const paramAry = (
        paramPos < anchorPos
          ? url.substring(paramPos + 1, anchorPos)
          : url.substring(paramPos + 1)
      ).split('&')
      for (let i = 0; i < paramAry.length; i++) {
        const key = paramAry[i].split('=')[0]
        const value = paramAry[i].split('=')[1]
        const obj: { [key: string]: string } = {}
        obj[key] = value
        Object.assign(urlParams, obj)
      }
    }
    return urlParams
  } catch (e) {
    console.error(e)
    return {}
  }
}

export const ObjectUtility = {
  /**
   * 通过a.b.c的方式获取对象的值
   * @param data 传入的数据
   * @param key 键 a.b.c
   */
  getValue: (data: { [key: string]: any }, key: string) => {
    const keys = key.split('.')
    let result = data
    keys.forEach((item) => {
      result = result[item]
    })
    return result
  },
  /**
   * 通过a.b.c的方式设置对象的值
   * @param data 传入的数据
   * @param key 对象key
   * @param value 对象value
   * @returns
   */
  setValue: (data: { [key: string]: any }, key: string, value: any) => {
    const keys = key.split('.')
    let result = data
    keys.forEach((item, index) => {
      if (index === keys.length - 1) {
        result[item] = value
      } else {
        result = result[item]
      }
    })
    return result
  }
}
