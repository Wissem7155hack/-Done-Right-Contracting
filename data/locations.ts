// Location Data for SEO Landing Pages
// This file contains information for each city/location we serve

export interface LocationData {
    city: string;
    slug: string;
    postalCode: string;
    region: string;
    description: string;
    landmarks: string[];
    services: string[];
    testimonial?: {
        text: string;
        author: string;
        service: string;
    };
    mapUrl: string;
    latitude?: number;
    longitude?: number;
}

export const locations: LocationData[] = [
    {
        city: 'Athabasca',
        slug: 'athabasca',
        postalCode: 'T9S 1B1',
        region: 'Alberta',
        description:
            'Premier landscaping, excavation, and snow removal in Athabasca. We provide durable driveways, limestone fire pits, and reliable winter maintenance for homes and businesses.',
        landmarks: [
            'Athabasca University',
            'Athabasca Riverfront',
            'Muskeg Creek Park',
            'Athabasca Regional Multiplex',
        ],
        services: [
            'Excavation & Grading',
            'Snow Removal',
            'Hardscaping & Pavers',
            'Limestone Fire Pits',
            'Driveway Construction',
            'Demolition',
            'Material Supply',
            'Site Maintenance',
        ],
        testimonial: {
            text: 'Done Right Contracting donated their snow removal services to our housing society. Hard working and community focused!',
            author: 'Athabasca Cares',
            service: 'Snow Removal',
        },
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18944.4789505417!2d-113.2959965!3d54.719602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a3c1f887693991%3A0x286395e5057a1516!2sAthabasca%2C%20AB!5e0!3m2!1sen!2sca!4v1706654400000!5m2!1sen!2sca',
        latitude: 54.7196,
        longitude: -113.2850
    },
    {
        city: 'Boyle',
        slug: 'boyle',
        postalCode: 'T0A 0M0',
        region: 'Alberta',
        description:
            'Expert excavation and contracting services in Boyle. From fixing drainage issues with French drains to demolition and handyman work, we get it done right.',
        landmarks: [
            'Boyle School',
            'Millview Recreation Complex',
            'Skeleton Lake',
        ],
        services: [
            'Driveway Grading',
            'French Drains',
            'Demolition',
            'Handyman Services',
            'Snow Removal',
            'Brush Clearing',
            'Landscaping',
        ],
        testimonial: {
            text: 'Fixed our driveway drainage perfectly. No more potholes or pooling water!',
            author: 'Local Resident',
            service: 'Excavation',
        },
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9472.0!2d-112.8!3d54.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBoyle!5e0!3m2!1sen!2sca!4v1234567890',
    },
    {
        city: 'Grassland',
        slug: 'grassland',
        postalCode: 'T0A 1V0',
        region: 'Alberta',
        description:
            'Serving Grassland with heavy-duty landscaping and material supply. Need rocks, sand, or limestone? We deliver quality materials and service.',
        landmarks: [
            'Grassland Community Hall',
            'Grassland School',
        ],
        services: [
            'Material Supply (Pretty Rock)',
            'Gravel & Sand',
            'Site Maintenance',
            'Excavation',
            'Land Clearing',
            'Fencing',
        ],
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9472.0!2d-112.5!3d54.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGrassland!5e0!3m2!1sen!2sca!4v1234567890',
    },
    {
        city: 'Bison Ridge',
        slug: 'bison-ridge',
        postalCode: 'T9S',
        region: 'Alberta',
        description:
            'Your neighbors in Bison Ridge for all outdoor projects. Snow removal, acreage maintenance, and custom hardscaping solutions.',
        landmarks: [
            'Bison Ridge Estates',
        ],
        services: [
            'Acreage Maintenance',
            'Snow Clearing',
            'Driveways',
            'Fire Pits',
            'Tree Planting',
            'Landscaping',
        ],
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18944.0!2d-113.3!3d54.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAthabasca!5e0!3m2!1sen!2sca!4v1234567890',
    },
];

// Helper function to get location by slug
export const getLocationBySlug = (slug: string): LocationData | undefined => {
    return locations.find((loc) => loc.slug === slug);
};

// Helper function to get all location slugs (for routing)
export const getLocationSlugs = (): string[] => {
    return locations.map((loc) => loc.slug);
};
