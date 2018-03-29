    using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    public class LangueBadge_BO
    {
        public List<Langue_BO> Langues { get; set; }
        public List<Badge_BO> Badges { get; set; }
        public string Traduction_Badge { get; set; }

    }
}
