import styled from 'styled-components'


export const MessageWrapper = styled.div`
  width: 1070px;
  margin-bottom: 10px;
  background-color: #ffffff;
  float: left;
  .pic {
    height: 240px;
    background-color: gray;
    
  }
  .message {
    float: left;
    padding: 0 20px;
  }
  .avatar {
    cursor: pointer;
    border-radius: 4px;
    height: 160px;
    width: 160px;
    background-color: #ffffff;
    position: relative;
    bottom: 20px;
    padding: 5px;
    float: left;
  }
  .profileHeaderContent {
    width: 840px;
    float: right;
  }
`
export const ShowProfileMess = styled.div`
  padding-top: 10px;
  padding-left: 30px;
  height: 135px;
  width: 840px;
  float: right;
  .title {
    flex: 1 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .name {
    font-size: 26px;
    font-weight: 600;
    line-height: 30px;
    float: left;
  }
  .desc {
    font-size: 18px;
    margin-left: 12px;
    line-height: 20px;
    float: left;
    position: relative;
    top: 10px;
  }
`
export const SiderWraper = styled.div`
  .card {
    margin-bottom: 10px;
    cursor: pointer;
  }
  .num {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 0px;
  }
  .title {
    margin-bottom: 0px;
    text-align: center;
  }
`