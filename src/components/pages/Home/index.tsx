import React from 'react';
import styled from 'styled-components';

import bg from 'images/bg.png';
import signal from 'images/signal.svg';
import wifi from 'images/wifi.svg';
import battery from 'images/battery.svg';

import { media } from 'root/styles/style';
import { Text } from 'root/styles/typo';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  ${media.Over`
    width: 1150px;
    margin: 0 auto;
  `}
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 5vw;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.Over`
    height: 58px;
  `}
`;

const Footer = styled.div`
  width: 100%;
  height: 25vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 25vw);
  justify-items: center;
  align-items: center;
  ${media.Over`
    width: 1150px;
    margin: 0 auto;
    height: 288px;
    grid-template-rows: repeat(4, 288px);
  `}
`;

const IconGrid = styled.div`
  display: grid;
  height: calc(100% - 30vw);
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 25vw);
  justify-items: center;
  align-items: center;
  overflow-y: auto;
  /* row-gap: 20px; */
  ${media.Over`
    height: calc(100% - 346px);
    grid-template-rows: repeat(4, 288px);
  `}
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  background-color: #fff;
  border-radius: 15%;
`;

const LeftIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterIcons = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
`;

const Signal = styled.div`
  width: 7vw;
  height: 4vw;
  background-image: url(${signal});
  ${media.Over`
    width: 80px;
    height: 45px;
  `}
`;

const Wifi = styled.div`
  width: 4vw;
  height: 4vw;
  background-image: url(${wifi});
  ${media.Over`
    width: 45px;
    height: 45px;
  `}
`;

const Battery = styled.div`
  width: 5vw;
  height: 5vw;
  background-image: url(${battery});
  ${media.Over`
    width: 58px;
    height: 58px;
  `}
`;

const Home = () => {
  const getDate = () => {
    const today = new Date();
    return today.getDate();
  };

  const getDay = () => {
    const today = new Date();
    const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayArr[today.getDay()];
  };

  const getTime = () => {
    const today = new Date();
    const hour = today.getHours();
    const min = today.getMinutes();
    return `${hour}:${min}`;
  };

  return (
    <Wrapper>
      <Header>
        <LeftIcons>
          <Signal />
          <Text size={'4'} weight={'500'} color={'#fff'} padding={'0 5px'}>
            {'JS'}
          </Text>
          <Wifi />
        </LeftIcons>
        <CenterIcons>
          <Text size={'4'} weight={'500'} color={'#fff'}>
            {getTime()}
          </Text>
        </CenterIcons>
        <Battery />
      </Header>
      <IconGrid>
        <IconWrapper />
        <IconWrapper />
        <IconWrapper />
        <IconWrapper />
      </IconGrid>
      <Footer>
        <IconWrapper />
        <IconWrapper />
        <IconWrapper>
          <Text size={'3'} weight={'bold'}>
            {getDay()}
          </Text>
          <Text size={'10'} weight={'bold'}>
            {getDate()}
          </Text>
        </IconWrapper>
        <IconWrapper />
      </Footer>
    </Wrapper>
  );
};

export default Home;
