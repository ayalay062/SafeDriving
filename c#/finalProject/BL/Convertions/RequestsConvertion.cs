using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;

namespace BL.Convertions
{
    class RequestsConvertion
    {
       

        public static requests DtoToRequest(RequestsDto t1)
        {
            requests request = new requests();
            request.id = t1.id;
            request.tz = t1.tz;
            request.resourse = t1.resourse;
            request.destination = t1.destination;
            request.seats = t1.seats;
            request.date_time = t1.date_time;
            request.active = t1.active;
            return request;

        }
        public static RequestsDto RequestToDto(requests t1)
        {
            RequestsDto request = new RequestsDto();
            request.id = t1.id;
            request.tz = t1.tz;
            request.resourse = t1.resourse;
            request.destination = t1.destination;
            request.seats = t1.seats;
            request.date_time = t1.date_time;
            request.active = t1.active;
            return request;
        }
    }
}
