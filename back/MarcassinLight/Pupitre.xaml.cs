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

namespace MarcassinLight
{
    /// <summary>
    /// Logique d'interaction pour Pupitre.xaml
    /// </summary>
    public partial class Pupitre : Page
    {
        public Pupitre()
        {
            InitializeComponent();
        }

        private void Badges_Click(object sender, RoutedEventArgs e)
        {
            this.NavigationService.Navigate(new Uri("Badges.xaml", UriKind.Relative));
        }

        private void Langues_Click(object sender, RoutedEventArgs e)
        {
            this.NavigationService.Navigate(new Uri("Langues.xaml", UriKind.Relative));
        }

        private void Badges_trad_Click(object sender, RoutedEventArgs e)
        {

        }

        private void Compétences_trad_Click(object sender, RoutedEventArgs e)
        {

        }

        private void Categories_trad_Click(object sender, RoutedEventArgs e)
        {

        }

        private void Compétences_Click(object sender, RoutedEventArgs e)
        {
            this.NavigationService.Navigate(new Uri("Competences.xaml", UriKind.Relative));
        }

        private void Catégories_Click(object sender, RoutedEventArgs e)
        {

        }
    }
}
