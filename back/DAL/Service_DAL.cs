using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;

namespace DAL
{
    class Service_DAL
    {
       public List<Service_BO> GetService()
        {
            using (var context = new MarcassinEntities())
            {
                List<Service> listServices = context.Services.ToList();

                List<Service_BO> listServicesBO = listServices.ToListServiceBO();

                return listServicesBO;
            }
        }
    }
}
