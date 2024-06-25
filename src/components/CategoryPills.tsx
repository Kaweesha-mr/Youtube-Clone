import { Button } from "./button";


type CategoryPillProps = {

    categories : string[],
    selectedCategory : string,
    setSelected: (category:string) => void  

}

const CategoryPills = ({categories,selectedCategory,setSelected}:CategoryPillProps) => {
    return ( 
        <div className="overflow-x-hidden relative">
            <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
                {/* whitespace no wrap dmama button wge ewa podi wen shring wenne ne */}
 
                {categories.map(category => (
                    <Button 
                            onClick={()=>setSelected(category)} 
                            variant={selectedCategory === category ? 'dark':'default'} 
                            key={category} 
                            className="py-1 px-3 rounded-lg whitespace-nowrap">

                        {category}

                    </Button>
                ))}
            </div>

        </div>
     );
}
 
export default CategoryPills;