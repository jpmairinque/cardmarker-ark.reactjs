import * as S from './styles'
import { useState } from 'react';

import FInalText from './components/FinalText/FInalText';

function App() {

  const [data,setData] = useState({
      desc: "",
      nav: "Chrome",
      os: "Windows",
      cel: "Android",
      vers: "",
      reprod: "",
      link: "",
      base: "",
      user: "",
      login: "",
      senha: "",
      esperado: "",
      atual: "",
      afetados: "",
      rel: ""
  })
  
  const [showFinText, setShowFinText] = useState(false)

  const handleSubmit = () => {    

    

    setShowFinText(true)
  }
  
  return (
    <div className="App">
      {!showFinText ? (
       <>
       <S.InputWrapper>
           <h3>Descrição do problema: </h3>
           <S.SmallInput onChange={(e)=>{setData({...data, desc: e.target.value})}} value={data.desc}/>      
         </S.InputWrapper>
         <S.InputWrapper>
           <h3>Condições de teste: </h3>
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
         <h3>Como reproduzir o problema </h3>
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
         <S.BotaoGerar onClick={handleSubmit}>Gerar</S.BotaoGerar>
         
         </S.InputWrapper>
       </>
      ) : (
        <FInalText finText={data}/> 
      )}
    </div>
  );





  
}

export default App;
