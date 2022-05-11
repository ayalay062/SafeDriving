using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;

namespace BL.Convertions
{
    class travelsConvertion
    {
       

        public static travels DtoTotravel(TravelsDto t1)
        {
            travels travel = new travels();
            travel.id = t1.id;
            travel.id_offer = t1.id_offer;
            travel.id_request = t1.id_request;
            travel.resourse = t1.resourse;
            travel.destination = t1.destination;
            travel.seats = t1.seats;
            travel.date_time = t1.date_time;
            travel.price = t1.price;
         
            return travel;

    }
        public static TravelsDto travelToDto(travels t1)
        {
            TravelsDto travel = new TravelsDto();
            travel.id = t1.id;
            travel.id_offer = t1.id_offer;
            travel.id_request = t1.id_request;
            travel.resourse = t1.resourse;
            travel.destination = t1.destination;
            travel.seats = t1.seats;
            travel.date_time = t1.date_time;
            travel.price = t1.price;
            return travel;
        }
    }
}
