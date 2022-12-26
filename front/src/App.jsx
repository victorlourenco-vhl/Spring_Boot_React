import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Formulario } from './Formulario'
import { Tabela } from './Tabela'
import { useEffect } from 'react'

function App() {
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/products")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProducts(retorno_convertido));
  }, []);

  return (
    <div>
      <p>{JSON.stringify(products)}</p>
      <Formulario botao={btnCadastrar}/>
      <Tabela/>
    </div>
  )
}

export default App
