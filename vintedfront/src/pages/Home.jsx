import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );

        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <div className="headermain">
        <img src="./src/img/img1.jpg" alt="" />
        <div className="ready">
          <span>Prêt à faire du tri dans vos placard</span>
        </div>
      </div>
      {data.offers.map((offer) => {
        return (
          //   <Link key={offer._id} to={`/offers/${offer._id}`}>
          <article>
            <div>
              {/* <img
                src={offer.owner.account.avatar.secure_url}
                alt={offer.owner.account.username}
              /> */}
              <span>{offer.owner.account.username}</span>
            </div>
            {/* <img src={offer.product_image.secure_url} alt="" /> */}
            <p>{offer.product_price}euro</p>
            <p>{offer.product_details[1].TAILLE}</p>
            <p>{offer.product_details[0].MARQUE}</p>
          </article>
          //   </Link>
        );
      })}
    </main>
  );
};

export default Home;
