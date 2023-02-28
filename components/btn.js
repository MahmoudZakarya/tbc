import React from 'react'

function Btn({text}) {
  return (
    <a class="fancy" href="#">
                   <span class="top-key"></span>
                   <span class="btn-text">{text}</span>
                   <span class="bottom-key-1"></span>
                   <span class="bottom-key-2"></span>
                 </a>
  )
}

export default Btn
