using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    public class Utilisateur_BO
    {
        public int id_Utilisateur { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Mail { get; set; }
        public int PhoneNumber { get; set; }
        public string Adresse { get; set; }
        public string Ville { get; set; }
        public string Region { get; set; }
        public string Pays { get; set; }
        public bool Sexe { get; set; }
        public bool Est_intervenant { get; set; }
        public Guid GUID { get; set; }
        //public List<Competence_BO> Competences { get; set; }

    }
}
