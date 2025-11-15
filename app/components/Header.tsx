import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";


const Header = () => {
  return (
    <Card>
      <CardContent className="flex justify-between items-center p-2 flex-row">

        <Image
          src="/logo2.png"
          alt="Logo MVP Barber"
          width={120}
          height={40}
          className="object-contain"
        />

        <Button variant={"outline"} size={"icon"}>
          <MenuIcon size={18} />
        </Button>

      </CardContent>
    </Card>
  );
}

export default Header;