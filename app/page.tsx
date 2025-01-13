"use client"
import Image from "next/image";
import { motion } from "motion/react"

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className = "">
        <motion.p style = {{originX: 0, originY: 0}}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.2 }} className="text-6xl font-extrabold bg-gradient-to-r from-[#FF00C8] to-[#FF0033] inline-block text-transparent bg-clip-text">Smarter.</motion.p>
      </div>
      <div>
        <motion.p style = {{originX: 0, originY: 0}}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 1.2 }} className="text-6xl font-extrabold bg-gradient-to-r from-[#00BDD6] to-[#93F2FF] inline-block text-transparent bg-clip-text">Faster.</motion.p>
      </div>
      <div>
        <motion.p style = {{originX: 0, originY: 0}}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 2.2 }} className="text-6xl font-extrabold bg-gradient-to-r from-[#00FF11] to-[#63FFA9] inline-block text-transparent bg-clip-text">Easier.</motion.p>
      </div>
      <div>
        <motion.p style = {{originX: 0, originY: 0}}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 3.2 }} className="text-6xl font-extrabold bg-gradient-to-r from-[#AF0000] to-[#AF1111] inline-block text-transparent bg-clip-text">Maroon Menu.</motion.p>
      </div>
      <motion.p style = {{originX: 0, originY: 0}}  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 5 }} className="text-2xl">Check back soon for website updates!</motion.p>
      <motion.div className = "flex flex-row gap-5 mt-5 ml-5">
        <motion.a initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 5 }} href = "https://apps.apple.com/us/app/maroon-menu/id6739734458">
          <Image src = "/apple store.svg" alt="Apple App Store Download" width={200} height={100}></Image>
        </motion.a>
        <motion.a initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 5 }} href="https://play.google.com/store/apps/details?id=com.billert.maroonmenu&pcampaignid=web_share">
          <Image src = "/google store.png" alt="Google Play Store Downlaod" width={220} height={100}></Image>
        </motion.a>
      </motion.div>
    </div>
  );
}
