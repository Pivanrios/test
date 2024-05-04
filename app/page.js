import DishGallery from "@/components/DishGallery";
import HomeBanner from "@/components/HomeBanner";
import RegisterForm from "@/components/RegisterForm";
import ReviewsGallery from "@/components/ReviewsGallery";
//data
import { dishes } from "@/public/data";


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
