import "../index.css"
const Title = () => {
    return(
      <a href="/">
      <img 
          className="logo"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnFozhTr0xgxy81TpJp1Ne99d50TdH9cJNjA&usqp=CAU" />
          </a>
          )
}
export default Title;

export const Header = () => {   //functional component returns jsx
  return (
    
    <div className="header">   
    <Title/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
