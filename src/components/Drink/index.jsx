import './index.css'
import {Layer} from '../Layer'

export const Drink = ({name, image, layers }) => {
    
    return (
        <>
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
                <form className="drink__controls">
                    <input type="hidden" className="order-id" value="0" />
                    <button className="order-btn">
                    Objednat
                    </button>
                </form>
            </div>
        </>
    )
}