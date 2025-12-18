import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion'

const Contact = () => {



    const [result, setResult] = React.useState("");

    const onSubmitHandel = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e8ab572f-9bfc-4538-9c35-d30d918e54a0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Thank you for your response")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <motion.div 
        initial={{opacity:0,x:-200}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        className='container mx-auto py-4 pt-20  px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden ' id='Contact' >
        <h1 className=' text-2xl sm:text-4xl font-bold mb-2 text-center' >Contact <span className='underline underline-offset-4 decoration-1 under font-light' >With Us </span> </h1>
        <p className='text-gray-500 max-w-80 mx-auto text-center mb-8'  >Ready to Make a Move? Let’s Build Your Future Together</p>

        <form onSubmit={onSubmitHandel} className='max-w-2xl mx-auto text-gray-600 pt-8 '>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left '>
                    Your Name
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2  ' type="text" placeholder='Your Name '  required/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4 '>
                    Your Email
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2  ' type="email" placeholder='Your Email'  required/>
                </div>
            </div>
            <div className='my-6 text-left'>
                Message
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none ' name="Message" id="Message" required></textarea>
            </div>
            <div className='flex justify-center'>
                <button className='py-2 px-12 mb-10 text-white rounded  bg-blue-600 cursor-pointer hover:bg-blue-500'>
                    { result ? result :"Send Message "}
                </button>
            </div>
        </form>

    </motion.div>
  )
}

export default Contact