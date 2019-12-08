import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  title: "学会这招，你离黑客又进了一步？",
  content: "<img alt='' src=' //upload-images.jianshu.io/upload_images/14464891-101a67af84feb9a2' /><p><b> 亲爱的小伙伴们，下面分享的是怎样美化我们的苹果电脑（mac）终端。</b>自动识别本机ip、电量、运行时间等信息！据说黑客们的终端都是这样的哦！相信我，你们会喜欢上它的！话不多说。先上效果图吧！</p ><p>亲爱的小伙伴们，下面分享的是怎样美化我们的苹果电脑（mac）终端。自动识别本机ip、电量、运行时间等信息！据说黑客们的终端都是这样的哦！相信我，你们会喜欢上它的！话不多说。先上效果图吧！</p><p>亲爱的小伙伴们，下面分享的是怎样美化我们的苹果电脑（mac）终端。自动识别本机ip、电量、运行时间等信息！据说黑客们的终端都是这样的哦！相信我，你们会喜欢上它的！话不多说。先上效果图吧！</p>"
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state;
  }
}

