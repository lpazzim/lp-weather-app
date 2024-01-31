import { styled } from "@linaria/react";

const Container = styled.div`
  z-index: 1;
  background-image: url("../../assets/images/rain.jpg");
  height: 150px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ImageCardHeader = () => {
  return (
    <>
      <Container></Container>
    </>
  );
};
