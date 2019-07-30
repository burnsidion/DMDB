exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('band_bios').del().then(function() {
    // Inserts seed entries
    return knex('band_bios').insert([
      {
        id: 1,
        bandName: 'Death',
        bandLogo:'',
        yearFormed: 1983,
        genre: "Death Metal",
        bandBio: "Death was an American death metal band from Orlando, Florida, founded in 1983 by guitarist and vocalist Chuck Schuldiner. Death is considered to be among the most influential bands in heavy metal and a pioneering force in the extreme metal subgenre of death metal. Their debut album, Scream Bloody Gore, has been widely regarded as the first death metal record (although there is some dispute to that claim as Possessed's debut album Seven Churches and Necrophagia's debut album Season of the Dead were released before). Death had a revolving lineup, with Schuldiner being the sole consistent member. The group's style also progressed, from the raw sound on its first two albums to a more sophisticated one in its later stage. The band ceased to exist after Schuldiner died of glioma and pneumonia in December 2001, but remains an enduring influence on heavy metal.",
        bandPages: '',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      },
      {
        id:2,
        bandName: 'Possessed',
        bandLogo: '',
        yearFormed: 1983,
        genre:"Death Metal",
        bandBio: "Possessed is an American death metal band, originally formed in 1983. Noted for their fast style of playing and Jeff Becerra's growled vocals, they are often called the first band in the death metal genre.[1] The band is also notable for featuring Larry LaLonde, who was the guitarist of Possessed during the mid-1980s, and went on to join Primus. After breaking up in 1987, and briefly reforming from 1990 to 1993, the band reformed under original bassist and vocalist Jeff Becerra in 2007. To date, the band has released three studio albums, one live album, two compilation albums and two EPs.",
        bandPages:'',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      },
      {
        id:3,
        bandName:'Morbid Angel',
        bandLogo:'',
        yearFormed: 1983,
        genre:"Death Metal",
        bandBio: 'Morbid Angel is an American death metal band based in Tampa, Florida formed in 1983 by guitarist and sole remaining original member Trey Azagthoth, vocalist and bassist Dallas Ward, and drummer Mike Browning. Widely considered as one of the most influential bands in the genre and important in the transition of death metal from its thrash metal roots, they were one of the first bands to incorporate guttural vocals, up-tempo blast beats, multiple tempo changes and dark atmosphere. They have been described as one of "the most influential and emulated bands in death metal", alongside Obituary, Death and Cannibal Corpse, and have been cited as an influence by many later bands.[1] They were also the first death metal band to experience mainstream success in connection with being signed to Giant Records in 1992, heavy rotation of their music videos on MTV, and having the music video for the song "God of Emptiness" shown on an episode of Beavis and Butt-head.[2][3] Their first four albums – Altars of Madness (1989), Blessed Are the Sick (1991), Covenant (1993) and Domination (1995) – are considered classics in the genre.',
        bandPages:'',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }
    ])
    .then(() => {
         return knex.raw(`SELECT setval('band_bios_id_seq', (SELECT MAX(id) FROM band_bios));`)
       })
  });
};
