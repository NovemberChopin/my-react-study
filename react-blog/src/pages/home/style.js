import styled from 'styled-components'


export const HomeWrapper = styled.div`
  width: 1070px;
  margin: 0 auto;
`
export const HomeLeft = styled.div`
	border-radius: 10px;
  width: 770px;
  float: left;
`
export const CarouselWrapper = styled.div`
	width: 770px;
	box-sizing: border-box;
`

export const CarouselItem = styled.div`
  text-align: center;
  height: 260px;
	width: 770px;
  line-height: 260px;
  background: #364d79;
  overflow: hidden;
	border-radius: 10px;
`
export const ListWrapper = styled.div`
	background-color: #ffffff;
	width: 770px;
	padding: 10px 20px 10px;
	margin-top: 10px;
`
export const ListItem = styled.div`
	overflow: hidden;
	border-bottom: 1px solid #dcdcdc;
	margin-bottom: 20px;
	.pic {
		display: block;
		width: 150px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;
export const ListInfo = styled.div`
	width: 550px;
	float: left;
	cursor: pointer;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;
export const ListBottom = styled.div`
	width: 550px;
	p {
		float: left;
		color: #999;
	}
`


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



