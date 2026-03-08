import logoImage from "figma:asset/5760bc7d9857fd2c6ea5c69a99d1620eac9b7884.png";

export function Logo() {
  return (
    <div className="flex items-center justify-center py-4">
      <img 
        src={logoImage} 
        alt="Łebski Lokals" 
        className="h-8 w-auto"
      />
    </div>
  );
}