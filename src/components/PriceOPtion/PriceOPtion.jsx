import PriceOp from "../PriceOp/PriceOp";

const PriceOPtion = () => {

      const priceOptions = [
  { "id": 1, "name": "Basic Plan", "price": 29.99, "features": ["Access to gym equipment", "Locker facility", "1 personal training session/month"] },
  { "id": 2, "name": "Standard Plan", "price": 49.99, "features": ["Access to gym equipment", "Locker facility", "Group fitness classes", "3 personal training sessions/month"] },
  { "id": 3, "name": "Premium Plan", "price": 69.99, "features": ["Access to all gym areas", "Unlimited group classes", "5 personal training sessions/month", "Nutrition consultation"] }
]


      return (
            
            <div className="my-10">
                  <h2 className="text-5xl">Best Price in the town</h2>
                 <div className="grid lg:grid-cols-3 gap-6">
                   {
                        priceOptions.map(option => <PriceOp option={option}></PriceOp>)
                  }
                 </div>
            </div>
      );
};

export default PriceOPtion;