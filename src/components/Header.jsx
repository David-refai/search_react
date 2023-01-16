import SearchBar from "./SearchBar";

const Header = ({onChange}) => {
    return (  
        <header className="header">
            <div className="header__logo">
                <img src="https://www.freepnglogos.com/uploads/airbnb-logo-png/airbnb-logo-vector-png-clipart-1.png" alt="airbnb logo" />
            </div>
            <SearchBar onChange={onChange} />
            </header>
     

    );
}
 
export default Header;