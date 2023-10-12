import CloseIcon from '../../Buttons/Close';
import { useRouter } from "next/router";
import './style.css';
import  Header from '../Header';

const Appbar = () => {
    const router = useRouter();
    const handlePageClose = () => {
    router.push("/");
  };

  return (
    <div className="app-bar" >
        <div className='logo' onClick={handlePageClose}>
      <Header/>
        </div>
     <CloseIcon/>
      </div>
  );
};

export default Appbar;