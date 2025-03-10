import DishGallery from "@/components/DishGallery";
import HomeBanner from "@/components/HomeBanner";
import RegisterForm from "@/components/RegisterForm";
import ReviewsGallery from "@/components/ReviewsGallery";
import Footer from "@/components/Footer";
//data
import { dishes } from "@/public/data";
import React from "react";


export default function Home() {
  return (
    <div>
      <HomeBanner/>
      <DishGallery dishes={dishes} />
      <RegisterForm/>
      <ReviewsGallery/>
    </div>
  );
}
