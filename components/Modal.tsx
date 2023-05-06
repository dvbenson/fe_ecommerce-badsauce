// 'use client';
// import { useCallback, useRef, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { ReactNode } from 'react';

// interface ModalProps {
//   children?: ReactNode;
//   isOpen: boolean;
//   onClose: () => void;
// }
// export default function Modal({ children, isOpen, onClose }: ModalProps) {
//   const router = useRouter();
//   const overlay = useRef<HTMLDivElement>(null);
//   const wrapper = useRef<HTMLDivElement>(null);

//   const onDismiss = useCallback(() => {
//     router.back();
//   }, [router]);

//   const onClick = useCallback(
//     (e: any) => {
//       if (e.target === overlay.current || e.target === wrapper.current) {
//         if (onDismiss) onDismiss();
//       }
//     },
//     [onDismiss, overlay, wrapper],
//   );

//   const onKeyDown = useCallback(
//     (e: any) => {
//       if (e.key === 'Escape') {
//         onDismiss();
//       }
//     },
//     [onDismiss],
//   );

//   useEffect(() => {
//     document.addEventListener('keydown', onKeyDown);
//     return () => document.removeEventListener('keydown', onKeyDown);
//   }, [onKeyDown]);

//   //disable scroll on modal load?
//   return (
//     <div
//       ref={overlay}
//       className="fixed bottom-0 left-0 right-0 top-0 z-10 mx-auto bg-black/60"
//       onClick={onClick}
//     >
//       <div
//         ref={wrapper}
//         className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 p-6 sm:w-10/12 md:w-8/12 lg:w-1/2"
//       >
//         {children}
//       </div>
//     </div>
//     // <>
//     //   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
//     //     <div className="relative w-full max-w-md rounded bg-white shadow-lg">
//     //       <div className="p-4">{children}</div>
//     //       <button
//     //         onClick={onClose}
//     //         className="absolute right-2 top-2 text-lg font-bold"
//     //       >
//     //         &times;
//     //       </button>
//     //     </div>
//     //   </div>
//     // </>
//   );
// }
