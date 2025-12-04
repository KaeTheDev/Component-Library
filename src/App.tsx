import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";

function App() {
  const user = {
    id: "1",
    name: "Shakira Reid-Thomas",
    email: "shakira@starvingartistddllc.com",
    role: "CEO",
    avatarUrl: "https://avatar.iran.liara.run/public",
  };

  const product = {
    id: "1",
    name: "Diamond Ruby Green Necklace",
    price: 2599.99,
    description:
      "Beautiful Diamond Ruby Necklace. Perfect gift for any romantic occassion.",
    imageUrl: "/images/DiamondRubyNecklace.png",
    inStock: true,
  };

  return (
    <>
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>

      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Editing user ${userId}`)}
      ></UserProfileCard>

      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={(productId) => alert(`Added product ${productId}: ${product.name} to cart`)}
      >
      </ProductDisplay>
    </>
  );
}

export default App;
