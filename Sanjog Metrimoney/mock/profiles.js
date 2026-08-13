export const profiles = [
  { id:'jasleen-001', name:'Jasleen Kaur', initials:'JK', age:25, profession:'Software Engineer', location:'Mohali', district:'Ludhiana', gotra:'Sidhu', education:'B.Tech', postedBy:'Parent', verified:true, community:'Punjabi', family:'Educated, close-knit family', preferences:['Family-oriented','Career-minded','Respectful'], about:'A thoughtful and ambitious professional who values family traditions, personal growth and meaningful communication.', photo:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80' },
  { id:'maninder-002', name:'Maninder Singh', initials:'MS', age:28, profession:'IT Manager', location:'Toronto / Moga', district:'Moga', gotra:'Grewal', education:'MBA', postedBy:'Self', verified:true, protectedPhoto:true, community:'Punjabi', family:'Well-settled family with strong values', preferences:['Family-oriented','Professional','NRI connection'], about:'A grounded professional balancing a global career with Punjabi family values and a strong sense of responsibility.', photo:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80' },
  { id:'simran-003', name:'Dr. Simran Dhillon', initials:'SD', age:26, profession:'MBBS Doctor', location:'Amritsar', district:'Amritsar', gotra:'Dhillon', education:'MBBS', postedBy:'Self', verified:true, community:'Punjabi', family:'Professional family', preferences:['Kind-hearted','Educated','Family-oriented'], about:'A compassionate doctor who enjoys learning, family time and building a balanced life with mutual respect.' },
  { id:'karan-004', name:'Karan Bhatti', initials:'KB', age:29, profession:'Civil Engineer', location:'Jalandhar', district:'Jalandhar', gotra:'Bhatti', education:'B.Tech', postedBy:'Family', verified:false, community:'Punjabi', family:'Respectable family', preferences:['Responsible','Family-oriented'], about:'A responsible professional focused on career growth, family and a stable future.' }
];

export const stories = [
  { id:'harpreet', name:'Harpreet', fullName:'Harpreet Kaur', initials:'H', details:'📍 Ludhiana · M.Sc IT' },
  { id:'gurpreet', name:'Gurpreet', fullName:'Gurpreet Sidhu', initials:'G', details:'📍 Amritsar · Business' },
  { id:'aman', name:'Aman', fullName:'Aman Grewal', initials:'A', details:'📍 Mohali · NRI Canada' }
];

export function getRecommendedProfiles() { return profiles.filter(profile => profile.verified); }
export function searchProfiles(query='') {
  const q=query.trim().toLowerCase();
  return q ? profiles.filter(profile => Object.values(profile).flat().join(' ').toLowerCase().includes(q)) : profiles;
}
export function getStories() { return stories; }
