import Image from "next/image"
import Heading from "@/components/shared/heading"
import Paragraph from "@/components/shared/paragraph"
import Subheading from "@/components/shared/subheading"

export default async function OurTeam() {
  const team = [
    {
      id: "1",
      fullName: "Дмитрий Сергеев",
      position: "Директор",
      image: "/assets/avatar/alex.jpg",
    },
    {
      id: "2",
      fullName: "Анна Королева",
      position: "Генеральный директор",
      image: "/assets/avatar/manager.jpg",
    },
    {
      id: "3",
      fullName: "Александр Сергеев",
      position: "Главный бухгалтер",
      image: "/assets/avatar/manager.jpg",
    },

    {
      id: "5",
      fullName: "Анна Королева",
      position: "Генеральный директор",
      image: "/assets/avatar/manager.jpg",
    },
    {
      id: "6",
      fullName: "Александр Сергеев",
      position: "Главный бухгалтер",
      image: "/assets/avatar/manager.jpg",
    },
    {
      id: "4",
      fullName: "Дмитрий Сергеев",
      position: "Директор",
      image: "/assets/avatar/alex.jpg",
    },
  ]
  return (
    <section
      id="our-team"
      className="container mb-[100px] grid gap-[30px] md:mb-[120px] lg:grid-cols-3 lg:gap-[50px]"
    >
      <div className="space-y-[26px]">
        <Heading>Наша команда</Heading>
        <Subheading>Ознакомьтесь с нашими специалистами</Subheading>
        <Paragraph>
          Наши сотрудники - это высококвалифицированные специалисты с богатым
          опытом в области бухгалтерии и налогового консультирования.
          <br />
          <br />
          Мы постоянно совершенствуем наши знания и следим за изменениями в
          законодательстве, чтобы предложить Вам самые актуальные и эффективные
          решения.
        </Paragraph>
      </div>
      <div className="grid gap-16 lg:col-span-2 lg:grid-cols-3 lg:gap-8">
        {team.map(person => (
          <div key={person.id} className="flex flex-col items-center gap-5">
            {/* Team person image */}
            <div className="relative size-40 overflow-hidden rounded-full">
              <Image
                src={person.image}
                alt={person.fullName}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col items-center gap-2.5">
              <h4 className="text-xl font-bold leading-[22px] text-black">
                {person.fullName}
              </h4>
              <span className="text-lg leading-[27px] text-gray-650">
                {person.position}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
