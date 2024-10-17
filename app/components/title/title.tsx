interface TitleProps {
  heading: string;
}

export const Title = ({ heading }: TitleProps) => {
  return <h2 id="skills" className='text-6xl font-black w-8/12 tracking-tighter text-balance p-10'>{heading}</h2>;
};
