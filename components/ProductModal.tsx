'use client';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function ProductModal() {
  const router = useRouter();
  // const pathname = usePathname();
  // const showModal = pathname.startsWith('/shop/product/');

  const handleModalClose = () => {
    router.back();
  };

  // if (!showModal) {
  //   return null;
  // }

  return (
    <div className="width-[600px] relative h-[300px] bg-white p-10">
      <div className="h-full w-full"></div>
      <div className="absolute right-0 top-0">
        <button onClick={handleModalClose} className="cursor-pointer">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-2xl"
          ></FontAwesomeIcon>
        </button>
        <div>THIS IS A PRODUCT</div>
      </div>
    </div>
  );
}
