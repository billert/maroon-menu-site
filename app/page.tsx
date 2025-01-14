"use client"
import Image from "next/image";
import React from "react"
import { motion } from "motion/react"
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function Home() {


  const question_text = [..."\"Should I swipe in?\""]

  const question_variant = {
    hidden: { opacity: 0.2 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delay: 0.5,
        delayChildren: 0.75,
      }
    }
  }

  const letter_variant = {
    hidden: { 
      opacity: 0,
      
     },
    show: { opacity: 1,
      transition: {
        duration: 0.01
      }
     },
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className = "min-h-screen justify-center items-center flex flex-col pt-24">
        <div className = "justify-center items-center flex flex-col">
          <div className = "">
            <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.2 }} className= "text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FF00C8] to-[#FF0033] inline-block text-transparent bg-clip-text text-center">Smarter.</motion.p>
          </div>
          <div>
            <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.25 }} className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00BDD6] to-[#93F2FF] inline-block text-transparent bg-clip-text text-center">Faster.</motion.p>
          </div>
          <div>
            <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.3 }} className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00FF11] to-[#63FFA9] inline-block text-transparent bg-clip-text text-center">Easier.</motion.p>
          </div>
          <div>
            <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.35 }} className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#AF0000] to-[#AF1111] inline-block text-transparent bg-clip-text text-center">Maroon Menu.</motion.p>
          </div>
          
          <motion.div className = "flex flex-row items-center justify-center gap-2 md:gap-5 mt-5 max-w-full p-2">
            <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.25 }} href = "https://apps.apple.com/us/app/maroon-menu/id6739734458">
              <Image src = "/apple store.svg" alt="Apple App Store Download" width={200} height={100}></Image>
            </motion.a>
            <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.25 }} href="https://play.google.com/store/apps/details?id=com.billert.maroonmenu&pcampaignid=web_share">
              <Image src = "/google store.png" alt="Google Play Store Downlaod" width={220} height={100}></Image>
            </motion.a>
          </motion.div>
        </div>
        <div className = "mt-10 justify-center items-center flex flex-col">
          <motion.a href="#question" style = {{originX: 0, originY: 0}}  initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.25}} className="text-2xl">Scroll</motion.a>
          <motion.a style = {{originX: 0, originY: 0}}  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.25}} href = "#question">
            <motion.div initial = {{y: 0}} animate = {{y: 10}} transition = {{repeat: Infinity, repeatType: "reverse", duration: 1}}>
              <Image src = "/arrow-right.svg" alt="Down arrow" width={50} height={50} className = "rotate-90 dark:invert opacity-60"></Image>
            </motion.div>
          </motion.a>
        </div>
      </div>
      <div id="question" className = "min-h-screen justify-center items-center flex flex-col pt-40">
        
        <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ opacity: 0.2 }} whileInView={{ opacity: 0.8 }} transition={{ type: "spring", bounce: 0.1, duration: 0.25, delay: 0.25}} viewport={{ once: true }} className="text-md md:text-2xl text-center">The age-old question for students with meal plans:</motion.p>
        {/*<motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 2.5, delay: 2}} viewport={{ once: true }} className="text-4xl md:text-6xl font-extrabold bg-gradient-to-t to-[#0980ff] from-[#59a5fc] text-white text-center p-1 rounded-xl">"Should I swipe in?"</motion.p>*/}
        <motion.div variants={question_variant} viewport={{ once: true }} initial="hidden" whileInView="show" className = "bg-gradient-to-t to-[#0980ff] from-[#59a5fc] text-white p-1 rounded-xl flex flex-row">
          {question_text.map((item, index) => {
            return <li key = {index} className = "list-none"><motion.p variants = {letter_variant} viewport={{ once: true }} className="text-4xl md:text-6xl font-extrabold whitespace-pre-wrap">{item}</motion.p></li>
          })}
        </motion.div>
        <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ opacity: 0.2 }} whileInView={{ opacity: 0.8 }} transition={{ type: "spring", bounce: 0.1, duration: 0.25, delay: 1.5}} viewport={{ once: true }} className="text-md md:text-2xl text-center">Maroon Menu makes that choice simpler.</motion.p>
        <div className = "mt-10 justify-center items-center flex flex-col">
          <motion.a href="#question" style = {{originX: 0, originY: 0}}  initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 3.5}} className="text-2xl">Scroll</motion.a>
          <motion.a style = {{originX: 0, originY: 0}}  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 3.5}} href = "#theresmore">
            <motion.div initial = {{y: 0}} animate = {{y: 10}} transition = {{repeat: Infinity, repeatType: "reverse", duration: 1}}>
              <Image src = "/arrow-right.svg" alt="Down arrow" width={50} height={50} className = "rotate-90 dark:invert opacity-60"></Image>
            </motion.div>
          </motion.a>
        </div>
      </div>
      <div id="theresmore" className = "min-h-screen justify-center items-center flex flex-col pt-40">
        
        <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ opacity: 0.2 }} whileInView={{ opacity: 0.8 }} transition={{ type: "spring", bounce: 0.1, duration: 0.5, delay: 0.5}} viewport={{ once: true }} className="text-md md:text-2xl text-center">But wait! There&apos;s more:</motion.p>
        <Accordion variant = "bordered" itemClasses = {{title: "text-4xl"}}>
          <AccordionItem key="1" aria-label="Accordion 1" title={<motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.1 }} className= "text-5xl font-extrabold bg-gradient-to-r from-[#ffd359] to-[#ffb700] inline-block text-transparent bg-clip-text text-center pb-1">⭐ Star your favorite foods</motion.p>}>
            <p className = "max-w-2xl">Was there ever a time you wanted to let your future self know that a certain meal was good? With stars, now you can!</p>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title={<motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.15 }} className= "text-5xl font-extrabold bg-gradient-to-r from-[#59d5ff] to-[#00eaff] inline-block text-transparent bg-clip-text text-center pb-1">🚀 Change the menu while loading</motion.p>}>
            <p className = "max-w-2xl">Hate how you see the breakfast menu when you're trying to get to the dinner menu? You can now select the mealtime a little early, saving you time and taps.</p>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title={<motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.2 }} className= "text-5xl font-extrabold bg-gradient-to-r from-[#3cef6f] to-[#28ff9a] inline-block text-transparent bg-clip-text text-center pb-1">🧠 Remembers your dining hall</motion.p>}>
            <p className = "max-w-2xl">If you don't live at The Commons, it's probably a little annoying to have to switch to your own dining hall each time. Maroon Menu remembers the last dining hall you viewed the menu for, so you can skip the menu navigation.</p>
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 4" title={<motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.25 }} className= "text-5xl font-extrabold bg-gradient-to-r from-[#ef3c3c] to-[#ff8528] inline-block text-transparent bg-clip-text text-center pb-1">📦 Compact user interface</motion.p>}>
            <p className = "max-w-2xl">Our compact menu design shows more items on the screen at the same time, without sacrificing on looks. Scroll less and see more.</p>
          </AccordionItem>
          <AccordionItem key="5" aria-label="Accordion 5" title={<motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.3 }} className= "text-5xl font-extrabold bg-gradient-to-r from-[#d73cef] to-[#7a28ff] inline-block text-transparent bg-clip-text text-center pb-1">📳 Haptic feedback</motion.p>}>
            <p className = "max-w-2xl">With haptic feedback, buttons and pickers feel more clicky and satisfying. It's almost like you're pressing a real button.</p>
          </AccordionItem>
        </Accordion>
        {/*<motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 2.5, delay: 2}} viewport={{ once: true }} className="text-4xl md:text-6xl font-extrabold bg-gradient-to-t to-[#0980ff] from-[#59a5fc] text-white text-center p-1 rounded-xl">"Should I swipe in?"</motion.p>*/}
        
      </div>
      <p className = "text-center text-3xl">yay the website is almost done!</p>
    </div>
  );
}
