interface TitleProps {
  heading: string;
  id: string;
}

export const Title = ({ heading, id }: TitleProps) => {
  return (
    <h2 id={id} className='text-4xl font-black md:w-8/12 mt-20 md:mt-10 tracking-tighter text-balance p-10 md:text-6xl'>
      {heading}
    </h2>
  );
};
