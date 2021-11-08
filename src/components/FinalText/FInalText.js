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
            <h3>Informações iniciais (Suporte N1):</h3>
            {finText.resp && <><span>Responsável pela abertura do card: </span> 
            {finText.desc}
            <br/><br></br></>}
            {finText.desc && <><span>Descrição do problema: </span> 
            <p>{finText.desc}</p>
            </>}
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
                <li>{finText.complex}: {complex[finText.complex]}</li>                
            </ul>

            {finText.juspri && <><span>Justificativa de priopridade: </span> {finText.juspri}
            <br/></>}
            {finText.jusco && <><span>Justificativa da correção: </span> {finText.jusco}
            <br/></>}
            {finText.jusre1 && <><span>Justificativa da recusa: </span> {finText.jusre1}
            <br/></>}
            
            <h3>Informações de prazo (PM):</h3>
            {finText.juspri && <><span>Prazo estimado e justificativa: </span> {finText.juspri}
            <br/></>}
            {finText.jusco && <><span>Link para acompanhamento: </span> {finText.jusco}
            <br/></>}
            {finText.jusre1 && <><span>Justificativa da recusa: </span> {finText.jusre1}
            <br/></>}

        </S.TextArea>
        </>
    )
}

export default FInalText
