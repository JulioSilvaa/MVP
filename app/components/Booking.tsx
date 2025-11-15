import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

const Booking = () => {
  return (
    <Card>
      <CardContent className="p-5 py-0 flex justify-between">
        <div className="flex flex-col gap-2 py-5">
          <Badge className="text-white bg-primary w-fit">Confirmado</Badge>
          <h2 className="font-bold">Corte de Cabelo</h2>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={'https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png'} />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <h3 className="text-sm">
              Dom Luca BarberShop
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-l border-solid border-primary p-4">
          <p className="text-sm">Novembro</p>
          <p className="text-2xl">15</p>
          <p className="text-sm">12:20</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default Booking
