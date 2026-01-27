import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const BasicAccordion = () => {
    const faqs = [
        {
            id: 1,
            question: "Where are you located?",
            answer: "We are based in Quezon City, Philippines, but our services are available nationwide through our web platform."
        },
        {
            id: 2,
            question: "How can I contact you?",
            answer: "You can reach us via email at support@example.com or message us on our official Facebook page during business hours."
        },
        {
            id: 3,
            question: "What are your working hours?",
            answer: "Our support team is available Monday to Friday, from 9:00 AM to 6:00 PM (PH time), excluding holidays."
        },
        {
            id: 4,
            question: "Do I need an account to use the system?",
            answer: "You can browse basic features without an account, but creating one allows you to save data and access advanced tools."
        }
    ]
    return (
        <Accordion type="single" className="mt-4 max-w-lg rounded-lg border" collapsible defaultValue="item-1">
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