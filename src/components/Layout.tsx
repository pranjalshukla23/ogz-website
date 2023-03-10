import Header from "./Header";

type Props = {
  children: JSX.Element;
};
const Layout = ({ children }: Props) => {
  return (
    <div className='relative'>
      <Header />
      {children}

      {/* header gradient */}
      <div className="bg-[url('/images/heading-background.svg')] bg-no-repeat bg-cover h-[1867px] absolute top-0 bottom-3/4 right-0 left-0 "></div>

      {/* footer gradient */}
      <div className="bg-[url('/images/footer-background.svg')] bg-no-repeat bg-center h-[1200px] absolute bottom-0  right-0 left-0"></div>
    </div>
  );
};

export default Layout;
