import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <section className="md:gap12 mt-16 flex h-[90vh] flex-col items-center justify-start gap-7">
      <h1 className=" text-center font-lora text-5xl text-lightGray">
        MONI <br /> <span className="font-loraItalic">share</span>
      </h1>
      <div className="text-center font-lora text-xl text-lightGray">
        <p>Hello Manuela!</p>
        <p>What are you up today?</p>
      </div>

      <Link
        className="cursor-pointer rounded-full  bg-lightGray px-36 py-3 font-interBold text-lg font-bold text-primaryBlue"
        to="bookcar"
      >
        Book Car
      </Link>
      <h3 className="text-center text-lg text-lightGray">or</h3>
      <div className="flex flex-col gap-4 font-interBold">
        <Link
          className="cursor-pointer rounded-full border-2 px-36 py-3 text-center leading-5 text-lightGray"
          to="mycars"
        >
          See My Cars
        </Link>
        <Link
          className="w-full cursor-pointer rounded-full border-2 py-3 text-center leading-5 text-lightGray"
          to="mybooking"
        >
          See My Bookings
        </Link>
      </div>
    </section>
  )
}
