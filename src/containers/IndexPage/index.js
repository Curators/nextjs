import Link from 'next/link';
import styled from 'styled-components';


const EkkImage = styled.img``;

const NameText = styled.p`
  margin-top: 30px;
  font-size: 72px;
  font-weight: 300;
  text-align: center;
  letter-spacing: 20px;
  text-indent: 20px;
  color: white;
`;

const ChurchText = styled.p`
  font-size: 36px;
  text-align: center;
  letter-spacing: 1px;
  color: white;
`;

const Logo = styled.img`
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Card = styled.div`
    position: relative;
    width: 400px;
    height: 600px;
    border-radius: 30px;
    background-color: hsl(215, 62%, 21%);
    overflow: hidden;

    ${EkkImage} {
    position: absolute;
    bottom: 0px;
    left: 0px;
  }

`;

const A = styled.a``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  
  ${A} {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const IndexPage = () => (
  <Wrapper>
    <Card>
      <Logo src='/static/logo.svg' />
      <ChurchText>新生命小組教會</ChurchText>
      <NameText>ＯＯＯ</NameText>
      <EkkImage src='/static/ekk.svg' />
  </Card>
  </Wrapper>
);

export default IndexPage;
