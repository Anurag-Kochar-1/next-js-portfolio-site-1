import styled from 'styled-components';

export const Img = styled.img`
border-radius: 15px;
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`

display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;

place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
  /* background-color: red; */
  padding-top: 1rem;
  padding-bottom: 3rem;
}

`
export const BlogCard = styled.div`
  border-radius: 15px;
  box-shadow: 1px 1px 5px #7A0BC0;
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin: 1rem 0.5rem;

`;


export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 85%;
  padding: 0 1rem;
  margin: 0 auto;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  margin-bottom: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  /* background: red; */
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0.5rem;
`;

export const ExternalLinks = styled.a`
margin: 0 0.5rem;
color:#fff;
border-radius: 20px;
font-size: 1.7rem;
font-size: 500 ;
padding:1rem 1.5rem;
border: 2px solid #FA58B6;
background: #1A1A40;
transition: 0.5s;
&:hover{
  background: #FA58B6;
  color: #fff;

}
`;

export const TagList = styled.ul`
/* background: red; */
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
padding: 0.5rem;
`
export const Tag = styled.li`
text-align: center;
color: #fff;
border: 2px solid #7A0BC0;
padding: 1rem 3rem;
border-radius: 20px;
font-size: 1.7rem;
font-weight: 500 ;
margin: 1rem 10px;
`