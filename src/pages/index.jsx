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

const orderDrink = async (e) => {
  e.preventDefault()
const form = e.target.closest('form')
  const id = form.dataset.id

  console.log(`Kliknuto na nápoj s ID: ${id}`)

  const response = await fetch(`http://localhost:4000/api/drinks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        { op: 'replace', path: '/ordered', value: true },
      ]), 
})
 if (!response.ok) {
  alert('Něco se nepovedlo, zkuste to za chvíli znovu.')
 } else {
  window.location.reload()
 }}

document
  .querySelectorAll('.drink__controls')
  .forEach((form) => {
    form.addEventListener('click', orderDrink)
  })