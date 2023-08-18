import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;
  font-size: 30px;

  img {
    height: 60px;
    width: 60px;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: -8px;
    margin-right: 10px;
  }
`

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`

const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`

const Header = ({ airline, reviews }) => {
  const total = reviews.length || 0

  return (
    <Wrapper>
      <h1><img src={airline.image_url} alt={airline.name} />{airline.name}</h1>
      <div>
        <TotalReviews>{total} User Reviews</TotalReviews>
        <div className="starRating"></div>
        <TotalOutOf>{airline.avg_score} out of 5</TotalOutOf>
      </div>
    </Wrapper>
  )
}
export default Header