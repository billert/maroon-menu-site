import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="">
      <p className="text-6xl font-extrabold">Smarter.</p>
      <p className="text-6xl font-extrabold">Easier.</p>
      <p className="text-6xl font-extrabold">Faster.</p>
      <p className="text-6xl font-extrabold">Maroon Menu.</p>
      <p className="text-2xl">Check back soon for website updates!</p>
      <div className = "flex flex-row gap-5 mt-5 ml-5">
        <Link href = "https://apps.apple.com/us/app/maroon-menu/id6739734458">
          <Image src = "/apple store.svg" alt="Apple App Store Download" width={200} height={100}></Image>
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.billert.maroonmenu&pcampaignid=web_share">
          <Image src = "/google store.png" alt="Google Play Store Downlaod" width={220} height={100}></Image>
        </Link>
      </div>
    </div>
  );
}
