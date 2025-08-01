import request from '@/utils/request'

export default {
  setupMfaConfig() {
    return request({
      url: '/mfa/setup',
      method: 'post'
    })
  },
  enableMfaConfig(data) {
    return request({
      url: '/mfa/enable',
      method: 'post',
      data
    })
  },
  disableMfaConfig(data) {
    return request({
      url: '/mfa/disable',
      method: 'post',
      data
    })
  },
  getPreviewConfig(params) {
    return request({
      url: '/cloud/setting/preview/config',
      method: 'get',
      params
    })
  },
  updatePreviewConfig(data) {
    return request({
      url: '/cloud/setting/preview/config',
      method: 'put',
      data
    })
  },
  getOcrConfig(params) {
    return request({
      url: '/cloud/setting/ocr/config',
      method: 'get',
      params
    })
  },
  setOcrConfig(data) {
    return request({
      url: '/cloud/setting/ocr/config',
      method: 'put',
      data
    })
  },
  getTranscodeConfig(params) {
    return request({
      url: '/cloud/setting/transcode/config',
      method: 'get',
      params
    })
  },
  setTranscodeConfig(data) {
    return request({
      url: '/cloud/setting/transcode/config',
      method: 'put',
      data
    })
  },
  cancelTranscodeTask(data) {
    return request({
      url: '/cloud/setting/transcode/cancel-task',
      method: 'put',
      data
    })
  },
  syncUser(params) {
    return request({
      url: '/user/setting/sync',
      method: 'get',
      params
    })
  },
  syncCloud(params) {
    return request({
      url: '/cloud/setting/sync',
      method: 'get',
      params
    })
  },
  recalculateFolderSize(params) {
    return request({
      url: '/cloud/setting/recalculateFolderSize',
      method: 'get',
      params
    })
  },
  isSync(params) {
    return request({
      url: '/user/setting/isSync',
      method: 'get',
      params
    })
  },
  updateNetdiskName(params) {
    return request({
      url: '/user/setting/update_netdisk_name',
      method: 'put',
      params
    })
  },
  getWebp(params) {
    return request({
      url: '/user/setting/get/webp',
      method: 'get',
      params
    })
  },
  disabledWebp(params) {
    return request({
      url: '/user/setting/disabled/webp',
      method: 'put',
      params
    })
  },
  getAccessTokenList(params) {
    return request({
      url: '/user/setting/accessTokenList',
      method: 'get',
      params
    })
  },
  generateAccessToken(params) {
    return request({
      url: '/user/setting/generateAccessToken',
      method: 'put',
      params
    })
  },
  deleteAccessToken(params) {
    return request({
      url: '/user/setting/deleteAccessToken',
      method: 'delete',
      params
    })
  },
  resetMenuAndRole() {
    return request({
      url: '/user/setting/resetMenuAndRole',
      method: 'put',
    })
  },
  // 获取office配置
  getPublicOfficeConfig: function(params) {
    return request({
      url: 'public/office/config',
      method: 'get',
      params
    })
  },
  // 获取office配置
  getOfficeConfig: function() {
    return request({
      url: '/office/config',
      method: 'get'
    })
  },
  // 更新office配置
  updateOfficeConfig: function(data) {
    return request({
      url: '/office/config',
      method: 'put',
      data
    })
  }
}

export function getWebstieRecord(params) {
  return request({
    url: '/public/website/record',
    method: 'get',
    params
  })
}

export function getSetting(params) {
  return request({
    url: '/website/setting',
    method: 'get',
    params
  })
}

export function updateSetting(data) {
  return request({
    url: '/website/setting/update',
    method: 'put',
    data
  })
}

export function getHeartwings(params) {
  return request({
    url: '/website/heartwings',
    method: 'get',
    params
  })
}

export function getTaskProgress(params) {
  return request({
    url: '/cloud/task/progress',
    method: 'get',
    params
  })
}

export function getTranscodeStatus(params) {
  return request({
    url: '/cloud/transcode/status',
    method: 'get',
    params
  })
}
