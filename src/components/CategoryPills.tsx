import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";
import { useEffect, useRef, useState } from "react";


type CategoryPillProps = {

    categories: string[],
    selectedCategory: string,
    setSelected: (category: string) => void

}

const CategoryPills = ({ categories, selectedCategory, setSelected }: CategoryPillProps) => {

    const TRANSLATE_AMOUNT = 200
    const [isLeftVisible, setIsLeftVisible] = useState(false)
    const [isRightVisible, setIsRightVisible] = useState(true)
    const [translate, setTranslate] = useState(500)
    const containerRef = useRef<HTMLDivElement>(null)


    useEffect(() =>{
        if(containerRef.current == null) return 

        const observer  = new ResizeObserver(entries => {
            const container = entries[0]?.target
            if(container == null) return

            setIsLeftVisible(translate > 0)
            setIsRightVisible(
                translate + container.clientWidth < container.scrollWidth
            )
        })

        observer.observe(containerRef.current)

        return() => {
            observer.disconnect()
        }
    },[categories,translate])


    return (
        <div ref={containerRef} className="overflow-x-hidden relative">
            <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]" style={{ transform: `translateX(-${translate}px)` }}>
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
                    <Button variant={"ghost"} size="icon" className=" h-full aspect-square w-auto p-1.5" onClick={() => {
                        setTranslate(translate => {
                            const newTranslate = translate - TRANSLATE_AMOUNT;

                            if (newTranslate < 0)
                                return 0
                            else
                                return newTranslate
                        })
                    }} >
                        <ChevronLeft />
                    </Button>

                </div>
            }

            {
                isRightVisible && <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full aspect-square p-1.5 bg-gradient-to-l from-white from-50% to-transparent w-24 flex justify-end ">
                    <Button variant={"ghost"} size="icon" className=" h-full aspect-square w-auto p-1.5" onClick={() => {
                        setTranslate(translate => {
                            if (containerRef.current == null) return translate
                            const newTranslate = translate + TRANSLATE_AMOUNT
                            //get the full width of the scrolling have to do
                            const edge = containerRef.current.scrollWidth
                            //gives the current width showing
                            const width = containerRef.current.clientWidth

                            if (newTranslate + width >= edge) {
                                return edge - width
                            }
                            return newTranslate
                        })
                    }}><ChevronRight /></Button>

                </div>
            }

        </div>
    );
}

export default CategoryPills;