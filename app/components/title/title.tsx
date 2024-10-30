interface TitleProps {
  heading: string;
  id: string;
}

export const Title = ({ heading, id }: TitleProps) => {
  return (
    <h2 id={id} className='text-4xl font-bold md:pl-40 pl-20 mb-16 tracking-tight text-balance md:text-6xl'>
      {heading}
    </h2>
  );
};
