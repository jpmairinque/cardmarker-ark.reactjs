import styled from "styled-components";

const colors = {
  green: "#2CA3A8",
  grey: "#DFDFDF",
  black: "#55555",
};

export const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;

    img{
        width: 200px;
        padding: 2rem;
    }


`

export const SmallInput = styled.input`
  background-color: ${colors.grey};
  height: 30px;
  font-family: 'Poppins';
  border: none;
  border-radius: 5px;
  padding: 5px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-family: "Poppins", sans-serif !important;

  h2{
    color: ${colors.green};
  }
  h3 {
    color: ${colors.green};
    font-size: 1.3rem;
    margin-bottom: 15px;
  }

  div{
      margin-bottom: 0.5rem;
  }

  li{
    list-style: none;
  }
`;

export const BotaoGerar = styled.button`
  width: 90px;
  height: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  background-color: ${colors.green};
  border-radius: 10px;
  cursor: pointer;
  border: none;
  align-self: flex-end;
`;

export const FlexWrapper = styled.div`

  display: flex;
  width: 80%;



`

export const IconLine = styled.div`

    display: flex;
  align-items: center;

    svg{
        margin-right: 0.5rem;
    }


`

export const InfoBox = styled.div`

    font-family: 'Poppins';
    width: 80%;

    span{
      color: ${colors.green};
      font-weight: 600;
    }

    margin-top: 1rem;
    margin-bottom: 1rem;

`