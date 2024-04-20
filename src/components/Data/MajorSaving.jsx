import React from 'react';
import styled from 'styled-components';
import cloths from "../../assets/svgs/cloths.png";
import Headphone from "../../assets/svgs/headphone.png";
import vegitable from "../../assets/svgs/vegitables.png";
import sofa from "../../assets/svgs/sofa.png";
import sport from "../../assets/svgs/sports.png";
import phone from "../../assets/svgs/phoneCam.png";

const BorderContainer = styled.div`
  width: calc(100% - 40px);
  max-width: 1200.46px;
  border: 1px solid #EAEAEA;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px auto;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 6px;
  width: 100%;
  max-width: 1200px;
  text-align: center;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  margin-top: 60px;
  width: 369.23px;
  height: 182px;

  img {
    height: 142px;
    margin-bottom: 10px;
    border-radius: 6px;
  }

  h3 {
    text-align: center;
    margin-right: 180px;
    margin-bottom: 10px;
    position: relative;
    bottom: 60px;
  }

  p {
    margin-right: 94px;
  }

  #first-img {
    position: relative;
    bottom: 50px;
  }

  #first-p {
    position: relative;
    bottom: 50px;
  }
`;

function MajorSaving() {
  return (
    <BorderContainer>
      <Container>
        <Row>
          <CenteredContainer>
            <h3 id='first-heading'>Major savings</h3>
            <img id='first-img' src={cloths} alt="Cloths" />
            <p id='first-p'>Up to 40% off fashion</p>
          </CenteredContainer>
          <CenteredContainer>
            <img src={Headphone} alt="Headphone" />
            <p>Up to 25% off tech</p>
          </CenteredContainer>
          <CenteredContainer>
            <img src={vegitable} alt="Vegetable" />
            <p>Up to 75% off grocery</p>
          </CenteredContainer>
        </Row>
        <Row>
          <CenteredContainer>
            <img src={sofa} alt="Sofa" />
            <p>Up to 30% off home</p>
          </CenteredContainer>
          <CenteredContainer>
            <img src={sport} alt="Sport" />
            <p>Up to 15% off sports</p>
          </CenteredContainer>
          <CenteredContainer>
            <img src={phone} alt="Phone and Camera" />
            <p>Phone and Camera</p>
          </CenteredContainer>
        </Row>
      </Container>
    </BorderContainer>
  );
}

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default MajorSaving;
