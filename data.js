/**
 * parameters of any given pets object
 * @typedef {Object} pet
 * @param {string} pet.name
 * @param {number} pet.id
 * @param {boolean} pet.fixed
 * @param {string} pet.microchip_num
 * @param {string} pet.summary
 * @param {string} pet.type
 * @param {string} pet.breed
 * @param {string} pet.sex
 * @param {string} pet.color
 * @param {string} pet.age
 * @param {string[]} pet.health_info
 */

/**
 * @type {pet[]}
 */
const pets = [
  {
    name: "Baxter",
	id: 34621,
    fixed: true,
    microchip_num: "982000364789210",
    summary:
      "Meet Baxter, a lovable Beagle with a knack for sniffing out fun! Baxter was rescued from a shelter and has blossomed into a friendly and outgoing boy. He loves long walks and has a keen sense of smell. He's great with kids and other dogs, making him the perfect family pet. His favorite pastime is chasing squirrels in the park and curling up for naps.",
    type: "Dog",
    breed: "Beagle",
    sex: "Male",
    color: "Tri-color (Black, Brown, White)",
    age: "5 Years",
    health_info: [
      "Health checked.",
      "Vaccinations up to date.",
      "Regularly dewormed.",
      "Microchipped.",
    ],
  },
  {
    name: "Luna",
    id: 57281,
    fixed: true,
    microchip_num: "981120019776432",
    summary:
      "Luna is a majestic Maine Coon with a fluffy grey coat and striking white markings. She was found as a stray and has since become a gentle and affectionate companion. Luna enjoys perching on windowsills, watching birds, and being the center of attention. She's a bit shy at first but warms up quickly, especially if you have treats! Luna would thrive in a calm environment where she can relax and be pampered like the queen she is.",
    type: "Cat",
    breed: "Maine Coon",
    sex: "Female",
    color: "Grey with white markings",
    age: "3 Years",
    health_info: [
      "Health checked.",
      "Vaccinations up to date.",
      "Regularly dewormed.",
      "Microchipped.",
    ],
  },
  {
    name: "Sandy",
    id: 41382,
    fixed: true,
    microchip_num: "985112004567890",
    summary:
      "Sandy is a heartwarming Golden Retriever with a golden coat as bright as her personality. Rescued from a neglectful situation, she has shown incredible resilience and love for life. Sandy is great with children and other pets, making her an ideal family dog. She enjoys outdoor adventures, especially swimming and fetching. Sandy is looking for a forever home where she can spread her joy and love.",
    type: "Dog",
    breed: "Golden Retriever",
    sex: "Female",
    color: "Golden",
    age: "7 Years",
    health_info: [
      "Health checked.",
      "Vaccinations up to date.",
      "Regularly dewormed.",
      "Microchipped.",
    ],
  },
  {
    name: "Oliver",
    id: 62894,
    fixed: true,
    microchip_num: "981120025678902",
    summary:
      "Oliver is a sleek Siamese cat with striking blue eyes and a seal point coat. Found wandering in a neighborhood, he's adapted well to shelter life but is eager for a permanent home. Oliver is vocal, expressing his thoughts freely, and enjoys interactive playtime. He's affectionate and loves to be close to his human companions, often following them around the house. Oliver would do best in a home where he can receive plenty of attention and love.",
    type: "Cat",
    breed: "Siamese",
    sex: "Male",
    color: "Seal Point",
    age: "2 Years",
    health_info: [
      "Health checked.",
      "Vaccinations up to date.",
      "Regularly dewormed.",
      "Microchipped.",
    ],
  },
  {
    name: "Max",
    id: 47920,
    fixed: true,
    microchip_num: "985120031478902",
    summary:
      "Max is a charming Chocolate Labrador with a love for life and a tail that never stops wagging. Rescued from an overcrowded shelter, Max has shown immense gratitude and loyalty to his caregivers. He is full of energy and would thrive in a home with a backyard or regular access to outdoor activities. Max is great with children and other dogs, and he's always up for a game of fetch or a leisurely walk. His ideal home would be with an active family who can match his energy and zest for life.",
    type: "Dog",
    breed: "Labrador Retriever",
    sex: "Male",
    color: "Chocolate",
    age: "4 Years",
    health_info: [
      "Health checked.",
      "Vaccinations up to date.",
      "Regularly dewormed.",
      "Microchipped.",
    ],
  },
  {
    name: "Daisy",
    id: 58329,
    fixed: true,
    microchip_num: "981120036712345",
    summary:
      "Daisy is a stunning white Persian cat with a luxurious coat and gentle demeanor. She was surrendered by an owner who could no longer care for her. Daisy is a bit of a diva and loves being the center of attention. She enjoys being groomed and will happily sit in your lap for hours. She's not fond of loud noises or fast movements, so a quiet and calm household would be ideal. Daisy is looking for a loving home where she can be pampered and adored.",
    type: "Cat",
    breed: "Persian",
    sex: "Female",
    color: "White",
    age: "6 Years",
    health_info: [
      "Health checked.",
      "Vaccinations up to date.",
      "Regularly dewormed.",
      "Microchipped.",
    ],
  },
  {
    name: "Charlie",
    id: 49583,
    fixed: true,
    microchip_num: "982000367829101",
    summary:
      "Charlie is a spirited Dapple Dachshund with a playful personality. He was found as a stray and has since shown an incredible zest for life. Charlie loves exploring, whether it's a new trail or the corners of his home. He's a bit mischievous and enjoys hiding his toys. Charlie would do well in a home with an individual or family who enjoys fun and adventure. He's small but has a big heart and a lot of love to give.",
    type: "Dog",
    breed: "Dachshund",
    sex: "Male",
    color: "Dapple (Black and Gray)",
    age: "3 Years",
    health_info: [
      "Health checked.",
      "Vaccinations up to date.",
      "Regularly dewormed.",
      "Microchipped.",
    ],
  },
  {
    name: "George",
    id: 61029,
    fixed: true,
    microchip_num: "985112007651234",
    summary:
      "George is a robust British Shorthair with a striking blue-gray coat and a calm, dignified demeanor. Rescued from a busy city environment, he's adapted well to a quieter life. George enjoys leisurely days, lounging in sunny spots, and watching the world go by. He's not overly demanding for attention but appreciates a good chin scratch and will purr loudly in response. George is a bit reserved at first but becomes a loyal companion once he feels comfortable. He would be perfect for someone seeking a low-maintenance, independent cat.",
    type: "Cat",
    breed: "British Shorthair",
    sex: "Male",
    color: "Blue (Gray)",
    age: "4 Years",
    health_info: [
      "Health checked.",
      "Vaccinations up to date.",
      "Regularly dewormed.",
      "Microchipped.",
    ],
  },
  {
    name: "Bella",
    id: 50824,
    fixed: true,
    microchip_num: "982000360234567",
    summary:
      "Bella is a spirited Boxer with a fawn coat and charming white markings. She was rescued from a neglectful situation and has shown immense love and gratitude to her caregivers. Bella is energetic and playful, enjoying activities like running and playing fetch. She's great with older children and would thrive in a home where she can be active and engaged. Bella has a big personality and would be a fantastic companion for someone who loves adventure and fun.",
    type: "Dog",
    breed: "Boxer",
    sex: "Female",
    color: "Fawn with white markings",
    age: "6 Years",
    health_info: [
      "Health checked.",
      "Vaccinations up to date.",
      "Regularly dewormed.",
      "Microchipped.",
    ],
  },
  {
    name: "Sophie",
    id: 63845,
    fixed: true,
    microchip_num: "985112008765432",
    summary:
      "Sophie is a young Ragdoll cat with a soft seal point coat and mesmerizing blue eyes. She was found as a kitten and raised in a foster home. Sophie is incredibly affectionate, often seeking out laps to curl up in. She's playful and enjoys interactive toys, but she's also content to relax and watch the world go by. Sophie gets along well with other pets and would be an excellent addition to a loving family or individual looking for a gentle and loving companion.",
    type: "Cat",
    breed: "Ragdoll",
    sex: "Female",
    color: "Seal point with blue eyes",
    age: "1 Year",
    health_info: [
      "Health checked.",
      "Vaccinations up to date.",
      "Regularly dewormed.",
      "Microchipped.",
    ],
  },
];
