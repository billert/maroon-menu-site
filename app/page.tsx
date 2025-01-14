"use client"
import Image from "next/image";
import { motion } from "motion/react"

export default function Home() {

  const question_text = [..."\"Should I swipe in?\""]

  const question_variant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delay: 2,
        delayChildren: 2.5,
      }
    }
  }

  const letter_variant = {
    hidden: { 
      opacity: 0,
      
     },
    show: { opacity: 1,
      transition: {
        duration: 0.1
      }
     },
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className = "min-h-screen justify-center items-center flex flex-col">
        <div className = "justify-center items-center flex flex-col">
          <div className = "">
            <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.2 }} className= "text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FF00C8] to-[#FF0033] inline-block text-transparent bg-clip-text text-center">Smarter.</motion.p>
          </div>
          <div>
            <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 1 }} className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00BDD6] to-[#93F2FF] inline-block text-transparent bg-clip-text text-center">Faster.</motion.p>
          </div>
          <div>
            <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 1.8 }} className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00FF11] to-[#63FFA9] inline-block text-transparent bg-clip-text text-center">Easier.</motion.p>
          </div>
          <div>
            <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 2.6 }} className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#AF0000] to-[#AF1111] inline-block text-transparent bg-clip-text text-center">Maroon Menu.</motion.p>
          </div>
          
          <motion.div className = "flex flex-row items-center justify-center gap-2 md:gap-5 mt-5 max-w-full p-2">
            <motion.a initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 3.5 }} href = "https://apps.apple.com/us/app/maroon-menu/id6739734458">
              <Image src = "/apple store.svg" alt="Apple App Store Download" width={200} height={100}></Image>
            </motion.a>
            <motion.a initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 3.5 }} href="https://play.google.com/store/apps/details?id=com.billert.maroonmenu&pcampaignid=web_share">
              <Image src = "/google store.png" alt="Google Play Store Downlaod" width={220} height={100}></Image>
            </motion.a>
          </motion.div>
        </div>
        <div className = "mt-10 justify-center items-center flex flex-col">
          <motion.a href="#question" style = {{originX: 0, originY: 0}}  initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 3.5}} className="text-2xl">Scroll</motion.a>
          <motion.a style = {{originX: 0, originY: 0}}  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 3.5}} href = "#question">
            <motion.div initial = {{y: 0}} animate = {{y: 10}} transition = {{repeat: Infinity, repeatType: "reverse", duration: 1}}>
              <Image src = "/arrow-right.svg" alt="Down arrow" width={50} height={50} className = "rotate-90 dark:invert opacity-60"></Image>
            </motion.div>
          </motion.a>
        </div>
      </div>
      <div id="question" className = "min-h-screen justify-center items-center flex flex-col">
        <div className = "h-18"></div>
        <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ opacity: 0.2 }} whileInView={{ opacity: 0.8 }} transition={{ type: "spring", bounce: 0.1, duration: 0.5, delay: 0.5}} viewport={{ once: true }} className="text-md md:text-2xl text-center">The age-old question for students with meal plans:</motion.p>
        {/*<motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 2.5, delay: 2}} viewport={{ once: true }} className="text-4xl md:text-6xl font-extrabold bg-gradient-to-t to-[#0980ff] from-[#59a5fc] text-white text-center p-1 rounded-xl">"Should I swipe in?"</motion.p>*/}
        <motion.div variants={question_variant} viewport={{ once: true }} initial="hidden" whileInView="show" className = "bg-gradient-to-t to-[#0980ff] from-[#59a5fc] text-white p-1 rounded-xl flex flex-row">
          {question_text.map((item, index) => {
            return <li key = {index} className = "list-none"><motion.p variants = {letter_variant} viewport={{ once: true }} className="text-4xl md:text-6xl font-extrabold whitespace-pre-wrap">{item}</motion.p></li>
          })}
        </motion.div>
        <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ opacity: 0.0 }} whileInView={{ opacity: 0.8 }} transition={{ type: "spring", bounce: 0.1, duration: 0.5, delay: 4.5}} viewport={{ once: true }} className="text-md md:text-2xl text-center">Maroon Menu makes that choice simpler.</motion.p>
      </div>
    </div>
  );
}
