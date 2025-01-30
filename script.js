
let scaleFactor = 1; 
const modalImage = document.getElementById('modal-image'); 


function toggleModal(person) {
  const modal = document.getElementById('thanks-modal');
  const modalContent = document.getElementById('thanks-modal-content');
  modal.style.display = 'flex';
  modalContent.textContent = `Thank you, ${person.name}! Your support means a lot.`;


  const intervalId = setInterval(scaleImage, 500);


  setTimeout(() => {
    modal.style.display = 'none';
    clearInterval(intervalId);
  }, 4000);
}

function scaleImage() {
  scaleFactor = scaleFactor === 1 ? 0.8 : 1;
  modalImage.style.transform = `scale(${scaleFactor})`;
}


document.getElementById('sign-petition').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const person = { name, email };

  addSignature(person);
  toggleModal(person);

  document.getElementById('sign-petition').reset();
});


function addSignature(person) {
  const signatureList = document.getElementById('signature-list');
  const signatureCount = document.getElementById('signature-count');
  
  const newSignature = document.createElement('p');
  newSignature.textContent = `🖊️ ${person.name} supports this cause.`;
  signatureList.appendChild(newSignature);

  const currentCount = parseInt(signatureCount.textContent, 10);
  signatureCount.textContent = currentCount + 1;
}


document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('thanks-modal').style.display = 'none';
});
const missionImage = document.getElementById('animated-image');


let scale = 1;
let zoomIn = true;


function zoomImage() {
    if (zoomIn) {
        scale += 0.01; 
        if (scale >= 1.1) { 
            zoomIn = false;
        }
    } else {
        scale -= 0.01;
        if (scale <= 1) { 
            zoomIn = true;
        }
    }
    
    missionImage.style.transform = `scale(${scale})`;
}

setInterval(zoomImage, 50);
