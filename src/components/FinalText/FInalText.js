import React from 'react'
import * as S from './styles'
const FInalText = ({finText, setShowFinText}) => {

    const complex = {C5: "precisa ser feito na hora",
        C4: "precisa ser feito no dia",
        C3: "precisa ser feito na sprint atual",
        C2: "precisa ser feito na próxima sprint",
        C1: "executado quando sobrar tempo"}
  

    return (
        <>
        <S.BotaoGerar onClick={()=>setShowFinText(false)}>Voltar</S.BotaoGerar>
        <S.TextArea id="textbox">
            <h3>Informações iniciais (Suporte N1)</h3><br/>
            {finText.resp && <><span>Responsável pela abertura do card: </span> 
            {finText.resp}
            <br/><br/></>}
            {finText.desc && <><span>Descrição do problema </span> <br/><br/>
            {finText.desc}<br/><br/>
            </>}
            {finText.nav && <>  <span>Condicoes de teste</span><br/>
            <ul>
                <li>{finText.nav}</li>
                <li>{finText.os}</li>
                <li>{finText.cel}</li>
                {finText.vers && <li>{finText.vers}</li>}
            </ul></>}
           
          
            {finText.reprod && <><span>Como reproduzir o problema </span> <br/><br/>
           {finText.reprod}<br/><br/>
            </>}
            {finText.link && <><span>Link para gravação do problema </span> {finText.link}
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
            {finText.esperado && <><span>Comportamento esperado </span> <br/><br/>
            {finText.esperado}<br/>
            <br/></>}
            {finText.atual && <><span>Comportamento atual </span> <br/><br/>
            {finText.atual}<br/>
            <br/></>}
            {finText.afetados && <><span>Clientes afetados </span> <br/><br/>
            {finText.afetados}<br/>
            <br/></>}
            {finText.rel && <><span>Módulos relacionados </span> <br/><br/>
            {finText.rel}<br/>
            <br/></>}

            =========================================================================================<br/><br/><h3>Informações complementares (Suporte N2):</h3><br/>
            <ul>
                <li>{finText.complex}: {complex[finText.complex]}</li>                
            </ul><br/>

            {finText.juspri && <><span>Justificativa de priopridade: </span> {finText.juspri}
            <br/><br/></>}
            {finText.jusco && <><span>Justificativa da correção: </span> {finText.jusco}
            <br/><br/></>}
            {finText.jusre1 && <><span>Justificativa da recusa: </span> {finText.jusre1}
            <br/><br/></>}
            
            {finText.prazo && <><br/>=========================================================================================<br/><br/><h3>Informações de prazo (PM):</h3><br/></>}
            {finText.prazo && <><span>Prazo estimado e justificativa: </span> {finText.prazo}
            <br/><br/></>}
            {finText.link2 && <><span>Link para acompanhamento: </span> {finText.link2}
            <br/><br/></>}
            {finText.jusre2 && <><span>Justificativa da recusa: </span> {finText.jusre2}
            <br/><br/></>}

        </S.TextArea>
        </>
    )
}

export default FInalText
