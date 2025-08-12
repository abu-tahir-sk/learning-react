import Feature from "../Feature/Feature";

const PriceOp = ({option}) => {
      const {name, price, features} = option;
      return (
            <div className="bg-blue-600 flex flex-col rounded-md p-4 text-white">
                 <h2 className="text-center">
                  <span className="text-7xl font-extrabold">{price}</span>
                  <span className="text-2xl">/mon</span>
                  </h2> 
                  <h4 className="text-3xl text-center my-8">{name}</h4>
                 <div className="pl-6 py-6 flex-grow">
                   {
                        features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                  }
                 </div>
                  <button className="w-full bg-green-600 rounded-md py-2">Buy Now</button>
            </div>
      );
};

export default PriceOp;