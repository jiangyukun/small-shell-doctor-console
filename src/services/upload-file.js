/**
 * Created by jiangyukun on 2017/5/10.
 */
import upload from './_upload'

export function uploadFile(options) {

  return new Promise((resolve, reject) => {
    options.onSuccess = () => {
      resolve()
    }
    options.onError = (e) => {
      reject(e)
    }
    options.onProgress = () => {
      console.log('uploading')
    }
    upload(options)
  })
}
