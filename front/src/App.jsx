import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Formulario } from "./Formulario";
import { Tabela } from "./Tabela";
import { useEffect } from "react";

function App() {
  const product = {
    id: 0,
    name: "",
    brand: "",
  };

  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [products, setProducts] = useState([]);
  const [objProduct, setObjProduct] = useState(product);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setProducts(retorno_convertido));
  }, []);

  // Obetendo dados do formulario
  const aoDigitar = (e) => {
    setObjProduct({ ...objProduct, [e.target.name]: e.target.value });
  };

  const cadastrar = () => {
    fetch('http://localhost:8080/products',{
      method:'post',
      body:JSON.stringify(objProduct),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      setProducts([...products, retorno_convertido]);
      window.alert('Produto cadastrado com sucesso!');
      limparFormulario();
    })
  }

  const limparFormulario = () => {
    setObjProduct(product);
  }

  //Selecionar produto
  const selecionarProduto = (index) => {
    setObjProduct(products[index]);
    setBtnCadastrar(false);
  }

  return (
    <div>
      <p>{JSON.stringify(objProduct)}</p>

      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={products}/>
      <Tabela vetor={products} selecionar={selecionarProduto}/>
    </div>
  );
}

export default App;
