import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion"
import { Accordion, AccordionItem } from "../ui/accordion"

const BasicAccordion = () => {
    return (
        <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
                <AccordionTrigger>Where located?</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam consequatur atque fugiat aperiam vitae quos ipsum quisquam incidunt quo.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default BasicAccordion