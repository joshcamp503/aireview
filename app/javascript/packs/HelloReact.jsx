import React from 'react'

const HelloReact = ({ name }) => {
  return (
    <div>Hello, {name}!</div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HelloReact name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})

export default HelloReact