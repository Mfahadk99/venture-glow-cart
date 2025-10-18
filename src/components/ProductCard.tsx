import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, description, category }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
    toast.success(`${name} added to cart!`);
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-card transition-all duration-300 animate-fade-in-up">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-full">
            {category}
          </span>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-1">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        <p className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          ${price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full group-hover:scale-105 transition-transform"
          size="lg"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
