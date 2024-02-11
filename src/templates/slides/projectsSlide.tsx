export const ProjectsSlide = () => {
  return (
    <div className="w-full max-w-sm md:max-w-5xl mx-auto">
      {Array.from({ length: 100 }).map((x, index) => (
        <p key={index}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          quasi quidem quae, dolorem illo laborum nam soluta deserunt similique
          consequatur quo eum vero, accusamus velit expedita est sequi
          perspiciatis quia!
        </p>
      ))}
    </div>
  );
};
