import { Drink } from '../Drink'
import './index.css'


const responseDrinks = await fetch('http://localhost:4000/api/drinks')
const dataDrinks = await responseDrinks.json()
const drinks = dataDrinks.data
console.log(dataDrinks)



//{"id":0,"name":"Espresso","ordered":false,"layers":[{"color":"#613916","label":"espresso"}],"image":"/assets/cups/espresso.png"}

export const Menu = () => {
    return (
        <section id="menu" className="menu">
            <div className="container">
            <h2>Naše nabídka</h2>
            <p className="menu-intro">
                Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
            </p>
            <div className="drinks-list">
                {drinks.map((drink) => (
                  <Drink 
                  key={drink.id}
                  id={drink.id}
                  name={drink.name}
                  ordered={drink.ordered}
                  layers={drink.layers}
                  label={drink.label}
                  image={drink.image}
                  />  
                ))}
                
            </div>

            <div className="order-detail">
                <a href="/order.html">Detail objednávky</a>
            </div>
            </div>
        </section>
    )
}

