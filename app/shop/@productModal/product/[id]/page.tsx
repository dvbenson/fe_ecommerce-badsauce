'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useModal } from 'src/store';
import Modal from '@/components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Product() {
  const [isModalOpen, setIsModalOpen] = useModal((state) => [
    state.isModalOpen,
    state.setIsModalOpen,
  ]);
  const router = useRouter();
  console.log(isModalOpen);
  const handleModalClose = () => {
    router.back();
  };

  return (
    <>
      {isModalOpen ? (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen()}>
          <div className="bg-white opacity-0">
            <div className="width-[600px] relative h-[300px] bg-white p-10">
              <div className="h-full w-full"></div>
              <div className="absolute right-0 top-0">
                <button
                  onClick={handleModalClose}
                  className="cursor-pointer p-10"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-2xl"
                  ></FontAwesomeIcon>
                </button>
              </div>
              <div>THIS IS A PRODUCT</div>
            </div>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}
