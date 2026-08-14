const mockUser = { id:'demo-user', name:'Gurleen Kaur', photoPrivacy:'protected', district:'Ludhiana', gotra:'Sidhu' };
export const authService = {
  async getCurrentUser() { return { ...mockUser }; },
  async updateUser(patch) { return { ...mockUser, ...patch }; },
  async signOut() { return true; }
};
// Future adapter point: connect these methods to the authentication API.
