import { useState } from 'react'

const Home = () => {
  return (
    <>
      <h1>Modern Deploy</h1>
      <Contador />
    </>
  )
}

const Contador = () => {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);    
  }

  return (
    <div>
      <h2>{contador}</h2>
      <button onClick={adicionarContador}>Adiciona +1</button>
    </div>
  )
}

export default Home