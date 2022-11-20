import React from 'react'
import styled from 'styled-components'

const ModalDiv = styled.div`
    display: ${props => props.block && props.block};
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height:100%;
    background: rgba(0,0,0,0.6)
`
const ContentDiv = styled.div`
    position: fixed;
    top: 50%;
    left:50%;
    width: 70%;
    height:auto;
    padding: 2rem;
    transform: translate(-50%, -50%);
    color: black;
`
const CloseButton = styled.span`
background-color:white;
margin: 10px 0px;
padding: 7px;
font-size: 18px;
`

export const StyledModal = (
  {
    handleClose,
    show,
    children
  }
) => {
  return (
    <ModalDiv block={show ? "block" : "none"}>
      <ContentDiv>
        {children}
        <button
          onClick={handleClose}
        >
          <CloseButton>
            Close
          </CloseButton>
        </button>
      </ContentDiv>
    </ModalDiv>
  )
}