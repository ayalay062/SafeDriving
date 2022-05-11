using DAL;
using System.Collections.Generic;
using System.Linq;
using DTO;
using System;

namespace BL
{
   public class TravelLogic
    {
        public static List<TravelsDto> getByTz(int id)
        {
            SafeDrivingEntities sd = new SafeDrivingEntities();
            
            List<travels> travels = sd.travels.Where(x => x.id_offer == id|| x.id_request == id).ToList();
            List<TravelsDto> travels1 = new List<TravelsDto>();
            for (int i = 0; i < travels.Count; i++)
            {
                travels1.Add(Convertions.travelsConvertion.travelToDto(travels[i]));
            }

            return travels1;
        }

        public static TravelsDto getById(int id)
        {
            SafeDrivingEntities sd = new SafeDrivingEntities();
            TravelsDto travel = Convertions.travelsConvertion.travelToDto(sd.travels.FirstOrDefault(x => x.id == id));
            return travel;
        }


    }
}
