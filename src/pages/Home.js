import React from 'react'
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Categories from "../components/categories/Categories";
import Footer from "../components/footer/Footer";
import Marque from "../components/marque/Marque";
import Products from "../components/produits/Products";
import Signup from "../components/subscribe/Signup";
import Subscribe from "../components/subscribe/Subscribe";
import Testimonial from "../components/testimonial/Testimonial";
import TopSelling from "../components/topselling/TopSelling";

export default function Home() {
  return (
    <div className="text-xl ">
     
     <Signup/>
      < Navbar/>
      < Hero/>
      <Marque/>
      < Products/>
      <TopSelling/>
      <Categories/>
      <Testimonial/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

