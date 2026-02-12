const Header = () => {
  const text = "Hello Asilbek";

  const getText = (text: string) => {
    return (
      <div>
        <h1>Hello {text}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    )
  }

  return getText("Asilbek");
}

export default Header;
