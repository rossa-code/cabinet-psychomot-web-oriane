import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Brain, PersonStanding, CheckCircle2, Menu, X } from 'lucide-react';
import { ParcoursExpandableCard } from './components/ParcoursExpandableCard';
import {
  autresTroublesFormationCount,
  autresTroublesPsychomoteursItems,
  diplomeEtatFormationInitialeItems,
  diplomeEtatPointCount,
  tndFormationCount,
  tndFormationSubcategories,
} from './data/formations';
import proPortrait from './images/pro-image.jpeg';

function SectionDivider() {
  return (
    <div className="flex justify-center py-6 px-4" aria-hidden="true">
      <div className="flex w-full max-w-lg items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-terracotta-accent/40 to-terracotta-accent/60" />
        <span className="font-script text-2xl text-terracotta-accent/90 leading-none">—</span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-terracotta-accent/40 to-terracotta-accent/60" />
      </div>
    </div>
  );
}

const btnPrimary =
  'inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-3xl text-cream bg-terracotta shadow-soft transition-all hover:bg-terracotta/90 hover:shadow-soft-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta';

const btnSecondary =
  'inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-3xl border-2 border-terracotta/25 text-terracotta bg-cream/90 hover:bg-white shadow-soft transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta/40';

const navLink =
  'text-terracotta/75 hover:text-terracotta transition-colors text-[15px]';

