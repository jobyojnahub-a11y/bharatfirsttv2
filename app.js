const blogData = [
  {
    title: "अखिलेश यादव बोले - भाजपा नेता अपराधियों और भ्रष्टाचारियों से मिले",
    excerpt:
      "लखनऊ में प्रेस कॉन्फ्रेंस के दौरान अखिलेश यादव ने सरकार पर हमला बोला और नई रणनीति की बात कही।",
    location: "Lucknow",
    date: "19 Jan 2026",
    image:
      "https://images.unsplash.com/photo-1541873676-a18131494184?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "झाबुआ मेले में बड़ा हादसा: क्षमता से अधिक सवारी से झूला गिरा",
    excerpt:
      "प्रत्यक्षदर्शियों के अनुसार सुरक्षा नियमों की अनदेखी हुई। प्रशासन ने जांच के आदेश दिए।",
    location: "Jhabua",
    date: "19 Jan 2026",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "उत्तर भारत में शीतलहर तेज, स्कूलों के समय में बदलाव",
    excerpt:
      "कई जिलों में तापमान 4 डिग्री तक पहुंचा। प्रशासन ने एडवाइजरी जारी की।",
    location: "New Delhi",
    date: "19 Jan 2026",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=80",
  },
];

const blogGrid = document.getElementById("blogGrid");

blogData.forEach((post) => {
  const card = document.createElement("article");
  card.className = "blog-card";
  card.innerHTML = `
    <div>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <div class="blog-footer">
        <span>${post.location}</span>
        <span>${post.date}</span>
      </div>
      <div class="post-actions">
        <button class="icon-button">🙂 Like</button>
        <button class="icon-button">💬 Comment</button>
        <button class="icon-button">🔗 Share</button>
      </div>
    </div>
    <img src="${post.image}" alt="${post.title}" />
  `;
  blogGrid.appendChild(card);
});

const timeElement = document.getElementById("time");

const updateTime = () => {
  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString("hi-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

updateTime();
setInterval(updateTime, 1000);
