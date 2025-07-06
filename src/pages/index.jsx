import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer'



document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true} />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact /> 
    </main>
    <Footer />
  </div>
);


const navBtn = document.querySelector('.nav-btn')
const rolloutNav = document.querySelector('.rollout-nav')

navBtn.addEventListener('click', () => {
  rolloutNav.classList.toggle('nav-closed')
}) 

rolloutNav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    rolloutNav.classList.add('nav-closed')
  }
})


const orderDrink = document.querySelectorAll('.drink__controls')
orderDrink.forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const drinkId = Number(e.target.dataset.id)

    const isOrdered = form.dataset.ordered === 'true'
    const orderValue = !isOrdered

    const response = await fetch(`http://localhost:4000/api/drinks/${drinkId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        { op: 'replace', path: '/ordered', value: orderValue },
      ]), 
  })
  const data = await response.json()

  window.location.reload()
})

})
