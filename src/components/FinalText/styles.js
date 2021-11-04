import styled from "styled-components";

const colors = {
    green: "#2CA3A8",
    grey: "#DFDFDF",
    black: "#55555"


}

export const TextArea = styled.div`

    font-family: 'Poppins', sans-serif;

    background-color: ${colors.grey};
    width: 100%;

    span{
        font-weight: 600;
        color: ${colors.green};
    }
   


`