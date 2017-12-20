using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;

namespace DAL
{
    public static class Extension
    {
        public static List<LangueBO> ToListLangueBO(this List<Langue> list)
        {
            if(list == null)
            {
                return null;
            }
            List<LangueBO> listLanguesBO = new List<LangueBO>();
            foreach (Langue lan in list)
            {
                var bo = new LangueBO();
                bo.Id_Langue = lan.id_Langue;
                bo.Langue_intitule = lan.Langue_intitule;
                bo.Par_Defaut = lan.Par_Defaut;

                listLanguesBO.Add(bo);
            }
            return listLanguesBO;
        }

        public static List<ServiceBO> ToListServiceBO(this List<Service> list)
        {
            if(list == null)
            {
                return null;
            }
            List<ServiceBO> listServicesBO = new List<ServiceBO>();
            foreach (Service  ser in list)
            {
                var bo = new ServiceBO();
                bo.Id_Service = ser.id_Service;
                bo.Nom = ser.Nom;
                bo.Id_chef = ser.id_chef;
                bo.GUID = ser.GUID;

                listServicesBO.Add(bo);
            }
            return listServicesBO;
        }
    }
}
