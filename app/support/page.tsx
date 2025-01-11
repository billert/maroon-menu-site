export default function Page() {
    return (
        <div className = "p-3">
            <p className = "text-5xl font-bold mb-3">Frequently Asked Questions</p>
            <h1 className = "text-lg font-bold">Why does starring one item sometimes star another item?</h1>
            <p className="opacity-75">Stars are linked to a menu reference number in the database. This helps ensure that should a menu item&apos;s name be updated, it will remain starred. However, a small group of items share menu reference numbers with each other, which causes them to appear linked together.</p>
            <h1 className = "text-lg font-bold">Why can&apos;t I change the mealtime?</h1>
            <p className="opacity-75">If the mealtime picker is grayed out, that means the app is currently fetching the available mealtimes for the day. As the mealtimes change based on the dining hall and day, there is no way to pre-supply this information.</p>
            <h1 className = "text-lg font-bold">What do the V and/or VG symbols mean next to the star button?</h1>
            <p className="opacity-75">VG means vegan, while V means vegetarian.</p>
            <h1 className = "text-lg font-bold">The wipe data button doesn&apos;t work.</h1>
            <p className="opacity-75">For performance reasons, your data is stored both in memory and in storage. Pressing the wipe button only clears the storage part, and any updates to the memory part will also update the storage. To fully clear data, restart the app immediately after pressing the button.</p>
            <h1 className = "text-lg font-bold">Question not answered?</h1>
            <p className="opacity-75">You may contact the developer at the email address owenbcai@gmail.com.</p>
        </div>
    )
}