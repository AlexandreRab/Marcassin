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
            List<LangueBO> LLBO = new List<LangueBO>();
            foreach (Langue lan in list)
            {
                var bo = new LangueBO();
                bo.id_Langue = lan.id_Langue;
                bo.Langue_intitule = lan.Langue_intitule;
                bo.Par_Defaut = lan.Par_Defaut;

                LLBO.Add(bo);
            }
            return LLBO;
        }
    }
}
