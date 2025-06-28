import './index.css'
import {Layer} from '../Layer'

export const Drink = ({id, name, image, ordered,layers}) => {
    return (
        <>
            <div className="drink">
                <div className="drink__product">
                    <div className="drink__cup">
                    <img src={image} alt={name} />
                    </div>
                    <div className="drink__info">
                    <h3>{name}</h3>
                    <div className="layer">
                        <Layer color="#feeeca" label="mléčná pěna" />
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