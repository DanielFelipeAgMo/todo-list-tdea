import React from 'react'

const AlertError = ({mensaje}) => {
  return (
    <div className="bg-red-600 font-semibold uppercase text-center text-amber-300 p-3 mb-5 rounded-lg"><p>{mensaje}</p></div>
  )
}

export default AlertError