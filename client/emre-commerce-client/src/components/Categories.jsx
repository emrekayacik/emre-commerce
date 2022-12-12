import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import {mobile} from "../responsive"

const Container = styled.div`
    display:flex;
    padding:20px;
    padding-top: 0px;
    justify-content:space-between;
    flex-direction: row;
    ${mobile(
            
      {padding:"0px", flexDirection: "column"}
      
      
      )}
`

const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem key={item.id} item={item} />
        ))}
    </Container>
  )
}

export default Categories