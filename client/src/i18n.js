import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        groupreservations: {
            title: "Group Reservation Form",
            intro:
                "Thank you for your interest in a group reservation! Please read the important information below before filling out the form.",
            capacityAndServices: {
                title: "Capacity & Services",
                content: {
                    capacity: "There is a maximum capacity of 20 people for the private room and 25 people for the rooftop terrace.",
                    terrace: "The terrace is heated, covered, and equipped with custom curtains.",
                    services: "Two distinct seatings:",
                    service1: "1st seating: 5:30 PM to 8:00 PM (table must be vacated by 8:00 PM)",
                    service2: "2nd seating: 8:30 PM until closing (11:30 PM)",
                    note: "Reservations for the terrace cannot be moved indoors."
                }
            },
            menuAndPrices: {
                title: "Menu and Prices",
                description:
                    "We offer a fixed 3-course menu composed of our classics (pizzas, seafood, salads, seasonal vegetables, meats, etc., depending on availability). There are 3 menu options to choose from, prices per person.",
                person: "/ per person",
                options: [
                    {
                        name: "Menu #1",
                        prix: "50$",
                        items:
                            "Salads, buffarela, broccoli, meatballs, tomato and white sauce pizzas, desserts of the moment.",
                    },
                    {
                        name: "Menu #2",
                        prix: "60$",
                        items:
                            "Salads, squid, broccoli, pasta, tomato and white sauce pizzas, desserts of the moment.",
                    },
                    {
                        name: "Menu #3",
                        prix: "70$",
                        items:
                            "Oysters, crudo, shrimp (seafood platter), buffarela, meatballs, pasta, tomato and white sauce pizzas, desserts of the moment.",
                    },
                ],
                note: {
                    title: "Notes:",
                    options: [
                        "No menu modifications can be made less than 24 hours before the reservation.",
                        "Food only, drinks not included.",
                    ]
                }
            },
            restrictionsAndConditions: {
                title: "Restrictions and Important Conditions",
                points: [
                    "Our kitchen uses a lot of dairy and gluten. Gluten-free options are possible but very limited.",
                    "No outside food or drinks allowed (including birthday cakes). Our homemade desserts are delicious!",
                    "Children are not allowed in group reservations.",
                    "Cancellations less than 12 hours in advance will incur full food charges for absentees. Please confirm your group as early as possible.",
                    "Duplicate reservations will be canceled.",
                    "Kitchen opens at 5:30 PM, last order at 10:15 PM.",
                    "We do not accept terrace reservations outside the group framework.",
                ],
            },
            formFields: {
                allergiesLabel: "Please list any allergies",
                addAllergy: "Add Allergy",
                modalTitle: "Please enter an allergy",
                modalPlaceholder: "Gluten, Nuts, etc ...",
                cancel: "Cancel",
                add: "Add",
                enterAllergyPrompt: "Enter an allergy",
                dateRequested: "Date requested *",
                service: "Desired service",
                room: "Desired room",
                serviceOptions: [
                    "1st Service (5:30 PM – 8:00 PM)",
                    "2nd Service (8:30 PM – 11:30 PM)",
                ],
                groupSize: "Group size * (minimum 7)",
                spacePreference: "Preferred space *",
                spaceOptions: ["Private room", "Rooftop terrace", "No preference"],
                menuChoice: "Menu choice *",
                menuOptions: ["Option 1", "Option 2", "Option 3"],
                allergies: "Allergies or dietary restrictions (please specify)",
                fullName: "Full name of group leader *",
                phone: "Phone number *",
                email: "Email *",
                additionalDetails: "Additional details (max 1000 characters)",
                disclaimer: "I have read and accept the above conditions.",
                submit: "Submit",
            },
            notes: {
                confirmation:
                    "Reservation is only confirmed after administrative validation.",
                responseTime:
                    "You will receive a response within 24 to 48 hours to confirm availability.",
                thankYou: "Thank you — see you soon!",
            }
        },
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
            options : 'Service Options',
            groupDetails : 'Group Information',
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
                schedule: "Two time slots are available: the first seating at 5:30 PM (the table must be vacated by 8:00 PM), or the second seating at 8:30 PM (until closing time).",
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
        groupreservations:{
            title: "Formulaire de réservation de groupe",
            intro:
                "Merci de votre intérêt pour une réservation de groupe ! Veuillez lire les informations importantes ci-dessous avant de compléter le formulaire.",
            capacityAndServices: {
                title: "Capacité & Services",
                content: {
                    capacity : "Il y a une capacité maximale de 20 personnes pour la salle privée et 25 personnes pour la terrasse sur le toit.",
                    terrace: "La terrasse est chauffée, couverte, avec des rideaux sur mesure.",
                    services: "Deux services distincts :",
                    service1: "1er service : 17h30 à 20h00 (la table doit être libérée à 20h00)",
                    service2: "2e service : 20h30 jusqu’à la fermeture (23h30)",
                    note: "Les réservations pour la terrasse ne peuvent pas être déplacées à l’intérieur."
                }
            },
            menuAndPrices: {
                title: "Menu et Tarifs",
                description:
                    "Nous offrons un menu fixe en 3 services, composé de nos classiques (pizzas, fruits de mer, salades, légumes de saison, viandes, etc., selon arrivage). Il y a 3 options de menu au choix, prix par personne.",
                person: "/ par personne",
                options: [
                    {
                        name: "Menu #1",
                        prix: "50$",
                        items:
                            "Salades, buffarela, brocoli, meatballs, pizzas sauce tomate et blanche, desserts du moment.",
                    },
                    {
                        name: "Menu #2",
                        prix: "60$",
                        items:
                            "Salades, calmars, brocoli, pâtes, pizzas sauce tomate et blanche, desserts du moment.",
                    },
                    {
                        name: "Menu #3",
                        prix: "70$",
                        items:
                            "Huîtres, crudo, crevettes (plateau de fruits de mer), buffarela, meatballs, pâtes, pizzas sauce tomate et blanche, desserts du moment.",
                    },
                ],
                note: {
                    title: "Notes:",
                    options: [
                        "Aucun changement de menu ne pourra être effectué moins de 24 heures avant la réservation.",
                        "Nourriture seulement, boissons non incluses.",
                    ]
                }
            },
            restrictionsAndConditions: {
                title: "Restrictions et conditions importantes",
                points: [
                    "Notre cuisine utilise beaucoup de produits laitiers et gluten. Options sans gluten possibles mais très limitées.",
                    "Aucune nourriture ou boisson extérieure n’est permise (y compris gâteaux d’anniversaire). Nos desserts maison sont délicieux !",
                    "Les enfants ne sont pas admis dans les réservations de groupe.",
                    "Toute annulation de moins de 12h entraîne une facturation complète de la nourriture pour les absents. Merci de confirmer votre groupe le plus tôt possible.",
                    "Les réservations en double seront annulées.",
                    "La cuisine ouvre à 17h30, dernière commande à 22h15.",
                    "Nous ne prenons pas de réservations pour la terrasse en dehors du cadre groupe.",
                ],
            },
            formFields: {
                allergiesLabel: "Veuillez indiquer vos allergies",
                addAllergy: "Ajouter une allergie",
                modalTitle: "Veuillez saisir une allergie",
                modalPlaceholder: "Gluten, Noix, etc ...",
                cancel: "Annuler",
                add: "Ajouter",
                dateRequested: "Date demandée *",
                service: "Service souhaité",
                room: "Salle souhaitée",
                serviceOptions: [
                    "1er service (17h30 – 20h00)",
                    "2e service (20h30 – 23h30)",
                ],
                groupSize: "Taille du groupe * (minimum 7)",
                spacePreference: "Espace souhaité *",
                spaceOptions: ["Salle privée", "Terrasse sur le toit","Aucune préférence"],
                menuChoice: "Choix du menu *",
                menuOptions: ["Option 1", "Option 2", "Option 3"],
                allergies: "Allergies ou restrictions alimentaires (merci de préciser)",
                fullName: "Nom complet du responsable *",
                phone: "Numéro de téléphone *",
                email: "Email *",
                additionalDetails: "Détails supplémentaires (1000 caractères max)",
                disclaimer: "J'ai lu et j'accepte les conditions mentionnées ci-dessus.",
                submit: "Soumettre",
            },
            notes: {
                confirmation:
                    "La réservation ne sera confirmée qu’après validation par l’administration.",
                responseTime:
                    "Vous recevrez une réponse sous 24 à 48 heures pour confirmer la disponibilité.",
                thankYou: "Merci — à très bientôt !",
            }
        },
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
            contact: 'Information de Contact',
            options : 'Options de Service',
            groupDetails : 'Information de Groupe',
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
                schedule: "Deux créneaux horaires s'offrent à vous, le premier service à 17:30 ( la table doit être libéré à 20:00) ou le deuxième service 20:30 ( jusqu'à la fermeture ).",
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