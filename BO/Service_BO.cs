using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    public class Service_BO
    {
        public int Id_Service { get; set; }
        public string Nom { get; set; }
        public int Id_chef { get; set; }
        public Guid GUID { get; set; }
    }
}
