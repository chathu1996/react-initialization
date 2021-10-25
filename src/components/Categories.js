import CategoryItem from "./Categoryitem";
import"./Categories.css"

function Categories() {
    return(
        <div className="container">
            <CategoryItem  name="Dress"/>
            <CategoryItem  name="Bottoms"/>
            <CategoryItem  name="Tops"/>
            <CategoryItem  name="Accessosoris"/>
            <CategoryItem  name="outwares" />
            <CategoryItem  name="Sleepwears"/>
        </div>
    )
}

export default Categories;