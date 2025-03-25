import { Form, Input, Label } from "reactstrap"
import styled from "styled-components"

const Secim = styled.form`
    display: flex;
    gap: 15rem;
    margin-bottom: 2rem;
`

const Radio = styled.div`
    text-align: left;
`
const Baslik = styled.p`
    text-align: left;
    font-size: 1.2rem;
    font-weight: bold;
`
const Yildiz = styled.span`
    color: red;
`

const Aciklama = styled.p`
    text-align: left;
`
const EkMalzeme = styled.div`
    display: flex;
    flex-direction: column; 
`
const malzemeler = ["Pepperoni", "Domates", "Biber", "Sosis", "Mısır", "Sucuk", "Kanada Jambonu", "Ananas", "Tavuk", "Jalapeno"];


function OrderPizzaForm() {
  return (
    <>
        <Secim>
        <Radio>
          <Baslik>Boyut Seç <Yildiz>*</Yildiz></Baslik>
          <label><input type="radio" name="boyutSecimi" value="Küçük" /> Küçük</label><br/>
          <label><input type="radio" name="boyutSecimi" value="Orta" /> Orta</label><br/>
          <label><input type="radio" name="boyutSecimi" value="Büyük" /> Büyük</label>
        </Radio>  
        <Form>
            <Label for="hamurSecimi">
                <Baslik>Boyut Seç <Yildiz>*</Yildiz></Baslik>
                </Label>
                <Input
                id="hamurSecimi"
                name="select"
                type="select"
                >
                <option>
                    İnce
                </option>
                <option>
                    Normal
                </option>
                <option>
                    Kalın
                </option>
                </Input>
        </Form>
        </Secim>

        <EkMalzeme>
            <Baslik>Ek Malzemeler</Baslik>
            <Aciklama>En fazla 10 malzeme seçebilirsiniz. 5₺</Aciklama>
            

        </EkMalzeme>
        
    </>
  )
}

export default OrderPizzaForm