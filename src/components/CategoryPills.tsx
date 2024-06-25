import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";


type CategoryPillProps = {

    categories: string[],
    selectedCategory: string,
    setSelected: (category: string) => void

}

const CategoryPills = ({ categories, selectedCategory, setSelected }: CategoryPillProps) => {

    const [isLeftVisible, setIsLeftVisible] = useState(true)
    const [isRightVisible, setIsRightVisible] = useState(true)
    return (
        <div className="overflow-x-hidden relative">
            <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
                {/* whitespace no wrap dmama button wge ewa podi wen shring wenne ne */}

                {categories.map(category => (
                    <Button
                        onClick={() => setSelected(category)}
                        variant={selectedCategory === category ? 'dark' : 'default'}
                        key={category}
                        className="py-1 px-3 rounded-lg whitespace-nowrap">

                        {category}

                    </Button>
                ))}
            </div>

            {
                isLeftVisible && <div className="absolute left-0 top-1/2 -translate-y-1/2 h-full aspect-square p-1.5 bg-gradient-to-r from-white from-50% to-transparent w-24">
                    <Button variant={"ghost"} size="icon" className=" h-full aspect-square w-auto p-1.5" ><ChevronLeft /></Button>

                </div>
            }
            {
                isRightVisible && <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full aspect-square p-1.5 bg-gradient-to-l from-white from-50% to-transparent w-24">
                    <Button variant={"ghost"} size="icon" className=" h-full aspect-square w-auto p-1.5" ><ChevronRight /></Button>

                </div>
            }

        </div>
    );
}

export default CategoryPills;