import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
const Container = styled.div`
    display:flex;
    padding:20px;
    padding-top: 0px;
    justify-content:space-between;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
    }
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