import React from 'react'
import * as S from './styles'
const FInalText = ({finText}) => {
  

    return (
        <S.TextArea id="textbox">
            {finText.desc && <><span>Descrição do problema: </span> 
            <p>{finText.desc}</p>
            <br/></>}
            <span>Condicoes de teste:</span>
            <ul>
                <li>{finText.nav}</li>
                <li>{finText.os}</li>
                <li>{finText.cel}</li>
                <li>{finText.vers}</li>
            </ul>
            <br/>
            {finText.reprod && <><span>Como reproduzir o problema: </span> 
            <p>{finText.reprod}</p>
            <br/></>}
        </S.TextArea>
    )
}

export default FInalText
