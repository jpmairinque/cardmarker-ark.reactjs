import React from 'react'
import * as S from './styles'
import Arklogo from '../../assets/logoark.png'
import {FaRegDotCircle} from 'react-icons/fa'
import {BiTestTube} from 'react-icons/bi'
import {AiOutlineBug} from 'react-icons/ai'
import {FaRegCheckCircle} from 'react-icons/fa'
import {MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'
import {BsPeople} from 'react-icons/bs'
import {VscFileSubmodule} from 'react-icons/vsc'

const Form = ({data, setData, handleSubmit}) => {
    return (
        <S.Wrapper>
        <img src={Arklogo} alt="" />
        <S.InfoBox>
        <span>Utilização:</span>
        <ul>

          <li>Preencha os campos necessários (pule de campo rapidamente com a tecla <span> Tab </span>)</li>
          <li>Clique em <span>"Gerar"</span></li>
          <li>Pressione <span>CTRL + A</span> para selecionar todo o texto, depois <span>CTRL + C</span> para copiá-lo</li>
          <li>Cole o texto no <span>editor</span> de card do Suite</li>
          
          
          </ul> 
        </S.InfoBox>
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
         <S.IconLine>
         <AiOutlineBug color="#2CA3A8" size={28}/>
         <h3>Como reproduzir o problema: </h3> </S.IconLine>
         <S.SmallInput onChange={(e)=>{setData({...data,reprod: e.target.value})}} value={data.reprod}/>
           <div style={{marginTop: 15}}>
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
         <S.IconLine>
           <MdOutlineCheckBoxOutlineBlank color="#2CA3A8" size={28}/>
         <h3>Comportamento esperado: </h3>
         </S.IconLine> 
         <S.SmallInput onChange={(e)=>{setData({...data,esperado: e.target.value})}} value={data.esperado}/>
         
         </S.InputWrapper>
         <S.InputWrapper>
           <S.IconLine>
          <FaRegCheckCircle color="#2CA3A8" size={28}/>
         <h3>Comportamento atual: </h3>
         </S.IconLine>
         <S.SmallInput onChange={(e)=>{setData({...data,atual: e.target.value})}} value={data.atual}/>
         
         </S.InputWrapper>
         <S.InputWrapper>
         <S.IconLine>
         <BsPeople color="#2CA3A8" size={28}/>
         <h3>Clientes afetados: </h3>
         </S.IconLine>
         <S.SmallInput onChange={(e)=>{setData({...data,afetados: e.target.value})}} value={data.afetados}/>
         
         </S.InputWrapper>
 
         <S.InputWrapper>
           <S.IconLine>
           <VscFileSubmodule color="#2CA3A8" size={28}/>
           <h3>Modulos relacionados: </h3>
           </S.IconLine>
         
         <S.SmallInput onChange={(e)=>{setData({...data,rel: e.target.value})}} value={data.rel}/>
         
         
         </S.InputWrapper>
         
         <S.FlexWrapper>
         <S.InputWrapper>
         <h3>Informações complementares (Suporte N2): </h3>
            <ul>
                <li><input name="c" type="radio" onChange={(e)=>{setData({...data,complex: "C5"})}}/>C5: precisa ser feito na hora</li>
                <li><input name="c" type="radio" onChange={(e)=>{setData({...data,complex: "C4"})}}/>C4: precisa ser feito no dia</li>
                <li><input name="c" type="radio" onChange={(e)=>{setData({...data,complex: "C3"})}}/>C3: precisa ser feito na sprint atual</li>
                <li><input name="c" type="radio" onChange={(e)=>{setData({...data,complex: "C2"})}}/>C2: precisa ser feito na próxima sprint</li>
                <li><input name="c" type="radio" onChange={(e)=>{setData({...data,complex: "C1"})}}/>C1: executado quando sobrar tempo</li>
            </ul>
            <div>
           <span>Justificativa de prioridade:  </span><S.SmallInput onChange={(e)=>{setData({...data,juspri: e.target.value})}} value={data.juspri}/> 
           </div>
           <div>
           <span>Justificativa da correção:  </span><S.SmallInput onChange={(e)=>{setData({...data,jusco: e.target.value})}} value={data.jusco}/>  
           </div>
           <div>
           <span>Justificativa da recusa:  </span><S.SmallInput onChange={(e)=>{setData({...data,jusre1: e.target.value})}} value={data.jusre1}/>  
           </div>
           
            </S.InputWrapper>

            <S.InputWrapper>
         <h3>Informações de prazo (PM):</h3>
            
            <div>
           <span>Prazo estimado e justificativa:  </span><S.SmallInput onChange={(e)=>{setData({...data,prazo: e.target.value})}} value={data.prazo}/> 
           </div>
           <div>
           <span>Link para acompanhamento:  </span><S.SmallInput onChange={(e)=>{setData({...data,link2: e.target.value})}} value={data.link2}/>  
           </div>
           <div>
           <span>Justificativa da recusa:  </span><S.SmallInput onChange={(e)=>{setData({...data,jusre2: e.target.value})}} value={data.jusre2}/>  
           </div>
            
            </S.InputWrapper>
            </S.FlexWrapper>
            <S.BotaoGerar onClick={handleSubmit}>Gerar</S.BotaoGerar>
       </S.Wrapper>
    )
}

export default Form
