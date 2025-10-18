import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center animate-fade-in">
      <Button
        variant={selectedCategory === "All" ? "default" : "outline"}
        onClick={() => onSelectCategory("All")}
        className="transition-all"
      >
        All Products
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onSelectCategory(category)}
          className="transition-all"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
