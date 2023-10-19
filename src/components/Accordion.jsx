import data from '../AccordionData';
import { useState } from 'react';

const Accordion = () => {

    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        console.log(i, selected)
        if (selected === i)
            return setSelected(null)
        setSelected(i)
    }

    return (
        <div className="accordion">
            {
                data.map((item, index) => {
                    return (
                        <div className='item' key={index + 1}>
                            <div className="title" onClick={() => toggle(index)}>
                                <p>{item.question}</p>
                                <span>{selected === index ? 'x' : '+'}</span>
                            </div>
                            <div className={
                                selected === index ? 'content show' : 'content'
                            }>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Accordion