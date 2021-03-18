import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import CareScale from './CareScale'


function ShoppingList() {

    const categories = plantList.reduce((acc, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )


    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat.toUpperCase()}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.name}
                        {plant.isBestSale && <span>🔥</span>}
                        {plant.isSpecialOffer && <span className='lmj-sales'>Solde !</span>}
                        <CareScale needLight={plant.light} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList