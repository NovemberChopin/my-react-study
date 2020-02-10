class BassModel {
  constructor(data, message) {
    if(typeof data === 'string') {
      this.message = data
      data = null
      message = null
    }
    if(data) {
      this.data = data
    }
    if(message) {
      this.message = message
    }
  }
}

class SuccessModel extends BassModel {
  constructor(data, message) {
    super(data, message)
    this.status = 1   // 状态 1 表示成功
  }
}

class ErrorModel extends BassModel {
  constructor(data, message) {
    super(data, message)
    this.status = 0
  }
}

export default {
  SuccessModel,
  ErrorModel
}
