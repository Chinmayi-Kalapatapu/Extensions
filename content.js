
function loadScaryImage(){
  const image = document.querySelectorAll('img');
  image.forEach((img) => {
    const orgWidth = img.width;
    const orgHeight = img.height;
    img.src = 'https://deadline.com/wp-content/uploads/2019/07/momo.png?w=1024';
    img.width = orgWidth;
    img.height = orgHeight;
  });
}

function SpookyTextGenerator(count){
  output=[];
  const words= ["Afraid","Alarming","Cadaver", "Alien","Casket","Apparition","Cemetery","Corpse","Coven","Creepy","Crypt","Darkness","Dead","Death","Demon","Devil","Eerie","Faint","Frightening","Ghost","Ghoul","Grave","Graveyard","Halloween","Haunt","Haunting","Howl","Hysteria","Infernal","Inferno","Lurk","Macabre","Magic","Mausoleum","Midnight","Monster","Moonlight","Mummy","Mysterious","Mystery","Nightmare","Occult","Omen","Phantom","Poltergeist","Possessed","Pumpkin","Reaper","Satan","Scare","Scared","Scream","Shadow","Skeleton","Skull","Sorcery","Specter","Spooky","Supernatural","Superstition","Terror","Tomb","Tombstone","Vampire","Witch","Zombie","Abnormal","Afterlife","Alien","Angel","Apparition","Astral","Astrology","Astral","Aura","Banshee","Beast","Beastly","Bizarre","Black cat","Blood-curdling","Bloody","Bones","Boneyard","Boo","Boogeyman","Cackle", "lurks", "haunts", "whispers", "creeps", "stalks", "possesses", "terrifies", "chills", "summons", "emerges","shadow", "ghost", "phantom", "spirit", "apparition", "witch", "zombie", "vampire", "monster", "skeleton" ];
  for (var i = 0; i < count; i++) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    output.push(randomWord);
  }
  return output.join(" ");
};

function changeText(){
  const heading = document.querySelector("h1");
  heading.innerText = "Well I definitely missed you ;)!";
  changeParagraphs();

}

function countWords(text) {
  // Split the text by spaces, and filter out empty strings
  const words = text.split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

function changeParagraphs(){
  const paragraph = document.querySelectorAll("p , h2, h3, h4, h5, h6");
  paragraph.forEach((p) => {
    const text = p.innerText;
    const wordCount = countWords(text);
    const newText = SpookyTextGenerator(wordCount);
    p.innerText = newText;
  });
}

function generateRandomSpookyText() {
  const noun = getRandomElement(spookyNouns);
  const adjective = getRandomElement(spookyAdjectives);
  const verb = getRandomElement(spookyVerbs);
  const place = getRandomElement(spookyPlaces);
  return `The ${adjective} ${noun} ${verb} in the ${place}.`;
}

function changeHeadings(){


}
window.addEventListener('load', loadScaryImage);
window.addEventListener('load', changeText);
