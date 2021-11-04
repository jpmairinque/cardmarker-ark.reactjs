import styled from "styled-components";

const colors = {
    green: "#2CA3A8",
    grey: "#DFDFDF",
    black: "#55555"


}



export const TextInput = styled.textarea`

    background-color:${colors.grey};
    height: 100px;
    
    font-family: 'Roboto';
    border: none;
    border-radius: 15px;
    padding: 2rem;
    font-size: 1rem;


`

export const SmallInput = styled.input`

    background-color: ${colors.grey};
    height: 30px;
    
    border: none;
    border-radius: 5px;
    padding: 5px;


`

export const InputWrapper = styled.div`

    display: flex;
    flex-direction: column;
    width: 80%;
    

    h3{
        color: ${colors.green};
        font-size: 1.5rem;
        margin-bottom: 15px;

        
    }
    

`

export const BotaoGerar = styled.button`

    width: 50px;
    height: 50px;
    background-color: ${colors.green};
    border: none;



`