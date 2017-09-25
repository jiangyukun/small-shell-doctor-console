/**
 * Created by jiangyukun on 2017/5/12.
 */
import inlineConfig from './inline.config'
import productionConfig from './production.config'

export default function getConfig(key) {
  if (process.env.NODE_ENV == 'inline') {
    return inlineConfig[key]
  }
  if (process.env.NODE_ENV == 'production') {
    return productionConfig[key]
  }
  console.log('未知配置属性' + key)
  return ''
}
