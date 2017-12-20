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
        public List<LangueBO> GetLangue()
        {
            using (var context = new MarcassinEntities())
            {
                List<Langue> listLangues = context.Langues.ToList();

                List<LangueBO> listLanguesBO = listLangues.ToListLangueBO();

                return listLanguesBO;
            }
        }
    }
}
