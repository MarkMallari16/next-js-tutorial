import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const BasicAccordion = () => {
    const faqs = [
        {
            id: 1,
            question: "Where located?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
        },
        {
            id: 2,
            question: "Where can I contact you?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
        },
        {
            id: 3,
            question: "Working hours",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
        },
        {
            id: 4,
            question: "Sample",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
        }

    ]
    return (
        <Accordion type="single" className="mt-2 max-w-lg rounded-lg border" collapsible defaultValue="item-1">
            {
                faqs.map((faq) => (
                    <AccordionItem key={faq.id} value={`item-${faq.id}`} className="px-4">
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}

export default BasicAccordion