import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        tagline: "Vinyls, wines & vibrations",
        footer: {
            title: "Marci",
            tagline: "Italian-American Social Club",
            location: "Plaza St-Hubert, Montreal",
            djs: "DJ Sets: Fridays & Saturdays",
            serial: "No. MTL6600",
            follow: "Follow Us"
        },
        djSection: {
            title: "The Weekend Sound",
            headline: "Every weekend, Marci transforms.",
            body: "Our resident and guest DJs bring the room to life with carefully curated sets on a high-end sound system designed by ",
            instagram: "Visit our Instagram for more info!",
            vibe: "The light fades, the wine flows, and the music drifts in.",
            schedule: "Live DJs every Friday and Saturday — starting at 7 p.m."
        },
        toasts: {
            success: 'Reservation sent succesfully !',
            error_fields: 'Please correct the errors in the form.',
            error_message: 'An error occurred while sending the email. Please try again later.',
            error_checkbox: 'Please accept the terms.',
        },
        trademark: '© 2025 made by Marci.',
        callToAction:{
            description: 'A cozy Montreal spot serving comforting Italo-American-inspired dishes, great wines, and a nostalgic vibe. Proudly located on Plaza St-Hubert—easy to reach and open to everyone.',
            button_reserve: 'Reserve Now',
            button_group: 'Group Booking',
            button_dj: 'See DJs',
        },
        navigation: {
            home: 'Home',
            music: 'Music',
            reservation: 'Reservation',
            group: 'Group',
        },
        reservation: {
            title: 'Reservation',
            form: 'GROUP RESERVATIONS',
            contact: 'Contact Information',
            groupDetails: 'Group Details',
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Email',
            phone: 'Phone',
            group: 'Group Name',
            guests: 'Number of Guests',
            date: 'Reservation Date',
            event: "Event Type",
            selectEventType: "Select an event type",
            details: "Additional Details",
            remaining: 'characters remaining',
            submit: 'Submit',
            groupBookingInfoTitle: "Notice to Guests",
            groupBookingInfo: {
                roomPreviewTitle: "Private Room for Group Bookings",
                roomPreviewCaption: "Spacious and private – available for groups of 7 or more. Perfect for team outings, birthdays, and more.",
                duration: "Reservations are for 2 hours (or 2 hours and 15 minutes for groups of 4 or more).",
                seating: "Specific seating is not guaranteed — tables and bar seats are assigned based on group size and availability.",
                cancellation: "Need to cancel within 3 hours of your booking? Please call us at (438) 380-9199.",
                combiningTables: "We cannot combine tables to accommodate larger groups.",
                largeGroups: "For groups of at least 7 people , please email us — we have a cozy private room available ! ",
                duplicateBookings: "Duplicate bookings will be canceled.",
                glutenFree: "We offer some gluten-free options, but please note that our menu is small and limited.",
                outsideFood: "No outside food or drink is allowed — including cakes (we make our own delicious desserts!).",
                kitchenHours: "Our kitchen opens at 5:30 PM and last call is at 10:15 PM.",
                terrace: "We do not take reservations for the terrace.",
                closing: "Thank you — see you soon!",
                read: "I have read and I accept the terms."
            },
            contactFields:{
                firstName: 'First name',
                lastName: 'Last name',
                email: 'Email',
                phone: 'Phone'
            },
            error: {
                required: 'This field is required.',
                email: 'Enter a valid email address.',
                minimum : '7 people minimum.',
                maximum : '1000 characters allowed.'
            },
            eventTypes: {
                birthday: "Birthday",
                anniversary: "Anniversary",
                engagement: "Engagement",
                baby_shower: "Baby Shower",
                graduation: "Graduation",
                corporate: "Corporate Event",
                reunion: "Reunion",
                holiday: "Holiday Party",
                farewell: "Farewell Party",
                other: "Other"
            }
        }
    },
    fr: {
        tagline: "Vinyles, vins & vibrations",
        footer: {
            title: "Marci",
            tagline: "Club social italo-américain",
            location: "Plaza St-Hubert, Montréal",
            djs: "DJ sets : vendredi et samedi",
            serial: "No. MTL6600",
            follow: "Suivez-nous"
        },
        djSection: {
            title: "Le Son du Week-end",
            headline: "Chaque fin de semaine, Marci se transforme.",
            body: "Nos DJ résident·e·s et invité·e·s font vibrer la salle avec des sets soigneusement sélectionnés sur un système audio haut de gamme conçu par ",
            instagram: "Visitez notre instagram pour plus d'info!",
            vibe: "Le jour s'efface, le vin s'invite, et les platines dessinent la soirée.",
            schedule: "DJ sets tous les vendredis et samedis — à partir de 19h."
        },
        toasts: {
            success: 'Réservation envoyée avec succès !',
            error_fields: 'Veuillez corriger les erreurs dans le formulaire.',
            error_message: 'Erreur lors de l’envoi de la réservation. Veuillez réessayer plus tard.',
            error_checkbox: 'Veuillez accepter les conditions.',
        },
        trademark: '© 2025 fait par Marci.',
        callToAction:{
            description: 'Restaurant chaleureux de Montréal qui offre une cuisine réconfortante avec un penchant italo-américain, des vins de choix et une ambiance nostalgique. Fièrement situé sur la Plaza St-Hubert, facile d\'accès et accueillant pour tous.',
            button_reserve: 'Je réserve',
            button_group: 'Groupe',
            button_dj: 'Voir DJs',
        },
        navigation: {
            home: 'Accueil',
            music: 'Musique',
            reservation: 'Réservation',
            group: 'Groupe',
        },
        reservation: {
            title: 'Réservation',
            form: 'RÉSERVATIONS DE GROUPE',
            contact : 'Informations de contact',
            groupDetails : 'Détails du groupe',
            firstName: 'Prénom',
            lastName: 'Nom',
            email: 'Email',
            phone: 'Téléphone',
            group: 'Nom du groupe',
            guests: 'Nombre de personnes',
            date: 'Date de réservation',
            event: "Type d'événement",
            selectEventType: "Sélectionnez un type d'événement",
            details: "Détails supplémentaires",
            remaining: 'caractères restants',
            submit: 'Soumettre',
            groupBookingInfoTitle: "Veuillez Noter",
            groupBookingInfo: {
                roomPreviewTitle: "Salle privée pour les réservations de groupe",
                roomPreviewCaption: "Spacieuse et intime – disponible pour les groupes de 7 personnes ou plus. Parfaite pour les sorties d’équipe, les anniversaires, et plus encore.",
                duration: "Les réservations sont pour une durée de 2 heures (ou 2 h 15 pour les groupes de 4 personnes ou plus).",
                seating: "Nous ne pouvons pas garantir un emplacement spécifique — les tables et les places au bar sont attribuées selon la taille du groupe et la disponibilité.",
                cancellation: "Besoin d’annuler moins de 3 heures à l’avance? Veuillez nous appeler au (438) 380-9199.",
                combiningTables: "Nous ne pouvons pas combiner de tables pour accueillir de plus grands groupes.",
                largeGroups: "Pour les groupes d'au moins 7 personnes, veuillez nous écrire — nous avons une salle privée chaleureuse !",
                duplicateBookings: "Les réservations en double seront annulées.",
                glutenFree: "Nous offrons quelques options sans gluten, mais notre menu est petit et limité.",
                outsideFood: "Aucune nourriture ou boisson extérieure n’est permise — y compris les gâteaux (nos desserts maison sont délicieux!).",
                kitchenHours: "La cuisine ouvre à 17 h 30 et la dernière commande est à 22 h 15.",
                terrace: "Nous ne prenons pas de réservations pour la terrasse.",
                closing: "Merci — à très bientôt!",
                read: "J'ai lu et j'accepte les conditions."
            },
            eventTypes: {
                birthday: "Anniversaire",
                anniversary: "Anniversaire de mariage",
                engagement: "Fiançailles",
                baby_shower: "Fête prénatale",
                graduation: "Remise des diplômes",
                corporate: "Événement d'entreprise",
                reunion: "Réunion",
                holiday: "Fête de fin d'année",
                farewell: "Fête d'adieu",
                other: "Autre"
            },
            contactFields:{
                firstName: 'Prénom',
                lastName: 'Nom',
                email: 'Email',
                phone: 'Téléphone'
            },
            error: {
                required: 'Ce champ est requis.',
                email: 'Entrez une adresse courriel valide.',
                minimum : 'Minimum 7 personnes.',
                maximum : 'Maximum 1000 caractères autorisés.'
            },
        }
    }
};

// Retrieve the saved language from localStorage or default to 'fr'
const savedLocale = localStorage.getItem('locale') || 'fr';

const i18n = createI18n({
    locale: savedLocale, // Set the initial locale
    fallbackLocale: 'en', // Fallback locale
    messages,
});

export default i18n;