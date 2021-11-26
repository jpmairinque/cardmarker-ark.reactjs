import React from 'react'
import * as S from './styles'
const FInalText = ({finText, setShowFinText}) => {

  
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
                <li>C5: precisa ser feito na hora</li>  
                <li>C4: precisa ser feito no dia</li>   
                <li>C3: precisa ser feito na sprint atual</li>   
                <li>C2: precisa ser feito na próxima sprint</li>   
                <li>C1: executado quando sobrar tempo</li>                 
            </ul><br/>
            <span>Como reproduzir o bug no teste: </span> 
            <br/><br/>
            <span>Justificativa de priopridade: </span> 
            <br/><br/>
             <span>Justificativa da correção: </span> 
            <br/><br/>
            <span>Justificativa da recusa: </span> 
            <br/><br/>
            
           <br/>=========================================================================================<br/><br/><h3>Informações de prazo (PM):</h3><br/>
            <span>Prazo estimado e justificativa: </span> 
            <br/><br/>
           <span>Link para acompanhamento: </span> 
            <br/><br/>
            <span>Justificativa da recusa: </span> 
            <br/><br/>

         </S.TextArea>
        </>
    )
}

export default FInalText
