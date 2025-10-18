import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import productsData from "@/data/products.json";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = Array.from(
    new Set(productsData.products.map((product) => product.category))
  );

  const filteredProducts =
    selectedCategory === "All"
      ? productsData.products
      : productsData.products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 px-4 mb-12">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Discover Your Signature Scent
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of luxury perfumes and premium beauty products
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 mb-12">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              category={product.category}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
