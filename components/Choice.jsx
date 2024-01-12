import { useState } from 'react' 

const Choice = () => {
  const [jumlahAngka, setJumlahAngka] = useState(0);
  return (
  <>
    <h1>Bet : {jumlahAngka} $
    </h1>
    
    <button onClick={() => setJumlahAngka((prev) => prev +20000)}>Tambah bet</button>
    <button onClick={() => setJumlahAngka((prev) => prev <= 0?0 : prev -20000)}>Kurangi bet</button>
    
  </>
  )
}

export default Choice