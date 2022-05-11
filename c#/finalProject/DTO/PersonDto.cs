using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DTO
{
   public  class PersonDto
    {
        public int id { get; set; }
        public string username { get; set; }
        public Nullable<int> tz { get; set; }
        public string adress { get; set; }
        public string mail { get; set; }
        public string phone { get; set; }
        public string inqure { get; set; }
        public Nullable<int> ok { get; set; } 
    }
}
