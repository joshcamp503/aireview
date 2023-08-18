import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Header from "./Header"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`

const Main = styled.div`
  padding-left: 50px;
`

const Airline = () => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)
  const params = useParams()

  useEffect(() => {
    axios.get(`/api/v1/airlines/${params.slug}`)
      .then(res => {
        setAirline(res.data)
        setLoaded(true)
      })
      .catch(console.log)
  }, [])

  return (
    <Wrapper>
      <Column>
        <Main>
          {loaded && <Header airline={airline.data.attributes} reviews={airline.included}/>}
          <div className="reviews"></div>
        </Main> 
      </Column>
      <Column>
        <div className="reviewForm">[Review Form Goes Here.]</div>
      </Column>
    </Wrapper>
  )
}
export default Airline