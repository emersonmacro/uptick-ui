import React, { useState } from 'react'
import { Collapse } from 'reactstrap'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import './QnA.css'

const QnA = ({ question, answerText }) => {

  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(!isOpen)

  return (
    <div>
      <p
        onClick={ toggleIsOpen }
        className="p-question"
      >
        { question }<span className="icon-spacer">{ getIcon(isOpen) }</span>
      </p>
      <Collapse isOpen={ isOpen }>
        <p className="p-answer">{ answerText }</p>
      </Collapse>
    </div>
  )

}

export default QnA

const getIcon = (isOpen) => isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />