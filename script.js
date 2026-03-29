const cloudName = "Sajedulislam"; // Apnar Cloudinary name ekhane boshan
const tag = "mygallery"; // Chhobi upload korar somoy ei tag-ti use korben

async function fetchPhotos() {
  const gallery = document.getElementById("gallery");
  // Cloudinary theke automatically sob chhobi load korbe
  const response = await fetch(
    `https://res.cloudinary.com/${cloudName}/image/list/${tag}.json`,
  );
  const data = await response.json();

  data.resources.forEach((img) => {
    const imgUrl = `https://res.cloudinary.com/${cloudName}/image/upload/c_scale,w_500/v${img.version}/${img.public_id}.${img.format}`;

    const div = document.createElement("div");
    div.className =
      "mb-4 break-inside-avoid shadow-lg rounded-lg overflow-hidden";
    div.innerHTML = `<img src="${imgUrl}" loading="lazy" class="w-full hover:scale-105 transition-transform duration-300">`;

    gallery.appendChild(div);
  });
}

// fetchPhotos();
const password = prompt("Enter Password to view Gallery:");

if (password === "sajed@56") {
  // Ekhane apnar password din
  fetchPhotos(); // Password thik holei chhobi load hobe
} else {
  alert("Wrong Password!");
  document.body.innerHTML =
    "<h1 style='color:white; font-size: 2rem; text-align:center;'>Access Denied</h1>";
}
