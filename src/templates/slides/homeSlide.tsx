import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export const HomeSlide = () => {
  const socialMedias = [
    {
      icon: <LinkedInLogoIcon />,
      href: "https://www.linkedin.com/in/chsjr1996/",
    },
    { icon: <GitHubLogoIcon />, href: "https://github.com/chsjr1996/" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-50px)]">
      <div className="max-w-sm md:max-w-lg">
        <p className="text-3xl mb-2 text-white">
          Olá, meu nome é <strong>Carlos Henrique</strong>
        </p>
        <p className="text-white">
          Desenvolvedor PHP e NodeJS, apaixonado em distribuições Linux e por
          aprender novas tecnologias, buscando também sempre aperfeiçoar os
          conhecimentos já obtidos.
        </p>
        <hr className="w-full my-4 border-white" />
        <div className="flex items-center">
          {socialMedias.map((media, index) => (
            <a key={index} href={media.href} target="_blank">
              <Button
                variant="ghost"
                className="border border-white rounded-full w-[50px] h-[50px] text-white hover:text-black hover:bg-white mr-4"
              >
                {media.icon}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
