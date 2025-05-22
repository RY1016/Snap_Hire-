import { Photographer } from '../types';

// Sample data for the photographers
export const photographers: Photographer[] = [
  {
    id: '1',
    name: 'Jane Doe',
    categories: ['Wedding', 'Portrait'],
    price: 'Starts at $150/hour',
    rating: 4.5,
    reviewCount: 28,
    profilePicture: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    thumbnailUrl: 'https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=600',
    about: 'Passionate wedding and portrait photographer with over 10 years of experience capturing life\'s beautiful moments.',
    serviceArea: 'Metro City and surrounding areas (within 50 miles)',
    pricingTiers: [
      {
        name: 'Basic Hourly',
        description: '$150 / hour for minimum 2-hour sessions. Includes basic editing and digital downloads.'
      },
      {
        name: 'Portrait Package',
        description: '1 hour session, 3 outfit changes, 20 edited digital images - $400'
      },
      {
        name: 'Wedding Package (Basic)',
        description: '6 hours coverage, engagement session, online gallery, 300+ digital images - $1,800'
      }
    ],
    portfolioImages: [
      'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/936554/pexels-photo-936554.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1139612/pexels-photo-1139612.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    reviews: [
      {
        clientName: 'Client A',
        comment: 'Jane was amazing! She made our wedding day so special, and the photos are stunning. Every moment was captured beautifully.',
        rating: 5
      },
      {
        clientName: 'Client B',
        comment: 'Very happy with the results of our family portrait session. Jane is great with kids and captured genuine smiles from everyone.',
        rating: 4
      }
    ]
  },
  {
    id: '2',
    name: 'John Smith',
    categories: ['Events', 'Corporate'],
    price: 'Package deals available',
    rating: 5.0,
    reviewCount: 42,
    profilePicture: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    thumbnailUrl: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=600',
    about: 'Professional event and corporate photographer specializing in conferences, corporate headshots, and product launches.',
    serviceArea: 'Metro City, available for nationwide travel',
    pricingTiers: [
      {
        name: 'Corporate Event',
        description: 'Full day coverage (up to 8 hours), professional editing, online gallery - $1,500'
      },
      {
        name: 'Corporate Headshots',
        description: 'On-site studio setup, 30-minute sessions per person, 3 retouched images per person - $200/person (minimum 5 people)'
      },
      {
        name: 'Product Photography',
        description: 'Studio session with 10 products, 3 angles each, professional editing - $800'
      }
    ],
    portfolioImages: [
      'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    reviews: [
      {
        clientName: 'Corporate Client',
        comment: 'John exceeded our expectations at our annual conference. His professionalism and ability to capture key moments without being intrusive was impressive.',
        rating: 5
      },
      {
        clientName: 'Startup CEO',
        comment: 'The team headshots were outstanding. John made everyone feel comfortable and the results were exactly what we needed for our website rebrand.',
        rating: 5
      }
    ]
  },
  {
    id: '3',
    name: 'Alex Ray',
    categories: ['Product', 'Fashion'],
    price: '$100 - $300 / hour',
    rating: 4.8,
    reviewCount: 35,
    profilePicture: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600',
    thumbnailUrl: 'https://images.pexels.com/photos/2442888/pexels-photo-2442888.jpeg?auto=compress&cs=tinysrgb&w=600',
    about: 'Specialized in product and fashion photography with a minimalist, clean aesthetic. Works with both established brands and emerging designers.',
    serviceArea: 'Studio in Downtown Metro City, available for location shoots within 30 miles',
    pricingTiers: [
      {
        name: 'Product Basic',
        description: 'White background product photography, 5 products with 3 angles each - $500'
      },
      {
        name: 'Lookbook Package',
        description: '4-hour session, 2 models, 10 outfits, styling and makeup not included - $1,200'
      },
      {
        name: 'E-commerce Package',
        description: 'Full day shoot (8 hours), up to 30 products, multiple angles, basic retouching - $2,000'
      }
    ],
    portfolioImages: [
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1566435/pexels-photo-1566435.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5947519/pexels-photo-5947519.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    reviews: [
      {
        clientName: 'Fashion Brand',
        comment: 'Alex has an incredible eye for detail. Our product photos have never looked better.',
        rating: 5
      },
      {
        clientName: 'Online Retailer',
        comment: 'Great work ethic and delivered exactly what we needed for our website. Will definitely hire again.',
        rating: 4.5
      }
    ]
  },
  {
    id: '4',
    name: 'Samantha Bee',
    categories: ['Family', 'Newborn'],
    price: 'Starts at $120/hour',
    rating: 4.2,
    reviewCount: 19,
    profilePicture: 'https://images.pexels.com/photos/3394347/pexels-photo-3394347.jpeg?auto=compress&cs=tinysrgb&w=600',
    thumbnailUrl: 'https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=600',
    about: 'Specializing in newborn and family photography with a natural, lifestyle approach. Creating timeless memories for families for over 5 years.',
    serviceArea: 'Metro City suburbs, home studio available for newborn sessions',
    pricingTiers: [
      {
        name: 'Family Session',
        description: '1-hour outdoor session, 20 digital images - $300'
      },
      {
        name: 'Newborn Package',
        description: '2-3 hour in-home or studio session, 25 digital images, print release - $450'
      },
      {
        name: 'Watch Me Grow',
        description: 'Three sessions over baby\'s first year (newborn, 6 months, 1 year), 20 images per session - $900'
      }
    ],
    portfolioImages: [
      'https://images.pexels.com/photos/4149035/pexels-photo-4149035.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3875080/pexels-photo-3875080.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3662803/pexels-photo-3662803.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3933293/pexels-photo-3933293.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/36029/pexels-photo-36029.jpg?auto=compress&cs=tinysrgb&w=600'
    ],
    reviews: [
      {
        clientName: 'New Mom',
        comment: 'Samantha was so gentle with our newborn. The photos are absolutely beautiful and capture this precious time perfectly.',
        rating: 5
      },
      {
        clientName: 'Family of Four',
        comment: 'Good photos but we had to reschedule twice due to her availability changing.',
        rating: 3.5
      }
    ]
  },
  {
    id: '5',
    name: 'Marcus Chen',
    categories: ['Landscape', 'Architecture'],
    price: 'From $200/hour',
    rating: 4.9,
    reviewCount: 31,
    profilePicture: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600',
    thumbnailUrl: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600',
    about: 'Award-winning architectural and landscape photographer with a passion for capturing the interplay of light, space, and nature. Featured in multiple design magazines.',
    serviceArea: 'Worldwide, based in Metro City',
    pricingTiers: [
      {
        name: 'Architecture Basic',
        description: '3-hour session, exterior and interior shots, 15 final edited images - $600'
      },
      {
        name: 'Landscape Collection',
        description: 'Full day on location, 20 high-resolution images with advanced editing - $1,600'
      },
      {
        name: 'Commercial License',
        description: 'Full usage rights for commercial purposes, includes raw files - Custom pricing'
      }
    ],
    portfolioImages: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2086622/pexels-photo-2086622.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    reviews: [
      {
        clientName: 'Architecture Firm',
        comment: 'Marcus\'s attention to detail and understanding of architectural elements is exceptional. The images he captured of our latest project exceeded our expectations.',
        rating: 5
      },
      {
        clientName: 'Travel Magazine',
        comment: 'Incredible landscape work. Marcus has a unique ability to capture the essence of a location.',
        rating: 4.8
      }
    ]
  },
  {
    id: '6',
    name: 'Luna Martinez',
    categories: ['Street', 'Documentary'],
    price: '$180/hour',
    rating: 4.7,
    reviewCount: 24,
    profilePicture: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600',
    thumbnailUrl: 'https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=600',
    about: 'Documentary and street photographer focusing on urban life and cultural events. Published in various international magazines and exhibited in local galleries.',
    serviceArea: 'Metro City and international assignments',
    pricingTiers: [
      {
        name: 'Street Photography Workshop',
        description: '4-hour group session, camera techniques, editing tips - $250/person'
      },
      {
        name: 'Event Documentation',
        description: 'Full day coverage, storytelling approach, 100+ edited images - $1,400'
      },
      {
        name: 'Personal Project',
        description: 'Custom documentary project, includes planning and final photo book - From $2,500'
      }
    ],
    portfolioImages: [
      'https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1755243/pexels-photo-1755243.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2417458/pexels-photo-2417458.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2524368/pexels-photo-2524368.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2901581/pexels-photo-2901581.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    reviews: [
      {
        clientName: 'Festival Organizer',
        comment: 'Luna captured the spirit of our street festival perfectly. Her documentary style really brought out the energy of the event.',
        rating: 5
      },
      {
        clientName: 'Workshop Participant',
        comment: 'Learned so much from Luna\'s street photography workshop. She has a great teaching style and deep knowledge of the craft.',
        rating: 4.5
      }
    ]
  }
];

export const getPhotographerById = (id: string): Photographer | undefined => {
  return photographers.find(photographer => photographer.id === id);
};

export const getCategoryStats = () => {
  const categories = new Map();

  photographers.forEach(photographer => {
    photographer.categories.forEach(category => {
      if (!categories.has(category)) {
        categories.set(category, {
          name: category,
          count: 1,
          priceRange: photographer.price,
          popularTimes: 'Weekends'
        });
      } else {
        const stats = categories.get(category);
        stats.count++;
      }
    });
  });

  return Array.from(categories.values());
};

// For demonstration purposes, this function returns a subset of photographers as available
// In a real application, this would check against a booking database
export const getAvailablePhotographers = (date: string, timeSlot: string): Photographer[] => {
  // Simple simulation of availability - returns 2 random photographers as available
  const availableIds = ['1', '2']; // IDs of photographers you want to be available
  return photographers.filter(photographer => availableIds.includes(photographer.id));
};