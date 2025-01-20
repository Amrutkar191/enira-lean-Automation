// Header.jsx
import imag from "../assets/SideImage.png";

export default function Header() {
  return (
    <div className="ml-[20px] w-[50vw] h-[100vh] bg-white flex justify-center items-center overflow-hidden ">
      <img
        className="  h-[95.5vh] object-fill rounded-xl"
        src={imag}
        alt="Side Image"
      />
    </div>
  );
}
