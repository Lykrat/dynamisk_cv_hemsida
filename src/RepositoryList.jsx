import React from 'react'
import './style.css'

function Repository(props){
    return(
        <div className='space'>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <a href={props.url}>Click to Repository</a>
        </div>
    )
}

export default function RepositoryList(props){
    let RepositoryList=props.repositorys
    .map((repository,index)=><Repository name={repository.name} desc={repository.description} url={repository.html_url} key={index}></Repository>)
    return(
        <div className='innerReact'>
            {RepositoryList}
        </div>
    )
}