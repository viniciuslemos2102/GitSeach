import gitLogoWhite from '../../Assets/githubLogowhite.svg';
import {Container} from './styles';
import Input from '../../Components/Input';
import ItemRepo from '../../Components/ItemRepo';
import { useState } from 'react';
import Button from '../../Components/Button';
import {api} from '../../Services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSeachRepos = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){
      const isExist = repos.find(repos => repos.id === data.id);
      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return
      }
    }
    alert('Repositorio Não Encontrado');
  }
  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);

    // utilizar filter.
  }

  return (
    <Container className='App'>
      <img src={gitLogoWhite} width={72} height={72} alt='logo github' />
     <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
     <Button onClick={handleSeachRepos}/>
     {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
