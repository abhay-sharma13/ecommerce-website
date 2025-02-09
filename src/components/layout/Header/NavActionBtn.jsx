function NavActionBtn({ children, altText, tClass, ...props }) {
  const { error: errorLog } = console;
  try {
    return (
      <>
        <li className={`${tClass} cursor-pointer`}>
          <img src={children} alt={altText} />
        </li>
      </>
    );
  } catch (err) {
    errorLog("Error in navActionBtn:", err);
    return null;
  }
}

export default NavActionBtn;
