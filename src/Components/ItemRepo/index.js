import React from 'react';
import {ItemContainer} from './styles';
import { FaTrashAlt } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
 
function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
}
  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target='_blank' rel="noreferrer" >Ver Repositorio<DiGithubBadge/></a> <br/>
        <a href='#' rel="noreferrer" className='remover' > Remover <FaTrashAlt color='#b30000'/></a> 
        <hr/>
    </ItemContainer>
  )
}

export default ItemRepo;