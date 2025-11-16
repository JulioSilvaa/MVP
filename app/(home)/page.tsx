import { ptBR } from "date-fns/locale";
import Header from "../components/Header";
import { format } from "date-fns"
import Search from '../components/Search';
import Booking from "../components/Booking";
import BarberShopCard from "../components/BarberShopCard";
import { db } from "../lib/prisma";


export default async function Home() {

  const barberShops = await db.barberShop.findMany({});

  return (
    <div className="min-h-screen flex flex-col gap-4 p-4 ">
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Miguel!</h2>
        <p className="text-sm">{format(new Date(), "EEEE',' dd' de 'MMMM' ", {
          locale: ptBR,
        })}</p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold ">Agendamentos</h2>
        <Booking />
      </div>

      <div className="mt-6">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold ">Recomendados</h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barberShops.map((barberShop) => (
            <BarberShopCard key={barberShop.id} barberShop={barberShop} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold ">Populares</h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barberShops.map((barberShop) => (
            <BarberShopCard key={barberShop.id} barberShop={barberShop} />
          ))}
        </div>
      </div>

    </div>
  );
}
