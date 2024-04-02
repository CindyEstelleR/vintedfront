import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div>
        <img className="logo" src="./src/img/logo.jpg" alt="" />
      </div>
      <div class="container">
        <input
          type="text"
          class="search-input"
          placeholder="Recherche des articles"
        />

        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        <div className="search">
          <span>Triez par prix :</span>
          <button className="buttontotal">
            <FontAwesomeIcon icon="fa-solid fa-toggle-on" />
            <button className="circle">
              <FontAwesomeIcon icon={faArrowDownLong} />
            </button>
          </button>
          <div className="price">
            <span>Prix entre : </span>
            <button className="fork">
              <button className="buttonFork1">
                <span>10€</span>
                <span>100€</span>
              </button>
              <button className="buttonFork2"></button>
            </button>
          </div>
        </div>
      </div>
      <div class="signlog">
        <div className="signup">S'inscrire</div>
        <div className="login">Se connecter</div>
      </div>
      <div>
        <div className="sell">Vends tes articles</div>
      </div>
    </header>
  );
};
export default Header;
