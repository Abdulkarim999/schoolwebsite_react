import Categories from "./Components/Categories/Index"
import Hero from "./Components/Hero/Index"
import Navbar from "./Components/Navbar/Index"
import AboutUs from "./Components/AboutUs/AboutUs"
import Courses from "./Components/Courses/Index"
import WhyChooseUs from "./Components/WhyChooseUs/Index"
import Testimonial from "./Components/Testimonial/Index"
import Pricing from "./Components/Pricing/Index"
import Contact from "./Components/Contact/Index"
import Footer from "./Components/Footer/Index"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {

  return (
    <>
      <Navbar />
	  <Hero />
	  <Categories />
	  <AboutUs />
	  <Courses />
	  <WhyChooseUs />
	  <Testimonial />
	  <Pricing />
	  <Contact />
	  <Footer />
    </>
  )
}

export default App
