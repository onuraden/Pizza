import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import styled from 'styled-components'
import "../App.css";

const Header = styled.div`
    background-color: #CE2829;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
`
const Logo = styled.img`
    width: 50%;
    margin: auto;
`

function OrderPizzaHeader() {
  return (
    <Header>
        <Logo src="../images/iteration-1-images/logo.svg"></Logo>
        <Breadcrumb listTag="breadcrumb">
            <BreadcrumbItem
                href="/home"
                tag="a"
            >
                Ana Sayfa
            </BreadcrumbItem>
            <BreadcrumbItem active
                href="/orderpizza"
                tag="a"
            >
                Sipariş Oluştur
            </BreadcrumbItem>
        </Breadcrumb>
    </Header>
    

  )
}

export default OrderPizzaHeader