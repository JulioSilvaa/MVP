import { ptBR } from "date-fns/locale";
import Header from "../components/Header";
import { format } from "date-fns"
import Search from '../components/Search';
import Booking from "../components/Booking";

export default function Home() {
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
    </div>
  );
}
