import React from 'react'

export const Project = ({name, link, image, github, description}) => {
  return (
      <div className="project">
        <h2>{name}</h2>
        {/* List of technologies*/}
        <a href={link} target="_blank">
          <div className="test"><img src={image} alt="" className="project-image mx-auto"/></div>
        </a>
        <p>{description}</p>
        <a href="{github}">Github Repo</a>
      </div>
  )
}