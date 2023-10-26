const Footer = ({ itemLen }) => {
  return (
    <footer>
      <p>
        {itemLen} {itemLen > 1 ? "items" : "item"} in List
      </p>
    </footer>
  );
};

export default Footer;
