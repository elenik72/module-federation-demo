import React from 'react'

export const List = ({ list = [] }) => {
  return (
    <ul>
      {list.map((el, index) => {
        return <li key={index}>{el}</li>
      })}
    </ul>
  )
}
