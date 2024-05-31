import {  useState } from "react";
import "./App.css";
import {
  menuIcoClose,
  iconArrow,
  menuIcoOpen,
  mobileHeroImg1,
  mobileHeroImg2,
  mobileHeroImg3,
  desktopHeroImg1,
  desktopHeroImg2,
  desktopHeroImg3,
  Logo,
  iconLeft,
  iconRight,
  aboutImg1,
  aboutImg2,
} from "./assets";
function App() {
  const [currImage, setCurrImage] = useState(1);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const totalImage = 3;

  const navData = [
    {
      name: "home",
    },
    {
      name: "shop",
    },
    {
      name: "about",
    },
    {
      name: "contact",
    },
  ];

  const imageData = [
    {
      id: 1,
      mobileHero: mobileHeroImg1,
      desktopHero: desktopHeroImg1,
    },
    {
      id: 2,
      mobileHero: mobileHeroImg2,
      desktopHero: desktopHeroImg2,
    },
    {
      id: 3,
      mobileHero: mobileHeroImg3,
      desktopHero: desktopHeroImg3,
    },
  ];
  const contentData = [
    {
      id: 1,
      title: "Discover innovative ways to decorate",
      description:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      id: 2,
      title: "We are available all across the globe",
      description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
    },
    {
      id: 3,
      title: "Manufactured with the best materials",
      description:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ];

  const heroSliderImage = imageData?.map((data, index) => (
    <picture key={data.id}>
      <source media="(min-width : 850px)" srcSet={data.desktopHero} />
      <img
        className={`${currImage === index + 1 ? "block" : "hidden"} w-full h-full   `}
        src={data.mobileHero}
        alt=""
      />
    </picture>
  ));

  const sliderContent = contentData?.map((data, index) => (
    <article
      className={`${currImage === index + 1 ? "block" : "hidden"} h-fit  `}
      key={data.id}
    >
      <h1 className="text-[2.2rem] leading-10 font-semibold ">{data.title}</h1>
      <p className="  font-light text-[1rem] text-primary-dark-grey m-[1.8rem_0rem_1.8rem_0rem]">
        {data.description}
      </p>
    </article>
  ));

  return (
    <div className=" bg-primary-white grid place-content-center  ">
      <header>
        <nav className=" z-50 absolute top-0  p-16 flex flex-row gap-12 w-full place-items-start text-white items-center ">
          <button
            className="  text-black z-10 block Tablet:hidden"
            onClick={() => setOpenMenu((preval) => !preval)}
          >
            <img src={isOpenMenu ? menuIcoClose : menuIcoOpen} alt="menu" />
          </button>

          <div
            className={`${
              isOpenMenu
                ? "absolute left-0 right-0 bg-primary-white -top-5 h-full p-10  block "
                : "hidden "
            } order-1 Tablet:block  Tablet:order-2`}
          >
            <ul className="flex flex-row gap-5 items-center justify-center Tablet:items-start Tablet:justify-start Tablet:text-[1rem]">
              {navData?.map((data, index) => (
                <li key={index}>{data.name}</li>
              ))}
            </ul>
          </div>

          <figure>
            <img src={Logo} alt="logo" />
          </figure>
        </nav>
      </header>
      <main className="  grid grid-cols-1 Tablet:grid-cols-2 ">
        <section className=" col-span-1 h-fit Tablet:h-full Tablet:w-full Tablet:col-span-2 relative   ">
          <div className="w-full">{heroSliderImage}</div>

          <div className=" p-[4.25rem_2rem_4.25rem_2rem]  flex items-center flex-col justify-center relative  ">
            {sliderContent}
           <div className=" self-start">
           <button className=" uppercase tracking-[1em] text-[0.97rem] inline-block align-middle  ">
              Shop Now
            </button>
            <figure className=" inline-block align-middle">
              <img src={iconArrow} alt="icon-arrow" />
            </figure>
           </div>
           <div className=" bg-primary-black absolute  bottom-0 left-0 w-[7.5rem] p-5 flex justify-between Tablet:w-[8.6rem]">
            <button
              onClick={() =>
                setCurrImage((prevImage) =>
                  prevImage === 1 ? totalImage : prevImage - 1
                )
              }
            >
              <img src={iconLeft} alt="buttonLeft" />
            </button>
            <button
              onClick={() =>
                setCurrImage((prevImage) => (prevImage % totalImage) + 1)
              }
            >
              <img src={iconRight} alt="buttonRight" />
            </button>
          </div>
          </div>
        </section>

        <section className=" h-fit col-span-1 Tablet:col-span-3    grid grid-cols-1 Tablet:grid-cols-3">
          <picture>
            <img className="w-full h-full" src={aboutImg1} alt="about-img" />
          </picture>
          <article className="p-[2rem] flex flex-col justify-center px-12">
            <h1 className="mb-8 font-bold tracking-[.4rem] text-[0.9rem]">
              ABOUT OUR FURNITURE
            </h1>
            <p className=" text-primary-dark-grey font-light text-[1rem] max-w-[52ch] ">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </article>
          <picture>
            <img className="w-full h-full object-cover" src={aboutImg2} alt="about-img" />
          </picture>
        </section>
      </main>
    </div>
  );
}

export default App;
