import styled from "styled-components";

const colors = {
    green: "#2CA3A8",
    grey: "#808080",
    black: "#55555"


}

export const TextArea = styled.div`

    font-family: 'Poppins', sans-serif;

    
    width: 100%;

    span{
        font-weight: 600;
        
        margin-right: 0.3rem;
    }
   


`

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
  -webkit-user-select: none; 
-moz-user-select: none; 
-ms-user-select: none; 
user-select: none; 
`;