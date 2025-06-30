import './index.css'
import {Layer} from '../Layer'

export const Drink = ({id, name, ordered, image, layers }) => {
    const orderedClass = ordered ? 'order-btn order-btn--ordered' : 'order-btn'
    return (
            <div className="drink">
                <div className="drink__product">
                    <div className="drink__cup">
                        <img src={`http://localhost:4000${image}`} alt={name} />
                    </div>
                    <div className="drink__info">
                        <h3>{name}</h3>
                        <div className="layer">
                            {layers.map((layer, index) => (
                            <Layer 
                            key={index} 
                            color={layer.color}
                            label={layer.label}
                            />
                            ))}
                        </div>
                    </div>
                </div>
                <form className="drink__controls" data-id={id}> 
                    <input type="hidden" className="order-id" value="0" /> 
                    <button className={orderedClass}> Objednat </button> 
                </form>
            </div>
    )
}

