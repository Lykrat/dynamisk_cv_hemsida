import { useEffect, useRef, useState } from 'react'
import './style.css'
import Repository from './RepositoryList'

function App() {

  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
  },[])

  function getApi(){
    fetch("https://api.github.com/users/Lykrat/repos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setloading(false);
        setRepositorys(data);
      })
  }

  const [repositorys, setRepositorys]=useState([]);
  const dataFetchedRef = useRef(false);

  useEffect(()=> {
    if(dataFetchedRef.current){
      getApi()
    }
    dataFetchedRef.current=true;
  },[]);
  return (
    <main className='cvtext'>
      {
        loading ?
        <div className='innerReact'>
          <h2>Website is loading</h2>
        </div>
        :
        <Repository repositorys={repositorys}></Repository>
      }
    </main>
  )
}

export default App
