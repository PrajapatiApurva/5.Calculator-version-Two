import styles from './App.module.css'
import ButtonsContainer from './Component/ButtonsContainer'
import Display from './Component/Display'
import React,{useState} from 'react'
function App() {
  const [calVal,setCalVal]=useState('');
  const onButtonClick=(buttontext)=>{
    if(buttontext==='C'){
      setCalVal('');
    }
    else if(buttontext==='='){
      const result=eval(calVal);
      setCalVal(result);
    }
    else{
      setCalVal(calVal+buttontext); 
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
      <Display calVal={calVal}/>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </div>
  )
}

export default App;
