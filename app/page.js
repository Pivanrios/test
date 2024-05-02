import DishGallery from "@/components/DishGallery";
import HomeBanner from "@/components/HomeBanner";
import RegisterForm from "@/components/RegisterForm";
import ReviewsGallery from "@/components/ReviewsGallery";


export default function Home() {
  return (
    <>
    <HomeBanner/>
    <DishGallery/>
    <RegisterForm/>
    <ReviewsGallery/>
    </>
  );
}
