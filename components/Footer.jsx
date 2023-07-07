const Footer = () => {
  return (
    <footer className='bg-wwhite bg-opacity-40 backdrop-filter backdrop-blur-lg text-white px-6 bottom-0 w-full z-10 -mt-10'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <span className='text-2xl mr-2'>&copy;</span>
          <p className='text-sm'>2023 Santiago Teran. Done with ⚡</p>
        </div>
        <div className="flex justify-end">
          <ul className="flex w-1/2 gap-4 my-2">
            <li><a href="https://github.com/Santi-Teran" target="_BLANK"><img src="/github.png" alt="github" /></a></li>
            <li><a href="https://www.linkedin.com/in/santi-teran/" target="_BLANK"><img src="/linkedin.png" alt="linkedin" /></a></li>
            <li><a href="https://www.instagram.com/santii.teran/" target="_BLANK"><img src="/instagram.png" alt="instagram" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
};

export default Footer;