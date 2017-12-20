using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;

namespace DAL
{
    class ServiceDAL
    {
       public List<ServiceBO> GetService()
        {
            using (var context = new MarcassinEntities())
            {
                List<Service> listServices = context.Services.ToList();

                List<ServiceBO> listServicesBO = listServices.ToListServiceBO();

                return listServicesBO;
            }
        }
    }
}
