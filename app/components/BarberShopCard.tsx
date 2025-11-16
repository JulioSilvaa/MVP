import { Card, CardContent } from './ui/card';
import { BarberShop } from '../../prisma/prisma-client-js/client';
import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { StarIcon } from 'lucide-react';

interface BarberShopCardProps {
  barberShop: BarberShop;
}

const BarberShopCard = ({ barberShop }: BarberShopCardProps) => {

  return (
    <Card className='min-w-[167px] max-w-[167px] rounded-2xl'>


      <CardContent className='p-0'>

        <div className='relative w-full h-32 rounded-t-2xl overflow-hidden'>
          <Badge variant="outline" className='absolute m-3 bg-black text-white px-2 py-1 rounded-lg'>
            <StarIcon size={12} className='inline-block w-4 h-4 mr-1 mb-0.5 text-yellow-400 fill-amber-300' />
            <span className='text-xs'>5,0</span>
          </Badge>
          <div className="px-1">
            <Image
              src={barberShop.imgUrl || 'https://utfs.io/wp-content/uploads/2023/06/barbearia.jpg'}
              alt={barberShop.name}
              height={0}
              width={0}
              sizes="100vw"
              className='h-[159px] w-full object-cover rounded-2xl'
            />
          </div>
        </div>
        <div className="px-3 pb-3">
          <h2 className='font-bold mt-2 text-ellipsis whitespace-nowrap text-nowrap'>{barberShop.name}</h2>
          <p className='text-sm text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap text-nowrap'>{barberShop.address}</p>
          <Button className='w-full mt-3'>Agendar</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberShopCard
