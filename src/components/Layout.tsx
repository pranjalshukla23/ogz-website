import Header from "./Header";

type Props = {
  children: JSX.Element;
};
const Layout = ({ children }: Props) => {
  return (
    <div className='relative'>
      {children}

      {/* header gradient */}
      <div className="bg-[url('/images/background-ogz-1.svg')] bg-no-repeat bg-cover h-[1170px] absolute right-0 top-0  left-0 "></div>

      {/* hero gradient */}
      <div className='bg-radial-gradient bg-no-repeat bg-cover  w-[1237px] h-[800px] absolute right-0 top-0  left-1/3'></div>

      {/* footer gradient */}
      <div className="bg-[url('/images/background-ogz-2.svg')] bg-no-repeat bg-cover h-[1000px] absolute bottom-0  right-0 left-0  z-0 "></div>
    </div>
  );
};

export default Layout;
