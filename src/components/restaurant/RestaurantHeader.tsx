import { cn } from "../../utils";

interface RestaurantHeaderProps {
  title: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
}

const RestaurantHeader = ({ title, subheading, description, className }: RestaurantHeaderProps) => {
  return (
    <div className={cn("pb-10 xl:pb-[60px] 3xl:pb-[80px] text-center", className)}>
      {
        subheading &&
        <h3 className="restaurant-section-subheading">{subheading}</h3>
      }
      <h2 className="restaurant-section-heading">{title}</h2>
      {
        description &&
        <p className="restaurant-section-description">{description}</p>
      }
    </div>
  );
};

export default RestaurantHeader;