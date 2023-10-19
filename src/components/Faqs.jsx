import Accordion from './Accordion'
const Faqs = () => {
    return (
        <>
            <div className="faqs">
                <div className="faq_head">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="accordion">
                    <Accordion />
                </div>
            </div>
        </>
    )
}
export default Faqs