'use client';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function ProductModal(
  showModal: boolean,
  setShowModal: (showModal: boolean) => void,
) {
  const router = useRouter();

  const handleModalClose = () => {
    setShowModal(false);
    router.back();
  };

  return (
    <div className="relative width-[600px] h-[300px] bg-white p-10">
      <div className="w-full h-full"></div>
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
