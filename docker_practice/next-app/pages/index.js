import FirstSection from "@/components/firstSection";
import About from "@/components/about";
import { useEffect, useState } from "react";
import Art from "@/components/art";
import BookMe from "@/components/bookme";
// import '../src/assets/css/global.scss'

export default function Home() {

  return (
    <>
      <FirstSection />
      <About />
      <Art/>
      <BookMe/>
    </>
  );
}
