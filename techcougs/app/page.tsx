import About_us from "@/layouts/home/About_us";
import Hero from "@/layouts/home/Hero";

export default function Home() {
  return (
    <main>
      <div style={{
        backgroundImage: "url('https://images.pexels.com/photos/7437489/pexels-photo-7437489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundRepeat: "no-repeat",
        filter: "brightness(0.5)",
      }}
        className="absolute md:h-[90vh] -z-10 h-[80vh] w-full bg-cover bg-center"></div>
      <Hero />
      <About_us />
    </main>
  );
}
