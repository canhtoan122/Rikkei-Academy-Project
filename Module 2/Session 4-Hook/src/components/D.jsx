import React, { useContext } from 'react'
import { createContex } from '../App'

export default function D() {
    const data = useContext(createContex);
  return (
    <div>D</div>
  )
}
