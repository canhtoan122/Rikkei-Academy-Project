import React from 'react'
import B from './B'

export default function A(prop) {
    const {name} = prop;
  return (
    <>
        <div>A: {name}</div>
        <B></B>
    </>
  )
}
