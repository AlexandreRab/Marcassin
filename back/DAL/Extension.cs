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
        public static List<Langue_BO> ToListLangueBO(this List<Langue> list)
        {
            if(list == null)
            {
                return null;
            }
            List<Langue_BO> listLanguesBO = new List<Langue_BO>();
            foreach (Langue lan in list)
            {
                var bo = new Langue_BO
                {
                    id_Langue = lan.id_Langue,
                    Langue_intitule = lan.Langue_intitule,
                    Par_Defaut = lan.Par_Defaut
                };

                listLanguesBO.Add(bo);
            }
            return listLanguesBO;
        }

        public static List<Service_BO> ToListServiceBO(this List<Service> list)
        {
            if(list == null)
            {
                return null;
            }
            List<Service_BO> listServicesBO = new List<Service_BO>();
            foreach (Service  ser in list)
            {
                var bo = new Service_BO
                {
                    id_Service = ser.id_Service,
                    Nom = ser.Nom,
                    id_chef = ser.id_chef,
                    GUID = ser.GUID
                };

                listServicesBO.Add(bo);
            }
            return listServicesBO;
        }

        public static List<Badge_BO> ToListBadgeBO(this List<Badge> list)
        {
            if (list == null)
            {
                return null;
            }
            List<Badge_BO> listBadgeBO = new List<Badge_BO>();
            foreach (Badge bad in list)
            {
                var bo = new Badge_BO
                {
                    id_Badge = bad.id_Badge,
                    Image = bad.images,
                    Intitule = bad.nom
            };
                

                listBadgeBO.Add(bo);
            }
            return listBadgeBO;
        }

        public static List<Utilisateur_BO> ToListUtilisateurBO(this List<Utilisateur> list)
        {
            if (list == null)
            {
                return null;
            }

            List<Utilisateur_BO> listUtilisateurBO = new List<Utilisateur_BO>();
            foreach(Utilisateur uti in list)
            {
                var bo = new Utilisateur_BO
                {
                    id_Utilisateur = uti.id_Utilisateur,
                    Nom = uti.Nom,
                    Prenom = uti.Prenom,
                    Mail = uti.Mail,
                    Numero_Telephone = uti.Numero_Telephone,
                    Adresse = uti.Adresse,
                    Ville = uti.Ville,
                    Region = uti.Region,
                    Pays = uti.Pays,
                    Sexe = uti.Sexe,
                    Est_intervenant = uti.Est_intervenant,
                    GUID = uti.GUID,
                    Linkedin = uti.Linkedin
                };
               

                listUtilisateurBO.Add(bo);
            }
            return listUtilisateurBO;
        }
        public static List<Personnel_BO> ToListPersonnelBO (this List<Personnel> list)
        {
            if (list == null)
            {
                return null;
            }
            List<Personnel_BO> listPersonnelBO = new List<Personnel_BO>();
            foreach (Personnel pers in list)
            {
                var bo = new Personnel_BO
                {
                    id_Utilisateur = pers.id_Utilisateur,
                    Date_deb_contrat = pers.Date_deb_contrat,
                    Date_fin_contrat = pers.Date_fin_contrat,
                    Est_admin = pers.Est_admin
                };
            }
            return listPersonnelBO;
        }
    }
}
