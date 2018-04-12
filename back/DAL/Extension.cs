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
                var bo = new Langue_BO();
                bo.id_Langue = lan.id_Langue;
                bo.Langue_intitule = lan.Langue_intitule;
                bo.Par_Defaut = lan.Par_Defaut;

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
                var bo = new Service_BO();
                bo.id_Service = ser.id_Service;
                bo.Nom = ser.Nom;
                bo.id_chef = ser.id_chef;
                bo.GUID = ser.GUID;

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
                var bo = new Badge_BO();
                bo.id_Badge = bad.id_Badge;
                bo.Image = bad.images;
                //bo.Intitule = bad.nom;

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
                var bo = new Utilisateur_BO();
                bo.id_Utilisateur = uti.id_Utilisateur;
                bo.Nom = uti.Nom;
                bo.Prenom = uti.Prenom;
                bo.Mail = uti.Mail;
                bo.Numero_Telephone = uti.Numero_Telephone;
                bo.Adresse = uti.Adresse;
                bo.Ville = uti.Ville;
                bo.Region = uti.Region;
                bo.Pays = uti.Pays;
                bo.Sexe = uti.Sexe;
                bo.Est_intervenant = uti.Est_intervenant;
                bo.GUID = uti.GUID;
                //bo.Linkedin = uti.Linkedin;

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
                var bo = new Personnel_BO();
                bo.id_Utilisateur = pers.id_Utilisateur;
                bo.Date_deb_contrat = pers.Date_deb_contrat;
                bo.Date_fin_contrat = pers.Date_fin_contrat;
                bo.Est_admin = pers.Est_admin;
            }
            return listPersonnelBO;
        }
    }
}
