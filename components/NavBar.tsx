export default function Navbar() {
  return (
    <nav className='w-full h-24 shadow-lg'>
        <div className='flex justify-between items-center h-full w-full px-4 2x1:px-16'>
      <div className='ml-4'>
        <p className="text-3xl">BADSAUCE</p>
      </div>
      <div className='mr-4'>
        <ul className='flex flex-row gap-5'>
          <li className='p-4'>Home</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
          <li className='p-4'>Shop</li>
          <li className='p-4'>Cart</li>
        </ul>
      </div>
      </div>
    </nav>
  );
}
