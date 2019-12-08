import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  //异步加载detail组件
  loader: () => import('./index'),
  loading() {
    return <div>正在加载</div>
  }
});

export default () => <LoadableComponent />