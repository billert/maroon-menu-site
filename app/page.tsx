"use client"
import Image from "next/image";
import { motion } from "motion/react"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className = "min-h-screen justify-between items-center flex flex-col">
        <p className = "text-xs opacity-0 mb-20">Easter egg</p>
        <div className = "justify-center items-center flex flex-col">
          <div className = "">
            <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.2 }} className= "text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FF00C8] to-[#FF0033] inline-block text-transparent bg-clip-text">Smarter.</motion.p>
          </div>
          <div>
            <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 1 }} className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00BDD6] to-[#93F2FF] inline-block text-transparent bg-clip-text">Faster.</motion.p>
          </div>
          <div>
            <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 1.8 }} className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00FF11] to-[#63FFA9] inline-block text-transparent bg-clip-text">Easier.</motion.p>
          </div>
          <div>
            <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 2.6 }} className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#AF0000] to-[#AF1111] inline-block text-transparent bg-clip-text">Maroon Menu.</motion.p>
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
        <div className = "mb-10 justify-center items-center flex flex-col">
          <motion.p style = {{originX: 0, originY: 0}}  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 3.5}} className="text-2xl">Scroll</motion.p>
          <motion.div style = {{originX: 0, originY: 0}}  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 3.5}}>
            <motion.div initial = {{y: 0}} animate = {{y: 10}} transition = {{repeat: Infinity, repeatType: "reverse", duration: 1}}>
              <Image src = "/arrow-right.svg" alt="Down arrow" width={50} height={50} className = "rotate-90 dark:invert"></Image>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className = "min-h-screen justify-center items-center flex flex-col">
        <div className = "h-18"></div>
        <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 2.5, delay: 0.5}} viewport={{ once: true }} className="text-lg font-semibold text-center">The age-old question for students with meal plans:</motion.p>
        <motion.p style = {{originX: 0.5, originY: 0.5}}  initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 2.5, delay: 2}} viewport={{ once: true }} className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00FF11] to-[#63FFA9] inline-block text-transparent bg-clip-text">Should I swipe in?</motion.p>
      </div>
    </div>
  );
}
