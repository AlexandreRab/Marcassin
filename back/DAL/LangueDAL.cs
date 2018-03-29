using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;


namespace DAL
{
    class LangueDAL
    {
        public List<Langue_BO> GetLangue()
        {
            using (var context = new MarcassinEntities())
            {
                List<Langue> listLangues = context.Langues.ToList();

                List<Langue_BO> listLanguesBO = listLangues.ToListLangueBO();

                return listLanguesBO;
            }
        }
    }
}
