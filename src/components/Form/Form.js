import React from 'react'
import * as S from './styles'
import Arklogo from '../../assets/logoark.png'
import {FaRegDotCircle} from 'react-icons/fa'
import {BiTestTube} from 'react-icons/bi'

const Form = ({data, setData, handleSubmit}) => {
    return (
        <S.Wrapper>
        <img src={Arklogo} alt="" />
        <S.InputWrapper>
           <h2>Informações iniciais (Suporte N1): </h2>
           <div>
           <span>Responsável pela abertura do card:  </span><S.SmallInput onChange={(e)=>{setData({...data,resp: e.target.value})}} value={data.resp}/>  
           </div>     
         </S.InputWrapper>
       <S.InputWrapper>
           <S.IconLine>
           <FaRegDotCircle color="#2CA3A8" size={22}/><h3>Descrição do problema: </h3> </S.IconLine>
           <S.SmallInput onChange={(e)=>{setData({...data, desc: e.target.value})}} value={data.desc}/>      
          
         </S.InputWrapper>
         <S.InputWrapper>
            <S.IconLine>
            <BiTestTube color="#2CA3A8" size={28}/>
           <h3>Condições de teste: </h3></S.IconLine>
           <div>
           <span>Navegador: </span><S.SmallInput onChange={(e)=>{setData({...data,nav: e.target.value})}} value={data.nav}/>  
           </div>
           <div>
           <span>Sistema Operacional: </span><S.SmallInput onChange={(e)=>{setData({...data,os: e.target.value})}} value={data.os}/>  
           </div> 
           <div>
           <span>Modelo do Celular: </span><S.SmallInput onChange={(e)=>{setData({...data,cel: e.target.value})}} value={data.cel}/>  
           </div>   
           <div>
           <span>Versao do aplicativo: </span><S.SmallInput onChange={(e)=>{setData({...data,vers: e.target.value})}} value={data.vers}/>  
           </div> 
         </S.InputWrapper>
         <S.InputWrapper>
         <h3>Como reproduzir o problema: </h3>
         <S.TextInput onChange={(e)=>{setData({...data,reprod: e.target.value})}} value={data.reprod}/>
           <div>
           <span>Link da gravação do problema:  </span><S.SmallInput onChange={(e)=>{setData({...data,link: e.target.value})}} value={data.link}/>  
           </div>
           <div>
           <span>Base:  </span><S.SmallInput onChange={(e)=>{setData({...data,base: e.target.value})}} value={data.base}/>  
           </div>
           <div>
           <span>Usuario:  </span><S.SmallInput onChange={(e)=>{setData({...data,user: e.target.value})}} value={data.user}/>  
           </div>
           <div>
           <span>Login:  </span><S.SmallInput onChange={(e)=>{setData({...data,login: e.target.value})}} value={data.login}/>  
           </div>
           <div>
           <span>Senha:  </span><S.SmallInput onChange={(e)=>{setData({...data,senha: e.target.value})}} value={data.senha}/>  
           </div>
         </S.InputWrapper>
         <S.InputWrapper>
         <h3>Comportamento esperado: </h3>
         <S.SmallInput onChange={(e)=>{setData({...data,esperado: e.target.value})}} value={data.esperado}/>
         
         </S.InputWrapper>
         <S.InputWrapper>
         <h3>Comportamento atual: </h3>
         <S.SmallInput onChange={(e)=>{setData({...data,atual: e.target.value})}} value={data.atual}/>
         
         </S.InputWrapper>
         <S.InputWrapper>
         <h3>Clientes afetados: </h3>
         <S.TextInput onChange={(e)=>{setData({...data,afetados: e.target.value})}} value={data.afetados}/>
         
         </S.InputWrapper>
 
         <S.InputWrapper>
         <h3>Modulos relacionados: </h3>
         <S.TextInput onChange={(e)=>{setData({...data,rel: e.target.value})}} value={data.rel}/>
         
         
         </S.InputWrapper>
         
         <S.FlexWrapper>
         <S.InputWrapper>
         <h3>Informações complementares (Suporte N2): </h3>
            <ul>
                <li>C5: precisa ser feito na hora</li>
                <li>C4: precisa ser feito no dia</li>
                <li>C3: precisa ser feito na sprint atual</li>
                <li>C2: precisa ser feito na próxima sprint</li>
                <li>C1: executado quando sobrar tempo</li>
            </ul>
            <div>
           <span>Justificativa de prioridade:  </span><S.SmallInput onChange={(e)=>{setData({...data,link: e.target.value})}} value={data.link}/> 
           </div>
           <div>
           <span>Justificativa da correção:  </span><S.SmallInput onChange={(e)=>{setData({...data,link: e.target.value})}} value={data.link}/>  
           </div>
           <div>
           <span>Justificativa da recusa:  </span><S.SmallInput onChange={(e)=>{setData({...data,link: e.target.value})}} value={data.link}/>  
           </div>
           
            </S.InputWrapper>

            <S.InputWrapper>
         <h3>Informações de prazo (PM):</h3>
            
            <div>
           <span>Prazo estimado e justificativa:  </span><S.SmallInput onChange={(e)=>{setData({...data,link: e.target.value})}} value={data.link}/> 
           </div>
           <div>
           <span>Link para acompanhamento:  </span><S.SmallInput onChange={(e)=>{setData({...data,link: e.target.value})}} value={data.link}/>  
           </div>
           <div>
           <span>Justificativa da recusa:  </span><S.SmallInput onChange={(e)=>{setData({...data,link: e.target.value})}} value={data.link}/>  
           </div>
            
            </S.InputWrapper>
            </S.FlexWrapper>
            <S.BotaoGerar onClick={handleSubmit}>Gerar</S.BotaoGerar>
       </S.Wrapper>
    )
}

export default Form
