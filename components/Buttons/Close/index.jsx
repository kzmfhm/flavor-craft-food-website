import React from 'react'
import closeImage from '../../../public/svg/close.svg';
import './style.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const CloseIcon = () => {
    const router = useRouter();

    const handlePageClose = () => {
      router.push("/");
    };
  return (
    <div className="close-button" onClick={handlePageClose}>
          <Image src={closeImage} alt="Close" width={32} height={32} />
        </div>
  )
}

export default CloseIcon