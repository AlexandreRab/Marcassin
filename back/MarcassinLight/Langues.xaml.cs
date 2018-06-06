using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using MarcassinLightBLL;
using MarcassinLightBO;

namespace MarcassinLight
{
    /// <summary>
    /// Logique d'interaction pour Langues.xaml
    /// </summary>
    public partial class Langues : Page
    {
        public List<Langue_BO> listLangues;
        public Langues()
        {
            InitializeComponent();
            listLangues = Appel_List.GetLangues();
            list.ItemsSource = listLangues;
        }

        private void Creation_Click(object sender, RoutedEventArgs e)
        {
            var lang = new Langue_BO
            {
                Intitule = C1.Text
            };
            Create.CreateLangue(lang);
            listLangues = Appel_List.GetLangues();
            list.ItemsSource = listLangues;
        }
    }
}
