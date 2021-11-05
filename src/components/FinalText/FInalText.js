import React from 'react'
import * as S from './styles'
const FInalText = ({finText}) => {
  

    return (
        <S.TextArea id="textbox">
            <h3>Informações iniciais (Suporte N1):</h3>
            {finText.resp && <><span>Responsável pela abertura do card: </span> 
            {finText.desc}
            <br/></>}
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
          
            {finText.reprod && <><span>Como reproduzir o problema: </span> 
            <p>{finText.reprod}</p>
            <br/></>}
            {finText.link && <><span>Link para gravação do problema: </span> {finText.link}
            <br/></>}
            {finText.base && <><span>Base: </span> {finText.base}
            <br/></>}
            {finText.user && <><span>Usuário: </span> {finText.user}
            <br/></>}
            {finText.login && <><span>Login: </span> {finText.login}
            <br/></>}
            {finText.senha && <><span>Senha: </span> {finText.senha}
            <br/></>}
            <br/>
            {finText.esperado && <><span>Comportamento esperado: </span> 
            <p>{finText.esperado}</p>
            <br/></>}
            {finText.atual && <><span>Comportamento atual: </span> 
            <p>{finText.atual}</p>
            <br/></>}
            {finText.afetados && <><span>Clientes afetados: </span> 
            <p>{finText.afetados}</p>
            <br/></>}
            {finText.rel && <><span>Módulos relacionados: </span> 
            <p>{finText.rel}</p>
            <br/></>}

            <h3>Informações complementares (Suporte N2):</h3>
            <ul>
                <li>C5: precisa ser feito na hora</li>
                <li>C4: precisa ser feito no dia</li>
                <li>C3: precisa ser feito na sprint atual</li>
                <li>C2: precisa ser feito na próxima sprint</li>
                <li>C1: executado quando sobrar tempo</li>
            </ul>
        </S.TextArea>
    )
}

export default FInalText
