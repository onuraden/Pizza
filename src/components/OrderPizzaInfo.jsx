import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
    margin-top: 1rem;
`
const Baslik = styled.h1`
    font-size: 1.5rem;
    text-align: left;

`
const Bilgi = styled.p`
    display: flex;
    gap: 15rem;
    
`
const Fiyat = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
`
const Puan = styled.span`
    font-size: 1rem;
    font-weight: normal;
    margin: auto;
    margin-right:0;
    color: #5F5F5F;
    
`
const Metin = styled.p`
    font-size: 1rem;
    text-align: left;
    color: #5F5F5F;
`

function OrderPizzaInfo() {
  return (
    <Info>
        <Baslik>Position Absolute Acı Pizza</Baslik>
        <Bilgi>
            <Fiyat>85.5₺</Fiyat>
            <Puan>4.9 (200)</Puan>
        </Bilgi>
        <Metin>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana<br/>
            göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle<br/>
            kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek<br/>
            sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı<br/>
            hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya<br/>
            bazen pizzetta denir. </Metin>
    </Info>
  )
}

export default OrderPizzaInfo