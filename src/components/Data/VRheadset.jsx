import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import headset from "../../assets/svgs/headset.png"; // Import the default image

const Container = styled(Row)`
  margin: 0;
  padding: 0;
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const VRheadset = ({ backgroundImage }) => {
  return (
    <Container>
      <Col span={24}>
        <Image src={backgroundImage || headset} alt="" /> {/* Use backgroundImage prop if provided, otherwise use default */}
        <Content>
          <p style={{ color: "blue" }}>Starting from $899.</p>
          <h2 style={{ display: "flex", textAlign: "start" }}>
            Advanced All-In-One Virtual <br />
            Reality Headset
          </h2>
          <a href="">Shop now</a>
        </Content>
      </Col>
    </Container>
  );
};

export default VRheadset;
