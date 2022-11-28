import React from 'react'
import styled from 'styled-components'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import {mobile} from "../responsive"
import {useLocation} from "react-router-dom"
import { useState } from 'react'

const Container = styled.div`
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
const Filter = styled.div`
    margin: 20px;
    ${mobile(
            
        {margin:"0px 20px",display:"flex",flexDirection:"column"}
        
        
        )}
`
const FilterText = styled.span`
    font-size: 24px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile(
            
        {marginRight:"0px"}
        
        
        )}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile(
            
        {margin:"10px 0px"}
        
        
        )}
`
const Option = styled.option`
    
`
const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];

    const [filters,setFilters] = useState({});
    const [sort,setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value 
        });   
    }
return (
        <Container>
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select name='color' onChange={handleFilters}>
                        <Option disabled>Color</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Orange</Option>
                        <Option>Purple</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option disabled selected>Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                <FilterText>Sort Products</FilterText>
                <Select onChange={e=>setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={category} filters={filters} sort={sort} />
            <Newsletter />
        </Container>
    )
}

export default ProductList
