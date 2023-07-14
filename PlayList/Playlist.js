class RecentlyPlayedStore {
  constructor(capacity) {
    this.capacity = capacity;
    this.store = new Map();
  }

  addSong(user, song) {
    if (!this.store.has(user)) {
      this.store.set(user, []);
    }

    const userSongs = this.store.get(user);
    const index = userSongs.findIndex((item) => item === song);

    if (index !== -1) {
      
      userSongs.splice(index, 1);
    }

    userSongs.unshift(song); 

    if (userSongs.length > this.capacity) {
      userSongs.pop(); 
    }
  }

  getRecentlyPlayed(user) {
    if (!this.store.has(user)) {
      return [];
    }

    return this.store.get(user);
  }
}


const store = new RecentlyPlayedStore(5);

store.addSong("user1", "song1");
store.addSong("user1", "song2");
store.addSong("user2", "song3");
store.addSong("user2", "song1");
store.addSong("user1", "song4");
store.addSong("user2", "song5");
store.addSong("user1", "song3"); 

console.log(store.getRecentlyPlayed("user1")); 
console.log(store.getRecentlyPlayed("user2")); 