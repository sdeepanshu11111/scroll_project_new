// src/app/projects/page/[category].jsx
import React from "react";
// import { useRouter } from "next/router";
import Nav from "../Nav";

// Sample data with categories for demonstration
const projectsData = [
  {
    title: "Barbie Corvette Replica",
    summary: "A fun project.",
    category: "live",
  },
  { title: "Rover P3 Replica", summary: "A classic build.", category: "work" },
  {
    title: "Project Gather",
    summary: "A social gathering project.",
    category: "gather",
  },
  // Add more projects as needed
];

const projects = [
  {
    category: "live",
    title: "Barbie Corvette Replica – Classic Style, Modern Fun",
    description:
      "Embrace the charm of vintage with a dash of Barbie glamour. This custom-made Barbie Corvette Replica is designed for families and collectors who appreciate a stylish, nostalgic ride. With authentic details, a vibrant pink finish, and options in small or full sizes, this unique vehicle blends classic Corvette elegance with playful personality. Whether it’s for display or leisurely drives, the Barbie Corvette Replica adds a touch of whimsy and sophistication to any collection.",
    summary:
      "The Barbie Corvette Replica combines vintage charm with playful Barbie style, offering a vibrant pink finish and authentic details—perfect for collectors and families.",
  },
  {
    category: "work",
    title: "Rover P3 Replica – A Timeless British Classic, Reimagined",
    description:
      "Step into the elegance of a bygone era with our Rover P3 Replica. Inspired by one of Britain’s finest executive cars, this handcrafted replica captures the charm of the 1948-49 Rover P3 series. With authentic detailing, from the vintage dashboard to the distinguished grille, this vehicle is built for enthusiasts who appreciate both heritage and craftsmanship. Ideal for display or leisurely drives, the Rover P3 Replica offers a sophisticated experience and is available for restoration or custom builds.",
    summary:
      "The Rover P3 Replica blends vintage charm with modern craftsmanship, offering a classic British experience for collectors and enthusiasts.",
  },
  {
    category: "gather",
    title: "The Silver Arrow Replica – Mercedes-Benz W125 Legacy",
    description:
      "Experience the thrill of 1930s motorsport with our Silver Arrow Replica, a tribute to the legendary Mercedes-Benz W125. Built with precision and passion, this replica captures the essence of one of the fastest and most iconic race cars of its era. From the streamlined bodywork to the distinctive vintage detailing, every aspect is crafted for authenticity, making it perfect for collectors and racing enthusiasts. Own a piece of automotive history and embrace the spirit of speed and elegance.",
    summary:
      "The Silver Arrow Replica celebrates the iconic Mercedes-Benz W125, delivering classic motorsport style for collectors and enthusiasts.",
  },
  {
    title: "1948 Plymouth Special De Luxe Convertible – A Classic Reborn",
    description:
      "Relive the grandeur of the late 1940s with AJ Motoarts' exquisite restoration of the 1948 Plymouth Special De Luxe Convertible. With its vibrant red exterior and iconic detailing, this convertible captures the spirit of post-war automotive elegance. Meticulously restored for both display and casual drives, this Plymouth model combines authentic vintage charm with a dash of modern functionality. A showpiece for collectors and enthusiasts, this convertible is a timeless tribute to American automotive heritage.",
    summary:
      "The 1948 Plymouth Special De Luxe Convertible—beautifully restored for collectors, blending vintage elegance with modern functionality. Perfect for those seeking a classic driving experience.",
  },
  {
    title: "Spirit of Ecstasy Sculpture – Symbol of Luxury and Art",
    description:
      "Bring the iconic elegance of the Spirit of Ecstasy into your home with this exquisite sculpture. Crafted meticulously, this masterpiece stands as a tribute to luxury and refined taste. Perfect for enthusiasts and collectors, it captures the allure of Rolls Royce's legacy in a form that transcends time. Made to adorn any sophisticated space, this sculpture is more than decor—it’s an emblem of prestige.",
    summary:
      "Elevate your space with this Spirit of Ecstasy sculpture, a timeless symbol of luxury and refined style for the discerning collector.",
  },
  {
    title: "Majestic Lion Sculptural Vase",
    description:
      "Make a powerful statement in your home or office with this Lion Sculptural Vase, crafted with incredible attention to detail. Embodying strength and regality, this sculpted lion vase brings an aura of nobility to any space. Designed for those with an appreciation for bold artistry, it’s a premium decorative piece that seamlessly combines function and grandeur.",
    summary:
      "Imposing lion vase crafted for elegance and strength. Ideal for bold decor that highlights luxury and artistry in any space.",
  },
  {
    title: "Popeye the Sailor Statue – Bold Bronze Brilliance",
    description:
      "Unleash the power of iconic pop culture with this striking Popeye the Sailor statue. Crafted with high-shine bronze and vibrant colors, this piece embodies the muscular charm and gritty confidence of the classic character. Perfect for collectors and decor enthusiasts, this sculpture stands as a testament to strength, adventure, and enduring charisma. Each detail, from Popeye's iconic pipe to his powerful forearms, is meticulously designed to capture the sailor's fierce personality and enduring appeal.",
    summary:
      "High-gloss Popeye statue capturing classic character charm in bronze—a perfect addition for collectors and art lovers alike.",
  },
  {
    title: "Jaguar Inspired Car Couch – Embrace Modern Living",
    description:
      "Experience relaxation with a touch of vintage luxury in this Jaguar-inspired car couch. Perfectly blending comfort with iconic automotive design, this piece elevates any modern space with a bold statement. Each detail, from the intricate headlights to the sleek leather seating, captures the essence of classic Jaguar craftsmanship. Ideal for car enthusiasts and collectors, this couch is not just seating; it’s a showpiece that embodies passion for automotive heritage and contemporary style.",
    summary:
      "Jaguar-inspired car couch blending classic automotive design and modern comfort, perfect for enthusiasts and luxury interiors.",
  },
  {
    title: "Donald Duck – Regal Tribute Sculpture",
    description:
      "Experience the charm and grandeur of Disney’s iconic Donald Duck like never before! This exclusive sculpture, crafted with striking metallic finishes, captures Donald in his classic rich pose holding bags of wealth. Perfect for collectors and Disney fans, it adds a regal, playful touch to any space. Standing out with its vibrant hues and detailed craftsmanship, this piece is a statement of nostalgia, luxury, and character.",
    summary:
      "Elegant metallic Donald Duck sculpture, showcasing Disney nostalgia and charm. Perfect for collectors, adding luxury and playful character to any space.",
  },
  {
    title: "Jaguar Desk – Bold Luxury Meets Functionality",
    description:
      "Bring a bold touch of luxury to your workspace with the Jaguar Desk from AJ Motoarts. Inspired by the classic lines of a vintage Jaguar, this desk is more than just furniture—it’s a statement piece. Crafted with exquisite attention to detail, the desk merges style with functionality, creating an atmosphere of power and elegance for any office or reception area. Ideal for automotive enthusiasts and those looking to add unique flair to their decor.",
    summary:
      "The Jaguar Desk combines luxury with functionality, transforming any office into a bold, statement-making space for automotive enthusiasts.",
  },
  {
    title: "Chevrolet Corvette Replica – Classic Americana for Enthusiasts",
    description:
      "Capture the timeless elegance of a 1958 Chevrolet Corvette with this precisely crafted replica. Ideal for collectors and automotive enthusiasts, this Corvette Replica offers iconic vintage details with a modern touch. Whether as a statement decor piece or for leisurely drives, it celebrates classic American style, blending nostalgia with functionality. Built with care to honor an automotive icon, it’s a tribute to the golden age of motoring.",
    summary:
      "A stunning Chevrolet Corvette replica, combining vintage American style with modern craftsmanship, perfect for collectors and enthusiasts who appreciate classic elegance.",
  },
];

const CategoryPage = () => {
  // const router = useRouter();
  // const { category } = router.query;

  // const filteredProjects =
  //   category === "all"
  //     ? projectsData
  //     : projectsData.filter((project) => project.category === category);

  return (
    <>
      <Nav />
      <section className="py-16 bg-[#f7f4ec] px-8 md:px-[10rem] max-h-screen overflow-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg relative group ${
                index % 2 === 0 ? "sm:col-span-2" : "sm:col-span-1"
              }`}
            >
              <img
                src="https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg"
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4 pl-0 bg-[#f7f4ec]">
                <h3 className="text-lg font-medium text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#f7f4ec] py-2 px-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                <h3 className="text-lg font-medium text-gray-700">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-left">{project.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
