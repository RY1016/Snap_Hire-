import { User } from '../types';

// Sample user data
export const currentUser: User = {
  id: 'user123',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  profilePicture: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
  bookings: [
    {
      id: 'booking1',
      photographerId: '2',
      photographerName: 'John Smith',
      date: new Date('2025-05-15'),
      status: 'confirmed',
      package: 'Corporate Event'
    },
    {
      id: 'booking2',
      photographerId: '1',
      photographerName: 'Jane Doe',
      date: new Date('2025-06-20'),
      status: 'pending',
      package: 'Portrait Package'
    }
  ]
};