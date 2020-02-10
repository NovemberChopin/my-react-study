import styled from 'styled-components'

export const DetailWrapper = styled.div `
  width: 1070px;
  margin: 0 auto;
`
export const DetailLeft = styled.div `
	border-radius: 10px;
  width: 770px;
  float: left;
`

export const ContentWrapper = styled.div `
  background-color: #ffffff;
	width: 770px;
	padding: 10px 20px 10px;
  margin-top: 2px;
`

export const Header = styled.div `
  margin: 50px 0 20px 0;
  line-height: 44px;
  font-size: 34px;
  color: #333;
  font-weight: bold;
`;

export const Content = styled.div `
  color: #2f2f2f;
  img {
    width: 100%;
  }
  p {
    margin: 25px 0;
    font-size: 16px;
    line-height: 30px;
  }
  b {
    font-weight: bold;
  }
`;


export const HomeRight = styled.div`
  width: 285px;
	margin-left: 15px;
  float: right;
	.card {
    margin-bottom: 10px;
  }
  .icon {
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

export const RecommendWrapper = styled.div`
	width: 285px;
	float: left;
	background-color: #ffffff;
	padding: 0px 10px 10px 10px; 
`