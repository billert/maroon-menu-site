"use client"
import Image from "next/image";
import Link from "next/link"
import { motion } from "motion/react"

export default function Home() {
  return (
    <div className="">
      <motion.p style = {{originX: 0, originY: 0}}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.2 }} className="text-6xl font-extrabold">Smarter.</motion.p>
      <motion.p style = {{originX: 0, originY: 0}}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 1.2 }} className="text-6xl font-extrabold">Faster.</motion.p>
      <motion.p style = {{originX: 0, originY: 0}}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 2.2 }} className="text-6xl font-extrabold">Easier.</motion.p>
      <motion.p style = {{originX: 0, originY: 0}}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 3.2 }} className="text-6xl font-extrabold">Maroon Menu.</motion.p>
      <motion.p style = {{originX: 0, originY: 0}}  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 5 }} className="text-2xl">Check back soon for website updates!</motion.p>
      <motion.div className = "flex flex-row gap-5 mt-5 ml-5">
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 5 }} href = "https://apps.apple.com/us/app/maroon-menu/id6739734458">
          <Image src = "/apple store.svg" alt="Apple App Store Download" width={200} height={100}></Image>
        </motion.a>
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 5 }} href="https://play.google.com/store/apps/details?id=com.billert.maroonmenu&pcampaignid=web_share">
          <Image src = "/google store.png" alt="Google Play Store Downlaod" width={220} height={100}></Image>
        </motion.a>
      </motion.div>
    </div>
  );
}