const parcoursToggleButtonClass =
  'inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-2xl border border-cream/35 bg-cream/15 px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream/60';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDiplomeEtatOpen, setIsDiplomeEtatOpen] = useState(false);
  const [isTndFormationsOpen, setIsTndFormationsOpen] = useState(false);
  const [isAutresTroublesOpen, setIsAutresTroublesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-terracotta font-sans selection:bg-terracotta/15 selection:text-terracotta-dark">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-terracotta/10 bg-cream/90 shadow-soft backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-[4.25rem]">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center text-cream font-semibold text-sm shadow-soft">
                OM
              </div>
              <span className="font-serif text-xl md:text-2xl tracking-tight text-terracotta">
                Oriane Millet
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#presentation" className={navLink}>
                Présentation
              </a>
              <a href="#certifications" className={navLink}>
                Certifications
              </a>
              <a href="#motifs" className={navLink}>
                Consultations
              </a>
              <a href="#tarifs" className={navLink}>
                Tarifs
              </a>
              <a href="#contact" className={navLink}>
                Contact
              </a>
              <a href="#contact" className={`${btnPrimary} !px-5 !py-2.5 text-sm`}>
                Prendre RDV
              </a>
            </div>
            <div className="md:hidden flex items-center gap-3">
              <a href="#contact" className={`${btnPrimary} !px-4 !py-2 text-sm`}>
                RDV
              </a>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-terracotta/80 hover:text-terracotta p-2 rounded-2xl hover:bg-terracotta/5 transition-colors"
                aria-label="Menu principal"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute w-full left-0 border-b border-terracotta/10 bg-cream/98 px-4 pt-2 pb-5 space-y-1 shadow-soft-lg backdrop-blur-md">
            <a
              href="#presentation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-terracotta/85 hover:text-terracotta hover:bg-terracotta/5 rounded-2xl transition-colors"
            >
              Présentation
            </a>
            <a
              href="#certifications"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-terracotta/85 hover:text-terracotta hover:bg-terracotta/5 rounded-2xl transition-colors"
            >
              Certifications
            </a>
            <a
              href="#motifs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-terracotta/85 hover:text-terracotta hover:bg-terracotta/5 rounded-2xl transition-colors"
            >
              Consultations
            </a>
            <a
              href="#tarifs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-terracotta/85 hover:text-terracotta hover:bg-terracotta/5 rounded-2xl transition-colors"
            >
              Tarifs
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-terracotta hover:bg-terracotta/10 rounded-2xl transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-16 pb-28 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cream via-terracotta-surface to-terracotta-accent/10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-script text-2xl md:text-3xl text-terracotta-accent/95 mb-3 md:mb-4">
            Bienvenue
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-terracotta mb-5 md:mb-6 leading-tight">
            Oriane MILLET
          </h1>
          <p className="mt-2 text-lg md:text-xl text-terracotta/80 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-bold">
          Psychomotricienne D.E.<br />Diplôme Universitaire - Troubles du neurodéveloppement
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className={btnPrimary}>
              Prendre rendez-vous
            </a>
            <a href="#presentation" className={btnSecondary}>
              Découvrir mon approche
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Présentation */}
      <section id="presentation" className="py-16 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-terracotta/10 shadow-soft-lg ring-1 ring-terracotta/10">
                <img
                  src={proPortrait}
                  alt="Portrait de la psychomotricienne"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-6 bg-terracotta-light/95 p-6 rounded-3xl border border-cream/25 shadow-soft-lg hidden md:block max-w-[240px]">
                <p className="font-script text-2xl text-cream mb-1">Diplômée d&apos;État</p>
                <p className="text-cream/90 text-sm leading-snug">Institut Supérieur de Rééducation</p>
              </div>
            </div>
            <div>
              <p className="font-script text-2xl text-terracotta-accent/90 mb-2">À propos</p>
              <h2 className="text-3xl md:text-4xl font-serif text-terracotta mb-6">Qui suis-je ?</h2>
              <div className="space-y-4 text-terracotta/85 leading-relaxed">
                <p>
                  Psychomotricienne diplômée d&apos;État, je vous accueille dans mon cabinet, dans un cadre bienveillant et
                  sécurisant.
                </p>
                <p>
                  Je suis spécialisée dans la prise en charge des enfants et adolescents porteurs de troubles du
                  neurodéveloppement et des enfants présentant des troubles de l&apos;écriture.
                </p>
                <p>
                  Je m&apos;actualise continuellement sur les recommandations de bonnes pratiques de la HAS et me forme chaque
                  année afin de proposer aux patients et à leurs familles les accompagnements les plus adaptés possibles.
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {[

                  'Enfants et adolescents',
                  'Séances individuelles ou groupales',
                  'Guidance parentale',
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-terracotta/90">
                    <CheckCircle2 className="w-5 h-5 text-terracotta-accent mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-terracotta/10">
            <h3 className="text-2xl md:text-3xl font-serif text-terracotta mb-6">Qu&apos;est-ce que la psychomotricité ?</h3>
            <div className="max-w-3xl space-y-4 text-terracotta/85 leading-relaxed">
              <p>
                Le psychomotricien travaille sur prescription médicale. Il est le spécialiste de la psychomotricité, de son
                développement chez l&apos;enfant et de la régulation de son fonctionnement chez l&apos;adulte et la personne âgée.
              </p>
              <p>
                Les séances peuvent être réalisées de manière individuelle ou groupale, pour développer et rééduquer les
                fonctions motrices, cognitives et sensorielles. Le psychomotricien a pour but de permettre une meilleure
                adaptation de la personne dans son quotidien et ses interactions avec l&apos;environnement dans lequel elle
                évolue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Certifications */}
      <section id="certifications" className="py-16 md:py-20 bg-terracotta-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-terracotta mb-4">Formations et certifications</h2>
            <p className="text-terracotta/80">
            Depuis l’obtention de mon diplôme d’État, j’approfondis régulièrement mes compétences par une formation continue, afin de vous garantir un accompagnement spécialisé et conforme aux dernières recommandations.
            </p>
          </div>

          <div className="space-y-12 md:space-y-14">
            <ParcoursExpandableCard
              title="Diplôme d’État — formation initiale"
              subtitle={`${diplomeEtatPointCount} point${diplomeEtatPointCount > 1 ? 's' : ''} sur ce parcours`}
              open={isDiplomeEtatOpen}
              onToggle={() => setIsDiplomeEtatOpen((o) => !o)}
              toggleId="diplome-etat-toggle"
              detailId="diplome-etat-detail"
              toggleButtonClassName={parcoursToggleButtonClass}
            >
              <div className="rounded-2xl border border-cream/20 bg-cream/10 p-5 md:p-6">
                <div className="space-y-3 text-sm text-cream/90 leading-relaxed">
                  {diplomeEtatFormationInitialeItems.map((item, j) => (
                    <p key={j}>{item}</p>
                  ))}
                </div>
              </div>
            </ParcoursExpandableCard>

            <ParcoursExpandableCard
              title="Troubles du neurodéveloppement (TND)"
              subtitle={`${tndFormationCount} formation${tndFormationCount > 1 ? 's' : ''} suivie${tndFormationCount > 1 ? 's' : ''} dans ce domaine`}
              open={isTndFormationsOpen}
              onToggle={() => setIsTndFormationsOpen((o) => !o)}
              toggleId="tnd-formations-toggle"
              detailId="tnd-formations-detail"
              toggleButtonClassName={parcoursToggleButtonClass}
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                {tndFormationSubcategories.map((cat, i) => (
                  <div key={i} className="rounded-2xl border border-cream/20 bg-cream/10 p-5 md:p-6">
                    <h4 className="text-base font-serif text-cream mb-3 leading-snug md:text-lg">{cat.title}</h4>
                    <ul className="list-disc list-outside space-y-2 pl-4 text-sm text-cream/90 leading-relaxed marker:text-cream">
                      {cat.items.map((item, j) => (
                        <li key={j} className="pl-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ParcoursExpandableCard>

            <ParcoursExpandableCard
              title="Autres troubles psychomoteurs"
              subtitle={`${autresTroublesFormationCount} formation${autresTroublesFormationCount > 1 ? 's' : ''} suivie${autresTroublesFormationCount > 1 ? 's' : ''} dans ce domaine`}
              open={isAutresTroublesOpen}
              onToggle={() => setIsAutresTroublesOpen((o) => !o)}
              toggleId="autres-troubles-toggle"
              detailId="autres-troubles-detail"
              toggleButtonClassName={parcoursToggleButtonClass}
            >
              <div className="rounded-2xl border border-cream/20 bg-cream/10 p-5 md:p-6">
                <ul className="list-disc list-outside space-y-2.5 pl-4 text-sm text-cream/90 leading-relaxed marker:text-cream">
                  {autresTroublesPsychomoteursItems.map((item, j) => (
                    <li key={j} className="pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ParcoursExpandableCard>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Motifs */}
      <section id="motifs" className="py-16 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-terracotta mb-4">Motifs de consultation</h2>
            <p className="text-terracotta/80">
              Voici les principaux motifs pour lesquels vous pouvez consulter, notamment pour les enfants et adolescents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-terracotta-light p-8 md:p-9 rounded-3xl shadow-soft border border-cream/15 hover:shadow-soft-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6" aria-hidden>
                <div className="w-12 h-12 bg-cream/20 rounded-2xl flex items-center justify-center text-cream">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-cream/20 rounded-2xl flex items-center justify-center text-cream">
                  <PersonStanding className="w-6 h-6" />
                </div>
              </div>
              <ul className="space-y-2 text-cream/90 text-sm leading-relaxed">
                <li>• Retard de développement moteur</li>
                <li>• Maladresse, difficultés motrices</li>
                <li>• Agitation</li>
                <li>• Difficultés de concentration</li>
                <li>• Gestion des émotions</li>
                <li>• Difficultés relationnelles, dans les habiletés sociales</li>
                <li>• Difficultés sensorielles</li>
                
              </ul>
            </div>

            <div className="bg-terracotta-light p-8 md:p-9 rounded-3xl shadow-soft border border-cream/15 hover:shadow-soft-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6" aria-hidden>
                <div className="w-12 h-12 bg-cream/20 rounded-2xl flex items-center justify-center text-cream">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-cream/20 rounded-2xl flex items-center justify-center text-cream">
                  <PersonStanding className="w-6 h-6" />
                </div>
              </div>
              <ul className="space-y-2 text-cream/90 text-sm leading-relaxed">
                <li>• Difficultés d&apos;écriture</li>
                <li>• Difficultés de repérage dans le temps et l&apos;espace</li>
                <li>• Difficultés dans les apprentissages</li>
                <li>• Troubles du neurodéveloppement (TND) : TDAH, TDI, TDC, autisme, Troubles DYS, etc.</li>
                <li>• Difficultés d&apos;organisation</li>
                <li>• Et autres motifs de consultation </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Tarifs */}
      <section id="tarifs" className="py-16 md:py-20 bg-terracotta-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-serif text-terracotta mb-4">Tarifs</h2>
            <p className="text-terracotta/80 max-w-2xl mx-auto">
              Les actes de psychomotricité ne sont pas remboursés par la Sécurité Sociale. Cependant des aides exceptionnelles peuvent être accordées (Sécurité Sociale, PCO, Mutuelles, MDPH, etc.).
            </p>
          </div>

          <div className="bg-cream rounded-3xl p-8 md:p-12 border border-terracotta/20 shadow-soft-lg">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-terracotta/15">
                <div>
                  <h4 className="text-lg font-serif text-terracotta">Bilan psychomoteur</h4>
                  <p className="text-sm text-terracotta/70 mt-1">
                    Évaluation complète sur prescription médicale : entretiens, passation des outils, compte-rendu et
                    restitution.
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 text-2xl font-serif text-terracotta-accent whitespace-nowrap shrink-0 self-start sm:self-center">
                  200&nbsp;€
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-terracotta/15">
                <div>
                  <h4 className="text-lg font-serif text-terracotta">Séance de 30 minutes</h4>
                  <p className="text-sm text-terracotta/70 mt-1">Séance individuelle au cabinet.</p>
                </div>
                <div className="mt-4 sm:mt-0 text-2xl font-serif text-terracotta-accent whitespace-nowrap shrink-0 self-start sm:self-center">
                  35&nbsp;€
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h4 className="text-lg font-serif text-terracotta">Séance de 45 minutes</h4>
                  <p className="text-sm text-terracotta/70 mt-1">Séance individuelle au cabinet.</p>
                </div>
                <div className="mt-4 sm:mt-0 text-2xl font-serif text-terracotta-accent whitespace-nowrap shrink-0 self-start sm:self-center">
                  50&nbsp;€
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 bg-terracotta-dark text-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16">
            <div>
              <p className="font-script text-2xl text-terracotta-accent/90 mb-2">Contact</p>
              <h2 className="text-3xl md:text-4xl font-serif text-cream mb-6 md:mb-8">Prendre rendez-vous</h2>
              <p className="text-cream/85 mb-10 leading-relaxed">
                Pour toute question ou pour prendre rendez-vous, n&apos;hésitez pas à me contacter. Je vous répondrai dans les plus brefs délais.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-terracotta-accent/90 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-cream">Adresse du cabinet</h4>
                    <p className="text-cream/80 mt-1">
                      524, avenue de la Pompignane,
                      <br />
                      34000 Montpellier
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-terracotta-accent/90 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-cream">Téléphone</h4>
                    <p className="text-cream/80 mt-1">06 70 51 69 98</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-terracotta-accent/90 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-cream">Email</h4>
                    <p className="text-cream/80 mt-1">oriane.millet@psychomot.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-terracotta-accent/90 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-cream">Horaires</h4>
                    <p className="text-cream/80 mt-1">
                      Lundi - Jeudi : 10h00 - 19h00
                      
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="mailto:oriane.millet@psychomot.com"
                  className={`${btnPrimary} w-full justify-center sm:w-auto`}
                >
                  Contacter par email
                </a>
                <a
                  href="tel:+33670516998"
                  className="inline-flex w-full items-center justify-center rounded-3xl border-2 border-cream/40 px-6 py-3.5 text-base font-medium text-cream transition-all hover:bg-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream/50 sm:w-auto"
                >
                  Appeler le 06 70 51 69 98
                </a>
              </div>
            </div>

            <div className="h-[380px] md:h-[400px] bg-terracotta rounded-3xl overflow-hidden relative border border-cream/15 shadow-soft-lg flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92456.84073305609!2d3.80705915!3d43.61007345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af0725dd9db1%3A0xad8756742894e802!2sMontpellier!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Carte du cabinet à Montpellier"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-terracotta-dark py-10 text-center border-t border-cream/10 text-cream/55 text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Oriane Millet - Psychomotricienne D.E. Tous droits réservés.</p>
          <div className="mt-3 space-x-6">
            <a href="#" className="hover:text-terracotta-accent/90 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-terracotta-accent/90 transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
