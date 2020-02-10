import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  width: 1070px;
  margin: 0 auto;
`

export const ContentLeft = styled.div`
  width: 770px;
  float: left;
  padding: 10px 20px;
  background-color: #ffffff;
`

export const ListItem = styled.div`
	overflow: hidden;
	border-bottom: 1px solid #dcdcdc;
	margin-bottom: 20px;
  .acticeType {
    color: #333;
  }
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

export const ContentRight = styled.div`
  width: 290px;
  float: right;
`

