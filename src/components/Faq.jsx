import  { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { motion } from 'motion/react';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="container py-16">
        <div className="text-center mb-8">
            <h1 className="text-7xl font-bold leading-tight bg-gradient-to-l from-gray-100 via-cyan-300 to-cyan-600 bg-clip-text text-transparent mb-4">Frequently asked <br /> questions</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quaerat.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 py-5">
            <div className="space-y-4">
                <div className="border-b border-gray-700 overflow-hidden">
                    <button
                        onClick={() => toggleAccordion(0)}
                        className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
                    >
                        <span>Accordion 1</span>
                        <span
                        className={`text-xl font-bold transform transition-transform duration-300 ${openIndex === 0 ? 'rotate-180' : 'rotate-0'}`}
                        >
                        {openIndex === 0 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                        </span>
                    </button>
                    <div
                        className={`transition-all duration-300 ease-in-out ${openIndex === 0 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="px-4 py-2">This is the content for accordion 1.</div>
                    </div>
                </div>

                <div className="border-b border-gray-700 overflow-hidden">
                    <button
                        onClick={() => toggleAccordion(1)}
                        className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
                    >
                        <span>Accordion 2</span>
                        <span
                        className={`text-xl font-bold transform transition-transform duration-300 ${openIndex === 1 ? 'rotate-180' : 'rotate-0'}`}
                        >
                        {openIndex === 1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                        </span>
                    </button>
                    <div
                        className={`transition-all duration-300 ease-in-out ${openIndex === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="px-4 py-2">This is the content for accordion 2.</div>
                    </div>
                </div>
            </div>
            
            <div className="space-y-4">
                <div className="border-b border-gray-700 overflow-hidden">
                    <button
                        onClick={() => toggleAccordion(2)}
                        className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
                    >
                        <span>Accordion 3</span>
                        <span
                        className={`text-xl font-bold transform transition-transform duration-300 ${openIndex === 2 ? 'rotate-180' : 'rotate-0'}`}
                        >
                        {openIndex === 2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                        </span>
                    </button>
                    <div
                        className={`transition-all duration-300 ease-in-out ${openIndex === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="px-4 py-2">This is the content for accordion 3.</div>
                    </div>
                </div>

                <div className="border-b border-gray-700 overflow-hidden">
                    <button
                        onClick={() => toggleAccordion(3)}
                        className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
                    >
                        <span>Accordion 4</span>
                        <span
                        className={`text-xl font-bold transform transition-transform duration-300 ${openIndex === 3 ? 'rotate-180' : 'rotate-0'}`}
                        >
                        {openIndex === 3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                        </span>
                    </button>
                    <div
                        className={`transition-all duration-300 ease-in-out ${openIndex === 3 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="px-4 py-2">This is the content for accordion 4.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq