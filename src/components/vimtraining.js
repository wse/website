import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    margin: 4rem 1rem;
    background: #2f2f2f;
    padding: 24px;
    border-radius: 8px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23717171' fill-opacity='.2' fill-rule='evenodd'/%3E%3C/svg%3E");

  a {
    color: #6ab2ff;
    text-decoration: underline;
  }
`

const VimTraining = () => (
  <>
    <Container>
      Checkout my new course on Vim at <a href="https://vimtraining.com?ref=nishantdania.com" rel="noopener" rel="noreferrer" target="_blank">vimtraining.com</a> 
    </Container>
  </>
)

export default VimTraining
